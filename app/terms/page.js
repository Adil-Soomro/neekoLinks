"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, Shield, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function TermsOfService() {
    const [darkMode, setDarkMode] = useState(false)
    const lastUpdated = "February 15, 2024"

    const sections = [
        {
            id: "acceptance",
            title: "Acceptance of Terms",
            icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
            content: `<p>By accessing and using BitLinks' services, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using BitLinks' services, you shall be subject to any posted guidelines or rules applicable to such services.</p>`,
        },
        {
            id: "services",
            title: "Description of Services",
            icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6" />,
            content: `<p>BitLinks provides URL shortening services that allow users to:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Create shortened versions of long URLs</li>
          <li>Track click analytics</li>
          <li>Customize shortened links</li>
          <li>Access API services</li>
        </ul>
        <p class="mt-4">We reserve the right to modify or discontinue any service at any time.</p>`,
        },
        {
            id: "restrictions",
            title: "Use Restrictions",
            icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
            content: `<p>You agree not to use BitLinks for:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Illegal activities</li>
          <li>Spreading malware or viruses</li>
          <li>Spamming or harassment</li>
          <li>Infringing on others' rights</li>
          <li>Sharing inappropriate content</li>
        </ul>
        <p class="mt-4">Violation of these terms may result in immediate termination of your account.</p>`,
        },
        {
            id: "liability",
            title: "Limitation of Liability",
            icon: <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
            content: `<p>BitLinks shall not be liable for:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Any indirect, incidental, special, consequential or punitive damages</li>
          <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
          <li>Any unauthorized access to or use of our servers</li>
          <li>Any interruption or cessation of transmission to or from the service</li>
          <li>Any bugs, viruses, or the like transmitted through the service</li>
        </ul>`,
        },
    ]

    return (
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Header */}
                <div className="space-y-4 text-center mb-8 sm:mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Terms of Service
                    </h1>
                    <p className={`text-base sm:text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Please read these terms carefully before using our service.
                    </p>
                    <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
                </div>

                {/* Quick Links */}
                <div className="mb-8 sm:mb-12">
                    <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                        <h2 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Links</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-center"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-8 sm:space-y-12">
                    {sections.map((section) => (
                        <section key={section.id} id={section.id} className="scroll-mt-20">
                            <div
                                className={`p-5 sm:p-6 rounded-xl ${darkMode ? "bg-gray-800/50 hover:bg-gray-800" : "bg-white hover:bg-gray-50"
                                    } shadow-lg transition-all duration-300`}
                            >
                                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                                        {section.icon}
                                    </div>
                                    <h2 className={`text-xl sm:text-2xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                                        {section.title}
                                    </h2>
                                </div>
                                <div
                                    className={`space-y-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        </section>
                    ))}
                </div>

                {/* Related Links */}
                <div className="mt-12 pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-800">
                    <h2 className={`text-xl sm:text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        Related Documents
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link href="/privacy">
                            <motion.div
                                initial={{ opacity: 1, scale: 1.0 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                                className={`p-4 sm:p-6 rounded-xlhover:shadow-2xl bg-violet-200 hover:bg-purple-200 transition-all duration-300`}
                            >
                                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                                    Privacy Policy
                                </h3>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    Learn how we protect your data.
                                </p>
                            </motion.div>
                        </Link>
                        <Link href="/contact">
                            <motion.div
                                initial={{ opacity: 1, scale: 1.0 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                                className={`p-4 sm:p-6 rounded-xl hover:shadow-2xl bg-violet-200 hover:bg-purple-200 transition-all duration-300`}
                            >
                                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                                    Contact Us
                                </h3>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    Have questions? Get in touch with our team.
                                </p>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.main>
    )
}