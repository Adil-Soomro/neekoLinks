"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)

  // This function checks if the element is in the viewport
  const checkVisibility = () => {
    const element = document.getElementById('animateOnScroll');
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    // Add the scroll event listener to detect scroll
    window.addEventListener('scroll', checkVisibility);

    // Check visibility when the page loads
    checkVisibility();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className="h-[150vh] bg-gray-100">
      {/* Some content to scroll */}
      <h2 className="text-center text-3xl p-8">Scroll Down</h2>
      
      {/* Animated Div */}
      <motion.div
        id="animateOnScroll"
        className="mx-auto my-16 p-8 bg-purple-300 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-bold">I appear when you scroll!</h2>
        <p>This div fades in as you scroll down and it enters the viewport.</p>
      </motion.div>

      {/* More content to scroll */}
      <div className="h-[150vh] bg-gray-200">
        <h2 className="text-center text-3xl p-8">Keep Scrolling...</h2>
      </div>
    </div>
  )
}

export default ScrollAnimation;
