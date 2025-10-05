import React, { useState } from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      value: CONTACT.address,
      color: "text-red-500"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: CONTACT.phoneNo,
      color: "text-green-500"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: CONTACT.email,
      color: "text-blue-500"
    }
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/aniket-singh-805398172/", color: "text-blue-600" },
    { icon: <FaGithub />, url: "https://github.com/AniketSingh1009", color: "text-gray-600" },
    { icon: <FaTwitter />, url: "#", color: "text-blue-400" }
  ]

  return (
    <div className={`pb-20 ${darkMode ? 'border-neutral-900' : 'border-neutral-200'}`}>
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}} 
        className={`my-20 text-center text-4xl ${darkMode ? 'text-white' : 'text-neutral-800'}`}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`text-center mb-16 max-w-2xl mx-auto ${
          darkMode ? 'text-neutral-400' : 'text-neutral-600'
        }`}
      >
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            darkMode ? 'text-white' : 'text-neutral-800'
          }`}>
            Let's Connect
          </h3>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-neutral-900/50 hover:bg-neutral-800/50' 
                    : 'bg-white hover:bg-neutral-50 shadow-md hover:shadow-lg'
                }`}
              >
                <div className={`text-2xl ${info.color}`}>
                  {info.icon}
                </div>
                <div>
                  <p className={`text-sm font-medium ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {info.label}
                  </p>
                  <p className={`${darkMode ? 'text-white' : 'text-neutral-800'}`}>
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-800'
            }`}>
              Follow Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode 
                      ? 'bg-neutral-800 hover:bg-neutral-700' 
                      : 'bg-neutral-100 hover:bg-neutral-200'
                  } ${social.color}`}
                >
                  <div className="text-xl">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`p-8 rounded-xl ${
            darkMode 
              ? 'bg-neutral-900/50 border border-neutral-800' 
              : 'bg-white border border-neutral-200 shadow-lg'
          }`}
        >
          <h3 className={`text-2xl font-semibold mb-6 ${
            darkMode ? 'text-white' : 'text-neutral-800'
          }`}>
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-400' 
                    : 'bg-white border-neutral-300 text-neutral-800 placeholder-neutral-500'
                }`}
                placeholder="Your Name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-400' 
                    : 'bg-white border-neutral-300 text-neutral-800 placeholder-neutral-500'
                }`}
                placeholder="your.email@example.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                  darkMode 
                    ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-400' 
                    : 'bg-white border-neutral-300 text-neutral-800 placeholder-neutral-500'
                }`}
                placeholder="Your message here..."
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
