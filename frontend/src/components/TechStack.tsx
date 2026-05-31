import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiPostgresql, SiDjango, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';

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
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Calculate the width of the content to ensure the loop is seamless
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className='text-[#E9EEF5] mt-15'>
      <h1 className='text-4xl font-semibold text-left mx-3 my-4'>Tech Stack</h1>
      <div className="w-full bg-slate-950 py-10 overflow-hidden border-y border-slate-800">
        <motion.div
          className="flex"
          ref={containerRef}
          // Animate by exactly the width of one set of icons
          animate={{ x: [0, -width] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25, // Adjust this for overall speed
            repeatType: "loop" 
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-3 min-w-30">
                <motion.div
                  whileHover={{ scale: 1.2, color: "#40E0FF" }}
                  className="text-slate-400 text-5xl transition-colors duration-300"
                >
                  <Icon />
                </motion.div>
                <span className="text-slate-500 text-sm font-medium">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;