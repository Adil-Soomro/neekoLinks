"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const About = () => {
  const [refFeature1, inViewFeature1] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refFeature2, inViewFeature2] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refFeature3, inViewFeature3] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refFeature4, inViewFeature4] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refFeature5, inViewFeature5] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refFeature6, inViewFeature6] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-red-50 min-h-screen">
      <motion.div
        ref={refFeature1}
        initial={{ opacity: 0, y: 30 }}
        animate={inViewFeature1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-background-shift"
          initial={{ opacity: 0 }}
          animate={inViewFeature1 ? { opacity: 1 } : {}}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Animated Gradient Text for "ABOUT US" */}
          <h1
            className={`${josefin.className} text-4xl md:text-6xl font-bold mb-4`}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-text-shift">
              ABOUT US
            </span>
          </h1>

          {/* Animated Gradient Text for Paragraph */}
          <p
            className={`${josefin.className} text-lg font-medium md:text-xl max-w-2xl mx-auto`}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-text-shift">
              Simplify your links with our fast, secure, and user-friendly URL
              shortener. Designed for individuals and businesses alike.
            </span>
          </p>
        </div>
      </motion.div>

      <section className="container max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          ref={refFeature2}
          initial={{ opacity: 0, x: -30 }}
          animate={inViewFeature2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What is Our URL Shortener?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our platform helps you transform long and cumbersome URLs into
            short, memorable links that are easy to share. Whether you're
            managing links for personal use, business, or marketing campaigns,
            we provide a seamless experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With advanced analytics, you can track link performance in real
            time, ensuring you get the insights you need to make data-driven
            decisions.
          </p>
          <Link href="/shorten">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-purple-700 transition-all">
              Try It Now
            </button>
          </Link>
        </motion.div>

        <motion.div
          ref={refFeature3}
          initial={{ opacity: 0, x: 30 }}
          animate={inViewFeature3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/illustrations/about_img.png"
            alt="URL Shortener Illustration"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </section>

      <motion.section
        ref={refFeature4}
        initial={{ opacity: 0, y: 30 }}
        animate={inViewFeature4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold ">
            Why Choose Us?
          </h2>
          <hr className="h-[4px] rounded-md w-1/3 mx-auto mb-8 mt-2 pt-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-background-shift shadow-lg shadow-black" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "/icons/reliable.png",
                title: "Fast & Reliable",
                desc: "Create and share links instantly with our lightning-fast service.",
              },
              {
                src: "/icons/secure.png",
                title: "Secure Links",
                desc: "Your links are encrypted, ensuring maximum safety for your data.",
              },
              {
                src: "/icons/analysis.png",
                title: "Advanced Analytics",
                desc: "Gain insights into link performance with detailed analytics.",
              },
              {
                src: "/icons/custom.png",
                title: "Custom Short URLs",
                desc: "Create personalized short URLs for branding and recognition.",
              },
              {
                src: "/icons/expiry.png",
                title: "Link Expiry",
                desc: "Set expiration dates for your links to ensure they’re only active when needed.",
              },
              {
                src: "/icons/global.png",
                title: "Global Reach",
                desc: "Our CDN ensures fast redirection worldwide.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewFeature4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white shadow-xl p-6 rounded-lg flex flex-col items-center gap-2 hover:shadow-2xl transition-shadow"
              >
                <img src={feature.src} className="w-20" alt={feature.title} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={refFeature5}
        initial={{ opacity: 0, y: 30 }}
        animate={inViewFeature5 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">How It Works!</h2>
          <hr className="h-[4px] rounded-md w-1/3 mx-auto mt-2 pt-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-background-shift shadow-lg shadow-black" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              src: "/icons/http.png",
              title: "1. Enter Your URL",
              desc: "Paste your long URL into our platform to begin.",
            },
            {
              src: "/icons/hyperlink.png",
              title: "2. Generate Short Links",
              desc: "Click the button to instantly create a shareable short link.",
            },
            {
              src: "/icons/user.png",
              title: "3. Manage Links",
              desc: "Manage links and usage statistics in your dashboard.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inViewFeature5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-blue-50 shadow-xl p-6 rounded-lg flex flex-col items-center hover:shadow-2xl transition-shadow"
            >
              <img src={step.src} className="w-20 mb-1" alt={step.title} />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        ref={refFeature6}
        initial={{ opacity: 0, y: 30 }}
        animate={inViewFeature6 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-background-shift text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-text-shift">
            Ready to Simplify Your Links?
          </span>
        </h2>
        <p className="mb-6 text-lg text-purple-100">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-text-shift">
            Join thousands of users who trust our platform to manage their links
            efficiently.
          </span>
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/shorten">
            <button className="bg-white text-purple-600 hover:text-violet-600 px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-white hover:text-black transition-all ease-in-out duration-500">
              Learn More
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
