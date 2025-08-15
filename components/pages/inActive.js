import React from "react";
import Link from "next/link";

const InactivePage = () => {
    return (
        <div className="flex flex-col mt-16 items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
            {/* Hero Section */}
            <div className="text-center max-w-lg">
                <h1 className="text-4xl font-bold text-red-600">
                    This link is currently inactive!
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    The link you’re trying to access has been deactivated. If you believe this is a mistake, please check with the link owner or contact support.
                </p>
            </div>

            {/* Illustration */}
            <div className="my-8">
                <img
                    src="/images/inactive-link.svg" // Replace with your illustration path
                    alt="Inactive Link Illustration"
                    className="w-72 h-72 mx-auto"
                />
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Link href="/"className="px-6 py-3 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600">
                        Back to Homepage
                </Link>
                <Link href="/contact"className="px-6 py-3 text-blue-500 bg-gray-100 border border-blue-500 rounded-md shadow-md hover:bg-gray-200">
                        Contact Support
                </Link>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 max-w-2xl bg-white shadow-lg rounded-md p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Frequently Asked Questions
                </h2>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <span className="inline-block w-6 h-6 mr-3 text-blue-500">
                            ❓
                        </span>
                        <div>
                            <p className="font-medium text-gray-800">
                                Why is this link inactive?
                            </p>
                            <p className="text-gray-600">
                                Links can be marked inactive due to expiration, manual deactivation, or violation of terms.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-6 h-6 mr-3 text-blue-500">
                            ❓
                        </span>
                        <div>
                            <p className="font-medium text-gray-800">
                                Can I reactivate my link?
                            </p>
                            <p className="text-gray-600">
                                Please contact support if you own this link and need assistance with reactivation.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Support Contact Card */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-md p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-blue-600">
                    Need Help?
                </h3>
                <p className="mt-2 text-gray-700">
                    Our support team is here to assist you.
                </p>
                <Link href="mailto:ncsbyms@gmail.com"
                    className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                >
                    Contact Support
                </Link>
            </div>
        </div>
    );
};

export default InactivePage;
