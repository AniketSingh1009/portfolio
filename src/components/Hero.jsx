import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/myimage.jpg";
import { motion } from "framer-motion"
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay},
  }
})

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay + currentIndex * 100)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-8 bg-purple-500 ml-1"
      />
    </span>
  )
}

const Hero = ({ darkMode }) => {
  const roles = ["Full Stack Developer"]
  const [currentRole, setCurrentRole] = useState(0)
const cvLink = "https://drive.google.com/file/d/18k55dHyuihUNGUSQnBAJf1NJLsN_ff7x/view?usp=drive_link"; // your CV link
const gitLink="https://github.com/AniketSingh1009";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`border-b pb-4 lg:mb-35 ${darkMode ? 'border-neutral-900' : 'border-neutral-200'}`}>
      <div className='flex flex-wrap items-center min-h-screen'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className={`pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ${
                darkMode ? 'text-white' : 'text-neutral-800'
              }`}>
              Aniket Singh
            </motion.h1>
            
            <motion.div 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-6 h-16'
            >
              <TypewriterText text={roles[currentRole]} delay={500} />
            </motion.div>

            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className={`my-2 max-w-xl py-6 font-light tracking-tighter ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(cvLink, "_blank")} // <-- add this line
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <FaDownload />
                Download CV
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(gitLink, "_blank")}
                className={`flex items-center gap-2 px-6 py-3 border-2 rounded-lg font-medium transition-all duration-300 ${
                  darkMode 
                    ? 'border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
              >
                <FaGithub />
                View Work
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.div
              initial={{x:100,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:1,delay:1.3}}
              className="relative"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.6)",
                    "0 0 20px rgba(147, 51, 234, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full"
              >
                <img 
                  src={profilePic} 
                  alt="profile pic" 
                  className='w-full max-w-xs lg:max-w-md rounded-full border-4 border-purple-500/30' 
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full"
              >
                <FaGithub size={20} />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full"
              >
                <FaLinkedin size={20} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
