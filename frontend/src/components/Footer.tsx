import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import resume from '../assets/EbubechukwuOnwukwe-Resume.pdf';
import Profile from '../assets/EO.png';


const Footer = () => {
  const location = useLocation();
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
    </footer>
  )
}

export default Footer