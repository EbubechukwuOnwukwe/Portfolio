import { useState } from "react";
import { motion } from 'framer-motion';
import PLP from "../assets/PLP.png";
import PLPUP from "../assets/PLPUP.png";

const CATEGORIES = ["All", "React", "Django", "Full-Stack", "Mobile"];

const PROJECTS_DATA = [
  {
    title: "PrimeStone LP Updated",
    tags: ["React", "Tailwind", "Django", "PostgreSQL"],
    viewLink: "https://prime-stone-one.vercel.app",
    codeLink: "",
    description: "A refined client-facing platform featuring an intuitive, user-centric intake process that enables clients to precisely categorize their legal needs for more efficient consultation matching.",
    topTag: "Full-Stack",
    image: PLPUP,
  },
  {
    title: "PrimeStone LP",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    viewLink: "https://primestonelp.com",
    codeLink: "",
    description: "A professional digital presence for PrimeStone Legal Practitioners, providing a clear overview of the firm’s practice areas, expertise, and standards to facilitate direct client engagement.",
    topTag: "Full-Stack",
    image: PLP,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "" || activeFilter === "All") return true;
    return project.topTag === activeFilter || project.tags.includes(activeFilter);
  });

  return (
    <section className="relative w-[95%] mx-auto text-[#E9EEF5] overflow-hidden py-10 md:py-10 md:px-[3%]">
      <h1 className="text-6xl font-bold text-left">PROJECTS</h1>
      
      {/* Filter Categories */}
      <div className="flex gap-6 text-2xl mx-2 my-5 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <p
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`p-4 rounded-4xl shrink-0 cursor-pointer transition-colors ${
              activeFilter === cat ? "bg-[#40E0FF] font-bold text-[#0B0D10]" : "bg-[#151A21]"
            }`}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* Projects List */}
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.1 }}
            className={`mt-4 p-4 border-3 border-[#151A21] rounded-2xl md:mt-6 xl:mt-0 transition-shadow duration-300 ${
            index % 2 === 0 
              ? "hover:shadow-[0_0_20px_#40E0FF]" 
              : "hover:shadow-[0_0_20px_#8B5CF6]"
          }`}>
            {/* Top Tag - Only visible from MD size */}
            <p className="hidden md:block text-[#40E0FF] font-bold mb-2 tracking-widest text-lg">{project.topTag}</p>
            
            {/* Image - Only visible from XL size */}
            <img src={project.image} alt={project.title} className="hidden xl:block w-full h-48 object-cover rounded-xl mb-4" />

            <h2 className="text-3xl font-bold text-left">{project.title}</h2>

            {/* Description - Only visible from MD size */}
            <p className="hidden md:block text-xl my-3 text-gray-400">{project.description}</p>

            {/* Tags - Visible on mobile and XL screens */}
            <div className="flex gap-3 text-2xl my-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none md:hidden xl:flex">
              {project.tags.map((tag) => (
                <p key={tag} className="p-2 bg-[#151A21] rounded-2xl shrink-0">{tag}</p>
              ))}
            </div>
            <div className="text-2xl flex gap-16 justify-center text-[#40E0FF] font-semibold md:gap-5 md:text-center md:font-bold xl:text-xl xl:font-extrabold">
              <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="mt-1 md:bg-[#40E0FF] md:text-[#0B0D10] md:w-full md:p-2 md:rounded-3xl md:mt-0">VIEW <span className="hidden md:inline">LIVE</span></a>
              <p className="text-[#151A21] p-0 m-0 text-3xl md:hidden">|</p>
              {project.codeLink ? (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="mt-1"><span className="md:hidden">CODE</span><span className="hidden md:inline">VIEW GITHUB</span></a>
              ) : (
                <span className="mt-1 line-through opacity-40 cursor-not-allowed md:border-4 md:border-[#40E0FF] md:w-full md:p-2 md:rounded-3xl md:mt-0"><span className="md:hidden">CODE</span><span className="hidden md:inline">VIEW GITHUB</span></span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects