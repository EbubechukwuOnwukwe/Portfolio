import { motion } from "framer-motion";
import Profile from "../assets/EO.png"

const SKILLS_DATA = [
  {
    category: "CORE",
    skills: [
      { name: "React", level: 65 },
      { name: "Django", level: 60 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    category: "FRONTEND",
    skills: [
      { name: "React", level: 65 },
      { name: "Tailwind", level: 60 },
      { name: "Framer Motion", level: 50 },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Django", level: 60 },
      { name: "MySQL", level: 60 },
      { name: "PostgreSQL", level: 40 },
    ],
  },
  {
    category: "TOOLS",
    skills: [
      { name: "Git", level: 60 },
      { name: "Postman", level: 40 },
      { name: "Framer Motion", level: 50 },
    ],
  },
  {
    category: "LANGUAGES",
    skills: [
      { name: "Javascript", level: 70 },
      { name: "Typescript", level: 40 },
      { name: "Python", level: 50 },
    ],
  },
];

const About = () => {
  return (
    <section className="relative w-[95%] mx-auto text-[#E9EEF5] overflow-hidden py-10 md:py-10 md:px-[3%]">
      <h1 className="text-6xl font-bold text-left">ABOUT</h1>


      <div className="mt-10">
      <div className="hidden md:flex gap-5">
        <img src={Profile}
        alt="profile" 
        className="h-70 w-70 rounded-4xl shadow-[0_0_20px_#8B5CF6] xl:shadow-none lg:h-80 lg:w-80 xl:h-140 xl:w-140"
        />
        <p className="text-[20.5px] lg:text-[26px] xl:text-[33px]">
          <span className="xl:hidden">Ebubechukwu Onwukwe is a Full-Stack Developer driven by engineering precision and intuitive user experience. With a foundation in Computer Engineering, he specializes in building scalable web applications using React, Django, and PostgreSQL, crafting high-performance solutions that bridge complex technical requirements and seamless interfaces.</span>
          <span className="md:hidden xl:inline">Ebubechukwu Onwukwe is a Full-Stack Developer driven by the intersection of engineering precision and intuitive user experience. With a solid foundation in Computer Engineering, he specializes in building scalable, robust web applications using React, Django, and PostgreSQL. I am passionate about crafting high-performance digital solutions that bridge the gap between complex technical requirements and seamless, user-centric interfaces.</span></p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
        {SKILLS_DATA.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: idx * 0.1 }}
            className="bg-[#151A21] py-6 px-4 rounded-2xl border border-gray-800 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2 tracking-widest lg:text-[26px]">{group.category}</h2>
            <hr className="border-gray-700 mb-6" />
            <div className="space-y-6">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium lg:text-[22px]">{skill.name}</span>
                    {/* <span className="text-sm text-gray-400">{skill.level}%</span> */}
                  </div>
                  <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-[#8B5CF6]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      </div>
    </section>
  );
};

export default About;