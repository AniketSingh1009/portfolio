import React from 'react';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion"
import { FaGraduationCap, FaCode, FaTrophy, FaHeart } from 'react-icons/fa';

const About = ({ darkMode }) => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description: "MCA at MANIT Bhopal",
      color: "text-blue-500"
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      description: "500+ LeetCode Solutions",
      color: "text-green-500"
    },
    {
      icon: <FaTrophy />,
      title: "Achievement",
      description: "6★ HackerRank Rating",
      color: "text-yellow-500"
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Full-Stack Development",
      color: "text-red-500"
    }
  ];

  return (
    <div className={`border-b pb-20 ${darkMode ? 'border-neutral-900' : 'border-neutral-200'}`}>
      <motion.h1 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className={`my-20 text-center text-4xl ${darkMode ? 'text-white' : 'text-neutral-800'}`}>
        About <span className={darkMode ? 'text-neutral-500' : 'text-neutral-600'}>Me</span>
      </motion.h1>
      
      <div className='flex flex-wrap items-center'>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{x:-100,opacity:0}}
          transition={{duration:0.5}}
          className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.6)",
                    "0 0 20px rgba(147, 51, 234, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="rounded-2xl overflow-hidden"
              >
                <img 
                  className='rounded-2xl transition-transform duration-300 group-hover:scale-105' 
                  src={aboutImg} 
                  alt="About" 
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-80"></div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{x:100,opacity:0}}
          transition={{duration:0.5}}
          className='w-full lg:w-1/2'>
          <div className='flex flex-col justify-center lg:justify-start'>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`max-w-xl py-6 my-2 text-lg leading-relaxed ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              {ABOUT_TEXT}
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    darkMode 
                      ? 'bg-neutral-900/50 hover:bg-neutral-800/50' 
                      : 'bg-white hover:bg-neutral-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className={`text-2xl mb-2 ${item.color}`}>
                    {item.icon}
                  </div>
                  <h4 className={`font-semibold text-sm mb-1 ${
                    darkMode ? 'text-white' : 'text-neutral-800'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-xs ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
