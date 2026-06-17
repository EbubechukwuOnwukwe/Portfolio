import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import resume from '../assets/EbubechukwuOnwukwe-Resume.pdf';
import Profile from '../assets/EO.png';


const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isPrivacyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPrivacyOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume(PDF)', href: resume, isDownload: true },
  ];

  const socialLinks = [
    { name: 'Twitter / X', icon: BsTwitterX, href: 'https://x.com/Ebubechukw32885' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/EbubechukwuOnwukwe' },
    { name: 'Linkedin', icon: FaLinkedin, href: 'https://www.linkedin.com/in/ebubechukwu-onwukwe' },
    { name: 'Email', icon: MdOutlineEmail, href: 'mailto:ebube5298@gmail.com' },
  ];

  return (
    <footer className="text-[#E9EEF5] mt-6 bg-[#151A21] py-10 border-t-4 border-slate-800">
      <div className="xl:flex xl:flex-row xl:justify-center xl:gap-32 xl:items-start">
        <div className='md:flex md:gap-6 md:justify-center xl:flex-col xl:items-start xl:gap-4'>
        <img src={Profile}
              alt="Profile"
              className='hidden md:block h-50 w-50 rounded-4xl shadow-[0_0_20px_#8B5CF6] xl:shadow-none xl:order-2' />
        <div className='md:my-5 xl:contents'>
          <h1 className="text-2xl font-semibold text-center md:text-4xl md:font-semibold md:text-left xl:order-1">Ebube<span className='md:hidden xl:inline'>chukwu</span> Onwukwe <span className='hidden md:inline text-[#767b83]'>/ <span className='xl:block'>Full-Stack <span className='hidden xl:inline'>Developer</span></span></span></h1>
          <p className="text-center text-xl mt-4 md:text-2xl md:text-left md:text-[#767b83] md:mt-6 xl:mt-0 xl:order-3">
            © {new Date().getFullYear()} Ebube<span className='md:hidden xl:inline'>chukwu</span> Onwukwe <span className='block md:mt-1'>All rights reserved.</span>
          </p>
          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className='relative block w-fit text-lg mt-2 group transition-colors duration-300 text-center md:text-left mx-auto md:mx-0 text-[#767b83] hover:text-[#40E0FF] xl:order-4 cursor-pointer'
          >
            Privacy Policy
            <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#40E0FF] transition-all duration-300 group-hover:w-full" />
          </button>
          </div>
        </div>

        <div className='md:flex md:justify-center md:gap-45 lg:gap-65 mt-15 xl:mt-0 xl:gap-32'>
          <div className='flex flex-col items-center md:items-start'>
            <h1 className="text-3xl text-center mb-4 font-semibold md:text-left xl:text-4xl xl:mb-8">Quick Links</h1>
            <div className="flex flex-col items-center md:items-start">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return link.isDownload ? (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      download 
                      className='relative block w-fit text-2xl mb-2 group transition-colors duration-300 text-center md:text-left xl:mb-5 xl:text-3xl'
                    >
                      {link.name}
                      <span className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-[#8B5CF6]' : 'w-0 bg-[#40E0FF] group-hover:w-full'}`} />
                    </a>
                  ) : (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className='relative block w-fit text-2xl mb-2 group transition-colors duration-300 text-center md:text-left xl:mb-5 xl:text-3xl'
                    >
                      {link.name}
                      <span className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-[#8B5CF6]' : 'w-0 bg-[#40E0FF] group-hover:w-full'}`} />
                    </Link>
                  )
              })}
            </div>
          </div>

          <div className='hidden md:flex flex-col items-start'>
            <h1 className="text-3xl mb-4 font-semibold xl:text-4xl xl:mb-8">Connect & Explore</h1>
            <div className="flex flex-col items-start">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='relative block w-fit text-2xl mb-2 group transition-colors duration-300 xl:mb-5 xl:text-3xl'
                >
                  {social.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#40E0FF] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

        <div className='flex justify-center gap-6 text-4xl mt-8 md:hidden'>
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

      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop - handles "focus taken off" (clicking outside) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#151A21] border-2 border-slate-800 p-8 md:p-12 rounded-3xl max-w-lg w-full shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10"
            >
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#40E0FF] transition-colors p-2"
              >
                <IoClose className="text-3xl md:text-4xl" />
              </button>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[#40E0FF]">Privacy Policy</h2>
              <p className="text-lg md:text-2xl leading-relaxed text-[#E9EEF5] opacity-90">
                I respect your privacy. This site uses no cookie, and I do not collect or store your personal data. If you contact me via the form, that data is used only to reply to your inquiry.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer