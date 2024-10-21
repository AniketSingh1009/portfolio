import React from 'react'
// import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
// import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
   
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* <img className="mx-2 w-10" src={logo} alt="Logo" /> */}
      </div>
      <div className='m-8 flex items-center justify-between gap-4 text-2xl'>
        <FaLinkedin
         cursor="pointer"
        onClick={()=>window.open("https://www.linkedin.com/in/aniket-singh-805398172/")}
        />
        <FaGithub
        cursor="pointer"
        onClick={()=>window.open("https://github.com/AniketSingh1009")}
        />
        {/* add leetcode profile to it
         */}
        
        
      </div>

    </nav>
   
  )
}

export default Navbar
