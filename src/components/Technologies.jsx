import React, { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiNodedotjs, SiExpress, SiMysql, SiHtml5, SiCss3, SiJavascript, SiPython } from 'react-icons/si';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level, darkMode }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className={`text-sm font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
          {skill}
        </span>
        <span className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          {level}%
        </span>
      </div>
      <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

const Technologies = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('frontend')

  const technologies = {
    frontend: [
      { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, name: 'React', level: 90 },
      { icon: <SiJavascript className='text-7xl text-yellow-400' />, name: 'JavaScript', level: 85 },
      { icon: <SiHtml5 className='text-7xl text-orange-700' />, name: 'HTML5', level: 95 },
      { icon: <SiCss3 className='text-7xl text-blue-500' />, name: 'CSS3', level: 90 }
    ],
    backend: [
      { icon: <SiNodedotjs className='text-7xl text-green-500' />, name: 'Node.js', level: 85 },
      { icon: <SiExpress className='text-7xl text-yellow-300' />, name: 'Express', level: 80 },
      { icon: <SiPython className='text-7xl text-blue-600' />, name: 'Python', level: 75 },
      { icon: <SiMongodb className='text-7xl text-green-500' />, name: 'MongoDB', level: 80 }
    ],
    database: [
      { icon: <SiMongodb className='text-7xl text-green-500' />, name: 'MongoDB', level: 80 },
      { icon: <SiMysql className='text-7xl text-blue-700' />, name: 'MySQL', level: 75 }
    ]
  }

  const iconVariants = (duration) => ({
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className={`border-b pb-24 ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className={`my-20 text-center text-4xl ${darkMode ? 'text-white' : 'text-neutral-800'}`}
      >
        Technologies & Skills
      </motion.h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className={`flex rounded-lg p-1 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
          {Object.keys(technologies).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md transition-all duration-300 capitalize ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : darkMode 
                    ? 'text-neutral-400 hover:text-white' 
                    : 'text-neutral-600 hover:text-neutral-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Icons */}
      <motion.div 
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className='flex flex-wrap items-center justify-center gap-6 mb-16'
      >
        {technologies[activeTab].map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -10 }}
            className={`group relative rounded-2xl border-4 p-6 transition-all duration-300 ${
              darkMode 
                ? 'border-neutral-800 bg-neutral-900/50 hover:border-purple-500' 
                : 'border-neutral-200 bg-white hover:border-purple-500 shadow-lg'
            }`}
          >
            <motion.div
              variants={iconVariants(1.5 + index * 0.5)}
              initial="initial"
              animate="animate"
            >
              {tech.icon}
            </motion.div>
            
            {/* Tooltip */}
            <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              darkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-800 text-white'
            }`}>
              {tech.name}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h3 className={`text-2xl font-semibold mb-8 text-center ${
          darkMode ? 'text-white' : 'text-neutral-800'
        }`}>
          Proficiency Levels
        </h3>
        {technologies[activeTab].map((tech) => (
          <SkillBar 
            key={tech.name} 
            skill={tech.name} 
            level={tech.level} 
            darkMode={darkMode}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;