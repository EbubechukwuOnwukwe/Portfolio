import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import PLP from "../assets/PLP.png";
import PLPUP from "../assets/PLPUP.png";
import Beacon from "../assets/Beacon.png";
import DS from "../assets/DueSpace.png";
import NMA from "../assets/NMA.png";

const CATEGORIES = ["All", "React", "Django", "Full-Stack", "Mobile"];

const PROJECTS_DATA = [
  {
    title: "NMA Voting System",
    tags: ["React", "Bootstrap", "Django", "Django-REST-Framework", "PostgreSQL"],
    viewLink: "https://nma-voting-system.vercel.app/",
    codeLink: "",
    description: "Developed a secure web-based voting platform for the Nigerian Medical Association, designed to streamline elections, voter management, candidate administration, and result processing through a centralized system. The project was fully developed and completed before the deployment was suspended.",
    mobileDescription: "A secure voting platform for the Nigerian Medical Association — handles elections, voter management, and results.",
    topTag: "Full-Stack",
    image: NMA,
  },
  {
    title: "DueSpace",
    tags: ["React", "Tailwind", "Framer-Motion"],
    viewLink: "https://duespace.com",
    codeLink: "",
    description: "Led the development team at DueSpace, overseeing the planning, development, and delivery of web projects. Coordinated technical implementation, guided development decisions, and ensured projects were completed to a professional standard across functionality, performance, and user experience.",
    mobileDescription: "Led the DueSpace dev team — overseeing planning, development, and delivery of multiple web projects.",
    topTag: "React",
    image: DS,
  },
  {
    title: "The Beacon Academy",
    tags: ["React", "Tailwind", "Framer-Motion", "Web3Forms"],
    viewLink: "https://beaconacademyservices.com/",
    codeLink: "",
    description: "Designed and developed the official website for The Beacon Academy under DueSpace, creating a modern, responsive platform that presents the academy's programs, mission, services, and information in a clear and engaging way.",
    mobileDescription: "Official website for The Beacon Academy — a modern, responsive platform showcasing programs and services.",
    topTag: "React",
    image: Beacon,
  },
  {
    title: "PrimeStone LP Updated",
    tags: ["React", "Tailwind", "Django", "PostgreSQL"],
    viewLink: "https://prime-stone-one.vercel.app",
    codeLink: "",
    description: "A refined client-facing platform featuring an intuitive, user-centric intake process that enables clients to precisely categorize their legal needs for more efficient consultation matching.",
    mobileDescription: "Refined legal platform with an intuitive intake process for categorizing and matching client legal needs.",
    topTag: "Full-Stack",
    image: PLPUP,
  },
  {
    title: "PrimeStone LP",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    viewLink: "https://primestonelp.com",
    codeLink: "",
    description: "A professional digital presence for PrimeStone Legal Practitioners, providing a clear overview of the firm's practice areas, expertise, and standards to facilitate direct client engagement.",
    mobileDescription: "Professional website for PrimeStone Legal Practitioners — showcasing practice areas and expertise.",
    topTag: "Full-Stack",
    image: PLP,
  },
];

const isSafeUrl = (url: string): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("");
  const [tooltip, setTooltip] = useState<number | null>(null);
  const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear any pending tooltip timeout on unmount to avoid state updates on unmounted component
  useEffect(() => {
    return () => {
      if (tooltipTimeout.current) {
        clearTimeout(tooltipTimeout.current);
      }
    };
  }, []);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "" || activeFilter === "All") return true;
    return project.topTag === activeFilter || project.tags.includes(activeFilter);
  });

  const showTooltip = (index: number) => {
    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    setTooltip(index);
  };

  const hideTooltip = () => {
    tooltipTimeout.current = setTimeout(() => setTooltip(null), 200);
  };

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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.02 }}
            className={`p-4 border-3 border-[#151A21] rounded-2xl transition-shadow duration-300 flex flex-col ${
              index % 2 === 0
                ? "hover:shadow-[0_0_20px_#40E0FF]"
                : "hover:shadow-[0_0_20px_#8B5CF6]"
            }`}
          >
            {/* Top Tag */}
            <p className="text-[#40E0FF] font-bold mb-2 tracking-widest text-lg">{project.topTag}</p>

            {/* Image */}
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-4" />

            <h2 className="text-3xl font-bold text-left">{project.title}</h2>

            {/* Full description — Laptop L / XL+ only */}
            <p className="hidden xl:block text-lg my-3 text-gray-400">{project.description}</p>

            {/* Mini description — Mobile & iPads (Mini, Air, Pro) */}
            <p className="xl:hidden text-base my-2 text-gray-400">{project.mobileDescription}</p>

            {/* Tags + Buttons pushed to bottom */}
            <div className="mt-auto">
              {/* Tags */}
              <div className="flex gap-2 my-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none">
                {project.tags.map((tag) => (
                  <p key={tag} className="text-sm px-3 py-1 bg-[#151A21] rounded-2xl shrink-0">{tag}</p>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 font-bold text-sm lg:text-base">
                {isSafeUrl(project.viewLink) ? (
                  <a
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#40E0FF] text-[#0B0D10] py-2 px-2 lg:px-3 rounded-3xl whitespace-nowrap"
                  >
                    VIEW LIVE
                  </a>
                ) : (
                  <span className="flex-1 text-center bg-[#40E0FF] text-[#0B0D10] opacity-40 py-2 px-2 lg:px-3 rounded-3xl whitespace-nowrap cursor-not-allowed">
                    VIEW LIVE
                  </span>
                )}

                {project.codeLink && isSafeUrl(project.codeLink) ? (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border-4 border-[#40E0FF] text-[#40E0FF] py-2 px-2 lg:px-3 rounded-3xl whitespace-nowrap"
                  >
                    VIEW GITHUB
                  </a>
                ) : (
                  <div className="relative flex-1">
                    <span
                      className="block w-full text-center border-4 border-[#40E0FF] text-[#40E0FF] opacity-40 py-2 px-2 lg:px-3 rounded-3xl line-through cursor-not-allowed select-none whitespace-nowrap"
                      onMouseEnter={() => showTooltip(index)}
                      onMouseLeave={hideTooltip}
                      onClick={() => showTooltip(tooltip === index ? null! : index)}
                    >
                      VIEW GITHUB
                    </span>
                    <AnimatePresence>
                      {tooltip === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
                        >
                          <span className="block w-56 text-center text-xs text-white bg-[#1e2430] border border-gray-600 rounded-xl px-3 py-2 shadow-lg">
                            This project is private and not owned by me
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects