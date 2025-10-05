import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = ({ darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800' 
            : 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className='flex items-center justify-between py-6'>
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className='flex flex-shrink-0 items-center'
          >
            <motion.h2 
              className={`text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}
            >
              AS
            </motion.h2>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  darkMode 
                    ? 'text-neutral-300 hover:text-white' 
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className='hidden md:flex items-center gap-4 text-xl'>
            <motion.button
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open("https://www.linkedin.com/in/aniket-singh-805398172/")}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'text-neutral-400 hover:text-blue-500 hover:bg-neutral-800' 
                  : 'text-neutral-600 hover:text-blue-500 hover:bg-blue-50'
              }`}
            >
              <FaLinkedin />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open("https://github.com/AniketSingh1009")}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' 
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <FaGithub />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open("https://leetcode.com/your-profile")}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'text-neutral-400 hover:text-orange-500 hover:bg-neutral-800' 
                  : 'text-neutral-600 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              <SiLeetcode />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              darkMode 
                ? 'text-neutral-300 hover:bg-neutral-800' 
                : 'text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              darkMode ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white'
            }`}
          >
            <div className="px-8 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    darkMode 
                      ? 'text-neutral-300 hover:text-white hover:bg-neutral-800' 
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  } rounded-lg`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open("https://www.linkedin.com/in/aniket-singh-805398172/")}
                  className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-full"
                >
                  <FaLinkedin size={20} />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open("https://github.com/AniketSingh1009")}
                  className={`p-2 rounded-full ${
                    darkMode 
                      ? 'text-neutral-300 hover:bg-neutral-800' 
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <FaGithub size={20} />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open("https://leetcode.com/your-profile")}
                  className="p-2 text-orange-500 hover:bg-orange-50 dark:hover:bg-neutral-800 rounded-full"
                >
                  <SiLeetcode size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
