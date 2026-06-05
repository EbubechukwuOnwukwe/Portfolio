import { useState } from "react";
// import ecommerceImg from "../assets/ecommerce.png";
// import iotImg from "../assets/iot.png";
// import apiImg from "../assets/api.png";

const CATEGORIES = ["All", "React", "Django", "Full-Stack", "Mobile"];

const PROJECTS_DATA = [
  {
    title: "PrimeStone LP Updated",
    tags: ["React", "Django", "PostgreSQL"],
    viewLink: "https://prime-stone-one.vercel.app/",
    codeLink: "",
    description: "A full-featured e-commerce solution with payment integration and real-time inventory.",
    topTag: "Full-Stack",
    // image: ecommerceImg,
  },
  {
    title: "PrimeStone LP",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    viewLink: "https://primestonelp.com/",
    codeLink: "",
    description: "Real-time monitoring system for connected industrial devices with data visualization.",
    topTag: "Full-Stack",
    // image: iotImg,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "" || activeFilter === "All") return true;
    return project.topTag === activeFilter || project.tags.includes(activeFilter);
  });

  return (
    <section className="relative w-[95%] mx-auto text-[#E9EEF5] overflow-hidden py-10 md:py-20 md:px-[3%]">
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
      <div>
        {filteredProjects.map((project, index) => (
          <div key={index} className="mt-4 p-4 border-3 border-[#151A21] rounded-2xl">
            {/* Top Tag - Only visible from MD size */}
            <p className="hidden md:block text-[#40E0FF] font-bold mb-2 tracking-widest text-lg">{project.topTag}</p>
            
            {/* Image - Only visible from XL size */}{/* put this in src {project.image} */}
            <img src="" alt={project.title} className="hidden xl:block w-[90%] h-48 object-cover rounded-xl mb-4" />

            <h2 className="text-3xl font-bold text-left">{project.title}</h2>

            {/* Description - Only visible from MD size */}
            <p className="hidden md:block text-xl my-3 text-gray-400">{project.description}</p>

            {/* Tags - Hidden from MD size up */}
            <div className="flex gap-3 text-2xl my-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none md:hidden">
              {project.tags.map((tag) => (
                <p key={tag} className="p-2 bg-[#151A21] rounded-2xl shrink-0">{tag}</p>
              ))}
            </div>
            <div className="text-2xl flex gap-16 justify-center text-[#40E0FF] font-semibold">
              <a href={project.viewLink} className="mt-1">VIEW</a>
              <p className="text-[#151A21] p-0 m-0 text-3xl">|</p>
              {project.codeLink ? (
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="mt-1">CODE</a>
              ) : (
                <span className="mt-1 line-through opacity-40 cursor-not-allowed">CODE</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects