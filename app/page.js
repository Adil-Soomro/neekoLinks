<<<<<<< HEAD
"use client";

import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Link2,
  BarChart3,
  Share2,
} from "lucide-react";
import Newsletter from "@/components/UI Elements/Newsletter";
import Faq from "@/components/UI Elements/Faq";
import Testimonials from "@/components/UI Elements/Testimonials";
import Achievements from "@/components/UI Elements/Achievements";
import CTAbutton from "@/components/UI Elements/CTAbutton";
import { useRef } from "react";
=======
"use client"

import Image from "next/image"
import localFont from "next/font/local"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle, Link2, BarChart3, Share2 } from 'lucide-react'
import Newsletter from "@/components/UI Elements/Newsletter"
import Faq from "@/components/UI Elements/Faq"
import Testimonials from "@/components/UI Elements/Testimonials"
import Achievements from "@/components/UI Elements/Achievements"
import CTAbutton from "@/components/UI Elements/CTAbutton"
import { useRef } from "react"
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c

const poppins = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppins",
<<<<<<< HEAD
});
=======
})
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c

const worksans = localFont({
  src: "./fonts/WorkSans-SemiBold.ttf",
  variable: "--font-worksans",
<<<<<<< HEAD
});

export default function Page() {
  const [refHero, inViewHero] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refFeatures, inViewFeatures] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refStats, inViewStats] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
=======
})

export default function Page() {
  const [refHero, inViewHero] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refFeatures, inViewFeatures] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [refStats, inViewStats] = useInView({ triggerOnce: true, threshold: 0.1 })
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c

  const features = [
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Custom Branded Links",
<<<<<<< HEAD
      description:
        "Create memorable, branded links that reflect your identity and boost recognition.",
=======
      description: "Create memorable, branded links that reflect your identity and boost recognition."
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Detailed Analytics",
<<<<<<< HEAD
      description:
        "Track clicks, geographic data, devices, and more with our comprehensive analytics.",
=======
      description: "Track clicks, geographic data, devices, and more with our comprehensive analytics."
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Easy Sharing",
<<<<<<< HEAD
      description:
        "Share your shortened links across all platforms with just one click.",
=======
      description: "Share your shortened links across all platforms with just one click."
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Link Management",
<<<<<<< HEAD
      description:
        "Organize, edit, and manage all your links from one central dashboard.",
=======
      description: "Organize, edit, and manage all your links from one central dashboard."
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "API Access",
<<<<<<< HEAD
      description:
        "Integrate our powerful URL shortening capabilities into your applications.",
=======
      description: "Integrate our powerful URL shortening capabilities into your applications."
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "QR Code Generation",
<<<<<<< HEAD
      description: "Generate QR codes for your shortened links instantly.",
    },
  ];
  const [refFeature, inViewFeature] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refFeature2, inViewFeature2] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
=======
      description: "Generate QR codes for your shortened links instantly."
    }
  ]
  const [refFeature, inViewFeature] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [refFeature2, inViewFeature2] = useInView({ triggerOnce: true, threshold: 0.4 });
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={refHero}
        className="relative overflow-hidden flex items-center py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inViewHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left space-y-6"
            >
              <div className="inline-block">
                <motion.div
                  className="bg-indigo-100 text-indigo-700 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={inViewHero ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                  </span>
                  Trusted by 100,000+ users worldwide
                </motion.div>
              </div>

              <motion.h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${poppins.className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHero ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Transform Long Links into
<<<<<<< HEAD
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  {" "}
                  Powerful Connections
                </span>
=======
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Powerful Connections</span>
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHero ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
<<<<<<< HEAD
                More than just a link shortener. Get detailed analytics, custom
                branded links, and powerful tools to grow your brand.
=======
                More than just a link shortener. Get detailed analytics, custom branded links, and powerful tools to grow your brand.
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHero ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Link href="/shorten">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group w-full sm:w-auto"
                  >
                    Start Shortening
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="#features">
                  <button className="px-8 py-3 rounded-full bg-white text-gray-700 font-semibold shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inViewHero ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
<<<<<<< HEAD
                  src="/illustrations/4673521.png"
=======
                  src="/4673521.png"
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
                  alt="URL Shortener Illustration"
                  width={600}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <motion.section
        id="features"
=======
      <motion.section id="features"
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 opacity-100 translate-y-0 `}
      >
        <div className="container mx-auto">
          <motion.div
            ref={refFeature}
            initial={{ opacity: 0, y: 30 }}
            animate={inViewFeature ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
<<<<<<< HEAD
            className="text-center max-w-3xl mx-auto mb-16"
          >
=======
            className="text-center max-w-3xl mx-auto mb-16">
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Everything you need in a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                modern link shortener
              </span>
            </h2>
            <p className="text-lg text-gray-600">
<<<<<<< HEAD
              Powerful features to help you manage, track, and optimize your
              links
=======
              Powerful features to help you manage, track, and optimize your links
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                className="rounded-2xl p-6 bg-white hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Achievements />
      <Testimonials />
      <Newsletter />
      <Faq />
      <CTAbutton />
    </main>
<<<<<<< HEAD
  );
}
=======
  )
}
>>>>>>> ca5f7f89e253e081250a5245dc9c417faed86d4c
