"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Faq = () => {
  const [refFeature, inViewFeature] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [openStates, setOpenStates] = useState(Array(8).fill(false));

  const faqItems = [
    {
      question: "What is a URL shortener, and how does it work?",
      answer:
        "A URL shortener takes long web addresses (URLs) and converts them into shorter, more manageable links. When users click the shortened link, they are redirected to the original URL.",
    },
    {
      question: "Is it free to use this URL shortener?",
      answer:
        "Yes, the URL shortener is completely free to use. You can create and manage as many short URLs as you need.",
    },
    {
      question: "Are my shortened URLs permanent?",
      answer:
        "Yes, once created, your shortened URLs will remain active unless deleted manually or if they violate our terms of service.",
    },
    {
      question: "Is there a limit to the number of URLs I can shorten?",
      answer:
        "There is no strict limit on the number of URLs you can shorten. However, we recommend creating an account to manage and track your URLs more effectively.",
    },
    {
      question: "Can I track how many people clicked my shortened URLs?",
      answer:
        "Yes, you can track the click statistics of your shortened URLs, including the number of clicks and other details such as location and browser type.",
    },
    {
      question: "Are shortened URLs secure?",
      answer:
        "Yes, the URLs created are secure. However, always verify the destination URL if you receive a shortened link from an unknown source.",
    },
    {
      question: "Can I delete or disable a shortened URL?",
      answer:
        "Yes, you can delete or deactivate any shortened URL from your account dashboard at any time.",
    },
    {
      question: "Is this URL shortener mobile-friendly?",
      answer:
        "Absolutely! Our platform is optimized for both desktop and mobile users, ensuring a seamless experience across devices.",
    },
  ];

  const toggleOpenState = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  };

  const leftColumn = faqItems.slice(0, 4);
  const rightColumn = faqItems.slice(4);

  return (
    <motion.div
      ref={refFeature}
      initial={{ opacity: 0, y: 30 }}
      animate={inViewFeature ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="px-8 bg-gradient-to-r container mx-auto max-w-screen-2xl from-purple-100 to-pink-100"
    >
      <div className="py-8 sm:px-12 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-4xl tracking-tight text-gray-900 font-poppins"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div>
            {leftColumn.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.3 }}
                className="mb-10 border-b pb-4 bg-purple-100 rounded-lg"
              >
                <div
                  onClick={() => toggleOpenState(index)}
                  className="flex items-center justify-between cursor-pointer text-gray-900 hover:text-pink-700"
                >
                  <h3 className="text-lg font-bold">{item.question}</h3>
                  {openStates[index] ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight className="text-primary-600" />
                  )}
                </div>

                <AnimatePresence>
                  {openStates[index] && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`${josefin.className} mt-2 text-gray-600 mb-2`}
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {rightColumn.map((item, index) => (
              <motion.div
                key={index + 4}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.3 }}
                className="mb-10 border-b pb-4 bg-purple-100 rounded-lg"
              >
                <div
                  onClick={() => toggleOpenState(index + 4)}
                  className="flex items-center justify-between cursor-pointer text-gray-900 hover:text-pink-700"
                >
                  <h3 className="text-lg font-bold">{item.question}</h3>
                  {openStates[index + 4] ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight className="text-primary-600" />
                  )}
                </div>

                <AnimatePresence>
                  {openStates[index + 4] && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`${josefin.className} mt-2 text-gray-600 mb-2`}
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
