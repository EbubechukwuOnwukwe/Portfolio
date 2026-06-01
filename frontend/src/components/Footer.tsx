import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import resume from '../assets/EbubechukwuOnwukwe-Resume.pdf';


const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume(PDF)', href: resume, isDownload: true },
  ];

  const socialLinks = [
    { icon: BsTwitterX, href: 'https://x.com/Ebubechukw32885' },
    { icon: FaGithub, href: 'https://github.com/EbubechukwuOnwukwe' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ebubechukwu-onwukwe' },
    { icon: MdOutlineEmail, href: 'mailto:ebube5298@gmail.com' },
  ];

  return (
    <footer className="text-[#E9EEF5] mt-6 bg-[#151A21] py-10 border-t-4 border-slate-800">
        <h1 className="text-2xl font-semibold text-center">Ebubechukwu Onwukwe <span className="hidden">/ Full-Stack</span></h1>
        <p className="text-center text-xl mt-4">
          ©{new Date().getFullYear()} Ebubechukwu Onwukwe. <span className='block'>All rights reserved.</span>
        </p>
        <div>
          <h1 className="text-3xl text-center mt-8 mb-4 font-semibold">Quick Links</h1>
          <div className="flex flex-col items-center">
            {navLinks.map((link) => 
              link.isDownload ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  download 
                  className='relative block w-fit text-2xl mb-2 group transition-colors duration-300 text-center'
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#40E0FF] transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className='relative block w-fit text-2xl mb-2 group transition-colors duration-300 text-center'
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#40E0FF] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>
        </div>
        <div className='flex justify-center gap-6 text-4xl mt-8'>
            {socialLinks.map((social, index) => (
              <motion.a key={index} 
                        href={social.href} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        whileHover={{ scale: 1.2, color: "#40E0FF" }} 
                        whileTap={{ scale: 0.8, color: "#40E0FF" }} 
                        className='text-slate-400 transition-colors duration-300'>
                <social.icon />
              </motion.a>
            ))}
        </div>
    </footer>
  )
}

export default Footer