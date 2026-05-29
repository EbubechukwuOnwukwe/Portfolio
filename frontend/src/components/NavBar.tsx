import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 text-white relative z-40 pt-4 md:pt-8"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Mobile Layout: Nav button left, Logo right */}
        <div className="flex items-center justify-between w-full md:hidden px-2">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <Bars3Icon className="h-7 w-7" />
          </button>
          <div className="text-2xl font-bold text-[#40E0FF] bg-[#151A21] p-1.75 rounded-xl">EO</div>
        </div>

        {/* Tablet Layout: Logo left, Nav button right */}
        <div className="hidden md:flex lg:hidden items-center justify-between w-full px-5">
          <div className="text-2xl font-bold">Ebubechukwu Onwukwe<span className='text-[#40E0FF]'>/Dev</span></div>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <Bars3Icon className="h-9 w-9" />
          </button>
        </div>

        {/* Desktop Layout: Logo left, Nav options right */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="text-2xl font-bold">Ebubechukwu Onwukwe<span className='text-[#40E0FF]'>/Dev</span></div>
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="relative text-[#E9EEF5] text-2xl group transition-colors duration-300"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#40E0FF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0B0D10] p-4 lg:hidden flex flex-col"
          >
            {/* Overlay Header: Button left, Logo right (Mobile position) */}
            <div className="flex items-center justify-between w-full md:hidden p-5">
              <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                <XMarkIcon className="h-7 w-7" />
              </button>
              <div className="text-2xl font-bold">EO</div>
            </div>

            {/* Overlay Header: Logo left, Button right (Tablet position) */}
            <div className="hidden md:flex lg:hidden items-center justify-between w-full p-7">
              <div className="text-2xl font-bold">EO</div>
              <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                <XMarkIcon className="h-9 w-9" />
              </button>
            </div>

            {/* Center Links */}
            <div className="grow flex flex-col items-center justify-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="relative text-[#E9EEF5] text-3xl font-semibold group transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#40E0FF] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <hr className="mt-2.5 md:mt-8 text-[#E9EEF5]" />
    </motion.nav>
  );
};

export default NavBar;