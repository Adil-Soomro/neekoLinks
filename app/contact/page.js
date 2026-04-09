"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import { ToastError, ToastSuccess } from "@/utils/toastUtils";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, SetStatus] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await res.json();

      if (!res.ok) {
        ToastError(resData.message || "Something went wrong, try again.");
        return;
      }

      ToastSuccess(resData.message);
      setFormData({ name: "", email: "", message: "" });
      SetStatus(true);
    } catch (error) {
      console.log(error);
      ToastError("Network error, please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-screen-2xl mx-auto py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 ease-linear animate-background-shift py-20"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            We'd Love to Hear From You!
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you have a question, suggestion, or just want to say hello -
            our team is ready to help!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12 sm:mb-16 px-4"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-500 hover:scale-105 transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Email Us
            </h3>
            <p className="text-gray-600 mb-2">General inquiries</p>
            <a
              href="mailto:support@bitlinks.com"
              className="text-blue-600 hover:text-blue-700"
            >
              support@neekolinks.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Call Us
            </h3>
            <p className="text-gray-600 mb-2">Mon-Fri, 9am-5pm EST</p>
            <a
              href="tel:+923126236861"
              className="text-green-600 hover:text-green-700"
            >
              +1 XYZ XYZZ
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Visit Us
            </h3>
            <p className="text-gray-600">123 NeekoLinks St</p>
            <p className="text-gray-600">Tech City</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-2 focus:outline-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-2 focus:outline-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-2 focus:outline-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="flex justify-center w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 text-white font-medium p-3 rounded-lg  focus:outline-none focus:ring-1 focus:ring-blue-500"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    Sending Message
                    <div className="bg-white h-2 border-t-2 border-blue-500 animate-spin" />
                  </span>
                ) : (
                  <div className="flex items-center gap-1">
                    <span> Send Message</span>
                    <Send className="w-5 h-5 mr-2" />
                  </div>
                )}
              </motion.button>
            </form>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Headquarters
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA,+USA&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
