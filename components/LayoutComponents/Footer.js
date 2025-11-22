"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Github, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import { Josefin_Sans } from "next/font/google"

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})
const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: '' },
      { name: "Pricing", href: '' },
      { name: "API", href: '' },
      { name: "Integration", href: '' },
      { name: "Documentation", href: '' }
    ],
    Company: [
      { name: "About Us", href: '/about' },
      { name: "Blog", href: '' },
      { name: "Careers", href: '' },
      { name: "Press", href: '' },
      { name: "Partners", href: '' }
    ],
    Support: [
      { name: "Help Center", href: '/helpcenter' },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Status", href: '' },
      { name: "Contact Us", href: "/contact" }
    ],
    Contact: [
      { name: "support@neekolinks.com", href: "mailto:support@neekolinks.com", icon: <Mail className="text-white w-4 h-4" /> },
      { name: "+92 312 6236861", href: "tel:+923126236861", icon: <Phone className="w-4 h-4" /> },
      { name: "123 NeekoLinks St, Tech City", href: "#", icon: <MapPin className="w-6 h-6" /> }
    ]
  }

  const socialLinks = [
    { name: "Facebook", href: "#", icon: <Facebook className="w-5 h-5" /> },
    { name: "Instagram", href: "#", icon: <Instagram className="w-5 h-5" /> },
    { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
    { name: "GitHub", href: "#", icon: <Github className="w-5 h-5" /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" /> },
    { name: "YouTube", href: "#", icon: <Youtube className="w-5 h-5" /> }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#1b082c] text-gray-300">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link href={'/'}
              className="inline-block text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            >
              <span className="inline-block cursor-pointer">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift">
                  NeekoLinks
                </span>
              </span>
            </Link>
            <p className={`${josefin.className} text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-md`}>
              Transform your long URLs into powerful, branded links. Track, analyze, and optimize your digital presence with NeekoLinks.
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <div
                  key={index}
                  className="w-8 h-8 hover:cursor-pointer sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-6">{title}</h3>
              <ul className="space-y-2 sm:space-y-4">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex} className="w-fit">
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors duration-300 text-sm sm:text-base"
                    >
                      {link.icon && link.icon}
                      <span className="hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>



        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
          <div className="text-gray-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} NeekoLinks. All rights reserved.
          </div>
          <div className="text-gray-400 text-center sm:text-right flex items-center gap-1">
            Created with{" "}
            <span className="inline-block animate-pulse">
              <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                ❤
              </span>
            </span>
            {" "}by{" "}
            <Link
              href="https://github.com/Adil-Soomro" target="_blank"
              className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-medium"
            >
              Adil Soomro
            </Link>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
