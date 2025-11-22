import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-9xl text-red-700 font-extrabold mb-6">
          404
        </h1>
        <p className="text-2xl font-semibold mb-4">
          Oops! The link you followed is{' '}
          <span className="text-yellow-300">expired</span>,{' '}
          <span className="text-red-300">invalid</span>, or{' '}
          <span className="text-green-300">deactivated</span>.
        </p>
        <p className="text-lg mb-8">
          Double-check the URL or go back to the home page to create a new link.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-all">
            Go to Home
          </button>
        </Link>
      </div>
      <div className="absolute top-16 right-16 text-purple-300 text-6xl font-extrabold opacity-10 pointer-events-none">
        404
      </div>
    </div>
  );
};

export default ErrorPage;
