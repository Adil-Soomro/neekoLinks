"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, LifeBuoy, User, Settings, Link2, Bug, Mail, Lock, BookOpen } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function HelpCenter() {
    const [darkMode, setDarkMode] = useState(false)
    const [activeQuestion, setActiveQuestion] = useState(null)
    const categories = [
        {
            id: "getting-started",
            title: "Getting Started",
            icon: <LifeBuoy className="w-5 h-5 sm:w-6 sm:h-6" />,
            questions: [
                {
                    id: "create-account",
                    question: "How do I create an account?",
                    answer: "Click the 'Sign Up' button in the top right corner. You can register using your email address or social media accounts."
                },
                {
                    id: "first-link",
                    question: "How to create my first shortened link?",
                    answer: "After logging in, paste your long URL into the input field on the dashboard and click 'Shorten URL'. You can customize the link if desired."
                }
            ]
        },
        {
            id: "account",
            title: "Account Management",
            icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
            questions: [
                {
                    id: "reset-password",
                    question: "How to reset my password?",
                    answer: "Go to the login page and click 'Forgot Password'. Enter your email to receive a password reset link."
                },
                {
                    id: "delete-account",
                    question: "How do I delete my account?",
                    answer: "Navigate to Account Settings > Danger Zone > Delete Account. Note this action is irreversible."
                }
            ]
        },
        {
            id: "links",
            title: "Link Management",
            icon: <Link2 className="w-5 h-5 sm:w-6 sm:h-6" />,
            questions: [
                {
                    id: "custom-links",
                    question: "Can I create custom shortened links?",
                    answer: "Yes! Pro users can create custom aliases for their links. Go to Advanced Options when creating a link."
                },
                {
                    id: "analytics",
                    question: "How to view link analytics?",
                    answer: "All your links show basic analytics on the dashboard. Click any link to see detailed statistics."
                }
            ]
        },
        {
            id: "troubleshooting",
            title: "Troubleshooting",
            icon: <Bug className="w-5 h-5 sm:w-6 sm:h-6" />,
            questions: [
                {
                    id: "broken-link",
                    question: "What if my shortened link stops working?",
                    answer: "First check the original URL for validity. If issues persist, contact our support team with the link details."
                },
                {
                    id: "spam",
                    question: "How to report spam/malicious links?",
                    answer: "Use the 'Report Link' form on our website. We investigate all reports within 24 hours."
                }
            ]
        }
    ]

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/helpcenter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            const data = await res.json();
            setTimeout(() => {
                if (res.ok) {

                    setStatus({ type: "success", message: "Message sent successfully!" });
                    setEmail("");
                    setMessage("");
                } else {
                    setStatus({ type: "error", message: data.error || "Something went wrong!" });
                }
            }, 2000);
        } catch (error) {
            setStatus({ type: "error", message: "Failed to send message." });
        }
        setTimeout(() => {

            setLoading(false);
        }, 2000);

        // Remove the status message after 3 seconds
        setTimeout(() => setStatus({ type: "", message: "" }), 3000);
    };


    return (
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Header */}
                <div className="space-y-4 text-center mb-8 sm:mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Help Center
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600">
                        Find answers to common questions and get support
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8 sm:mb-12">
                    <div className="p-2 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-2 px-4 py-3">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search help articles..."
                                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={`#${category.id}`}
                            className="p-4 rounded-xl flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                                {category.icon}
                            </div>
                            <span className="font-medium text-gray-900">
                                {category.title}
                            </span>
                        </a>
                    ))}
                </div>

                {/* FAQ Sections */}
                <div className="space-y-8 sm:space-y-12">
                    {categories.map((category) => (
                        <section key={category.id} id={category.id} className="scroll-mt-20">
                            <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-tr from-pink-300 to-violet-400 shadow-lg">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-6 rounded-xl text-gray-900">
                                    {category.title}
                                </h2>
                                <div className="space-y-4">
                                    {category.questions.map((q) => (
                                        <div
                                            key={q.id}
                                            className="border rounded-lg p-4 bg-gray-100 border-gray-300 hover:border-gray-300 transition-colors duration-300"
                                        >
                                            <button
                                                onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
                                                className="w-full flex justify-between items-center gap-4"
                                            >
                                                <span className="text-left font-medium text-gray-900">
                                                    {q.question}
                                                </span>
                                                <svg
                                                    className={`w-5 h-5 transform transition-transform ${activeQuestion === q.id ? "rotate-180" : ""
                                                        } text-gray-500`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {activeQuestion === q.id && (
                                                <AnimatePresence>
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="mt-4 text-gray-600"
                                                    >
                                                        {q.answer}
                                                    </motion.div>
                                                </AnimatePresence>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-12 pt-8 sm:pt-12 border-t border-gray-200">
                    <div className="p-5 sm:p-6 rounded-xl bg-white shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                                Still need help?
                            </h2>
                        </div>

                        {/* Status Message */}
                        {status.message && (
                            <div
                                className={`mb-4 p-3 rounded-lg text-white text-sm ${status.type === "success" ? "bg-green-500" : "bg-red-500"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-50 border-gray-400 border-2 text-gray-900 focus:outline-indigo-500 focus:border-transparent"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-50 border-gray-400 border-2 text-gray-900 focus:outline-indigo-500 focus:border-transparent"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.main>
    )
}