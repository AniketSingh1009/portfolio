import React from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
        darkMode 
          ? 'bg-neutral-800 text-yellow-400 hover:bg-neutral-700' 
          : 'bg-white text-purple-600 hover:bg-purple-50 shadow-lg'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        key={darkMode ? 'moon' : 'sun'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle