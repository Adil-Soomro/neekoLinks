"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send } from "lucide-react";
import { Josefin_Sans, Poppins } from "next/font/google";
import { ToastError, ToastSuccess } from "@/utils/toastUtils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      const data = await res.json();

      if (!data.success) {
        ToastError(data.message);
        return;
      }

      ToastSuccess("Successfully subscribed!");
      setEmail("");
    } catch (error) {
      ToastError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-screen-2xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Stay updated with our latest features
        </h2>
        <p className={`${josefin.className} text-gray-600 mb-8 text-lg`}>
          Join our newsletter and be the first to know about new features, tips,
          and special offers.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`${poppins.className} font-medium flex-1 px-4 py-3 rounded-lg border border-gray-300 outline-8 focus:outline-indigo-500 transition-shadow`}
              required
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl transition-shadow disabled:opacity-70 flex items-center gap-2"
            >
              {loading ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
