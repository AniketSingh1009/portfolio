import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaProjectDiagram, FaStar, FaTrophy } from 'react-icons/fa'

const Stats = ({ darkMode }) => {
  const stats = [
    {
      icon: <FaCode />,
      number: "500+",
      label: "LeetCode Problems",
      color: "text-green-500"
    },
    {
      icon: <FaProjectDiagram />,
      number: "15+",
      label: "Projects Completed",
      color: "text-blue-500"
    },
    {
      icon: <FaStar />,
      number: "6★",
      label: "HackerRank Rating",
      color: "text-yellow-500"
    },
    {
      icon: <FaTrophy />,
      number: "0",
      label: "Years Experience",
      color: "text-purple-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className={`border-b pb-20 ${darkMode ? 'border-neutral-900' : 'border-neutral-200'}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`text-center p-6 rounded-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-neutral-900/50 hover:bg-neutral-800/50' 
                : 'bg-white/80 hover:bg-white shadow-lg hover:shadow-xl'
            }`}
          >
            <div className={`text-4xl mb-4 ${stat.color} flex justify-center`}>
              {stat.icon}
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              className={`text-3xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-neutral-800'
              }`}
            >
              {stat.number}
            </motion.div>
            <div className={`text-sm ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Stats