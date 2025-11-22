"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Alex Junior", image: "/testimonials/alex.png", text: "This service is amazing! It has made sharing links with my clients so much easier." },
  { id: 2, name: "Jessica Patel", image: "/testimonials/jessica.png", text: "Quick, reliable, and secure. Couldn't ask for a better URL shortener." },
  { id: 5, name: "Carlos Mendez", image: "/testimonials/carlos.jpg", text: "A game-changer! Managing links has never been this effortless." },
  { id: 4, name: "Sophia Wong", image: "/testimonials/sophia.jpg", text: "Absolutely love how intuitive and fast this service is. Highly recommend!" },
  { id: 3, name: "David Kim", image: "/testimonials/david.png", text: "A must-have tool for anyone who works with links frequently." },
  { id: 6, name: "Emily Parker", image: "/testimonials/emily.jpg", text: "A great tool that saves me so much time!" },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const visibleItems = 3; // Number of testimonials visible at a time

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - visibleItems : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex >= testimonials.length - visibleItems ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-center bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">What Our Users Say</h2>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{ left: -300 * (testimonials.length - visibleItems), right: 0 }}
          animate={{ x: -index * 300 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              className="w-[300px] min-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img className="w-36 h-36 mx-auto rounded-full border-4 border-gray-200 mb-4 object-cover" 
                   src={item.image} 
                   alt={item.name} />
              <p className="text-gray-600 italic mb-4">"{item.text}"</p>
              <h4 className="text-gray-800 font-bold">{item.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Centered Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={prevSlide} 
          className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors text-white"
        >
          <FaArrowLeft className="text-lg" />
        </button>
        <button 
          onClick={nextSlide} 
          className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors text-white"
        >
          <FaArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
