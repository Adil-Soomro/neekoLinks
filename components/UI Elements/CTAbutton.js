"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const CTAbutton = () => {
  const [refFeature, inViewFeature] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <motion.div
      ref={refFeature}
      initial={{ opacity: 0, y: 30 }}
      animate={inViewFeature ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        Get Started with NeekoLinks
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`${josefin.className} text-gray-300 mt-2`}
      >
        Join thousands of users who have simplified link sharing.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        <Link href="/shorten">
          <motion.button
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-black hover:bg-gray-200 rounded-lg px-6 py-2 font-bold shadow-lg font-opensans"
          >
            Start Now
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CTAbutton;
