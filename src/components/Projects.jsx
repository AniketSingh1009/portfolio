import React, { useState } from 'react'
import { PROJECTS } from '../constants'
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

const ProjectCard = ({ project, index, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
        darkMode 
          ? 'bg-neutral-900/50 hover:bg-neutral-800/50 border border-neutral-800' 
          : 'bg-white hover:bg-neutral-50 border border-neutral-200 shadow-lg hover:shadow-xl'
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <FaGithub size={20} />
              </motion.button>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <FaExternalLinkAlt size={20} />
              </motion.button>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
              >
                <FaPlay size={20} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-3 ${
          darkMode ? 'text-white' : 'text-neutral-800'
        }`}>
          {project.title}
        </h3>
        
        <p className={`mb-4 text-sm leading-relaxed ${
          darkMode ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              className={`px-3 py-1 text-xs rounded-full font-medium ${
                darkMode 
                  ? 'bg-purple-900/50 text-purple-300 border border-purple-700' 
                  : 'bg-purple-100 text-purple-700 border border-purple-200'
              }`}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
          >
            View Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-lg border-2 transition-all duration-300 ${
              darkMode 
                ? 'border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white' 
                : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
            }`}
          >
            <FaGithub size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = ({ darkMode }) => {
  return (
    <div className={`border-b pb-20 ${darkMode ? 'border-neutral-900' : 'border-neutral-200'}`}>
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}} 
        className={`my-20 text-center text-4xl ${darkMode ? 'text-white' : 'text-neutral-800'}`}
      >
        Featured Projects
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`text-center mb-16 max-w-2xl mx-auto ${
          darkMode ? 'text-neutral-400' : 'text-neutral-600'
        }`}
      >
        Here are some of my recent projects that showcase my skills in full-stack development, 
        problem-solving, and creating user-friendly applications.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
