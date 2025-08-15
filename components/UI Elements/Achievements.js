"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Achievements = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const useCounter = (endValue, duration = 2) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = endValue / (duration * 60); // Increment per frame (assuming 60 fps)

      const counter = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          clearInterval(counter);
          start = endValue;
        }
        setCount(Math.floor(start));
      }, 1000 / 60);

      return () => clearInterval(counter);
    }, [endValue, duration]);

    return count;
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return Math.round(num / 1000000) + 'M';
    } else if (num >= 1000) {
      return Math.round(num / 1000) + 'K';
    } else if (num < 100) {
      return num + '%'
    } else {
      return num.toString() + '+';
    }
  };

  const linksShortened = useCounter(10000000, 2);
  const activeUsers = useCounter(100000, 2);
  const uptime = useCounter(99.99, 2);
  const CountriesServed = useCounter(150, 2);
  const [refFeature, inViewFeature] = useInView({ triggerOnce: true, threshold: 0.4 });

  const data = [
    {
      title: 'Links Shortened',
      link: formatNumber(linksShortened) + '+'
    },
    {
      title: 'Active Users',
      link: formatNumber(activeUsers) + '+'
    },
    {
      title: 'Uptime',
      link: uptime + '%'
    },
    {
      title: 'Countries Served',
      link: CountriesServed + '+'
    },
  ]




  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
      <motion.div
        ref={refFeature}
        initial={{ opacity: 0, y: 30 }}
        animate={inViewFeature ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-screen-2xl text-center py-12 px-4 sm:px-6 lg:px-12 
      text-white"
      >
        {/* Heading Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins"
          >
            Our Achievements
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-gray-200 mt-2 text-sm sm:text-lg font-opensans"
          >
            Trusted by users worldwide for sharing links effortlessly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {inViewFeature ?
            data.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-lg"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">{item.link}</h3>
                <p className="text-gray-300 font-opensans text-sm sm:pt-2">{item.title.toUpperCase()}</p>
              </motion.div>
            )) : ''}
        </div>

      </motion.div>
    </div>

  );
};

export default Achievements;
