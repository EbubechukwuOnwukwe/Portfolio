import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact} from 'react-icons/fa';
import { SiPostgresql, SiDjango, SiMysql, SiTailwindcss } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Django', icon: SiDjango },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  // { name: 'MongoDB', icon: SiMongodb },
  // { name: 'Docker', icon: FaDocker },
  // { name: 'AWS', icon: FaAws },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Calculate the width of the content to ensure the loop is seamless
  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        // We repeat 10 times to ensure the content exceeds even 4k screen widths
        setSingleSetWidth(containerRef.current.scrollWidth / 10);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  return (
    <section className='text-[#E9EEF5] mt-5'>
      <h1 className='text-4xl font-semibold text-left mx-3 my-4 md:text-5xl md:my-5 md:font-bold md:mx-6 lg:text-6xl xl:mx-5 xl:my-7'>Tech Stack</h1>
      <div className="w-full bg-slate-950 py-10 overflow-hidden border-y border-slate-800">
        <motion.div
          className="flex w-max"
          ref={containerRef}
          animate={{ x: [0, -singleSetWidth] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25, // Adjust this for overall speed
            repeatType: "loop" 
          }}
        >
          {Array(10).fill(technologies).flat().map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-3 min-w-30 xl:gap-4 md:min-w-35 lg:min-w-50">
                <motion.div
                  whileHover={{ scale: 1.2, color: "#40E0FF" }}
                  className="text-slate-400 text-5xl transition-colors duration-300 md:text-7xl lg:text-8xl"
                >
                  <Icon />
                </motion.div>
                <span className="text-slate-500 text-sm font-medium md:text-xl lg:text-2xl">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;