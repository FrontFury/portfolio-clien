import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaArrowRight,
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";

// =====================================================
// 3D TILT CARD COMPONENT
// =====================================================
const ProjectCard = ({ project, cardVariants, handleImageMouseEnter, handleImageMouseLeave }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeaveCard = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveCard}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="
        relative
        flex
        flex-col
        bg-stone-900/70
        backdrop-blur-xl
        border
        border-stone-800/80
        hover:border-amber-500/60
        rounded-2xl
        overflow-hidden
        shadow-2xl
        group
        transition-colors
        duration-500
      "
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* IMAGE CONTAINER */}
      <div
        className="
          relative
          overflow-hidden
          aspect-video
          bg-stone-950
          cursor-pointer
        "
        onMouseEnter={handleImageMouseEnter}
        onMouseLeave={handleImageMouseLeave}
      >
        <img
          src={project.image}
          alt={`${project.title} website preview`}
          draggable="false"
          className="
            portfolio-scroll-image
            absolute
            top-0
            left-0
            w-full
            h-auto
            max-w-none
            select-none
            pointer-events-none
            transition-transform
            duration-[2200ms]
            ease-in-out
          "
          style={{ transform: "translateY(0)" }}
        />

        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 pointer-events-none" />

        <div
          className="
            absolute
            bottom-3
            left-1/2
            -translate-x-1/2
            px-3.5
            py-1.5
            rounded-full
            bg-stone-950/80
            backdrop-blur-md
            border
            border-stone-700/50
            text-[10px]
            text-stone-300
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            flex
            items-center
            gap-1.5
            pointer-events-none
            z-10
            shadow-lg
          "
        >
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="text-amber-400 font-bold"
          >
            ↓
          </motion.span>
          Hover to Explore
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-5 relative z-10">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-stone-100 leading-tight">
            Project Name:{" "}
            <span className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
              {project.title}
            </span>
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-stone-500 font-medium">
              Project Type:
            </span>
            <span className="text-xs sm:text-sm text-stone-300 font-semibold">
              {project.type}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* TECHNOLOGIES */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold mb-3">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="
                  px-3
                  py-1.5
                  text-[10px]
                  sm:text-[11px]
                  font-semibold
                  text-stone-300
                  bg-stone-950
                  border
                  border-stone-800
                  rounded-full
                  shadow-inner
                  transition-colors
                  duration-300
                  group-hover:border-amber-500/40
                  group-hover:text-amber-300
                "
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* PROJECT ACTIONS */}
        <div className="relative pt-5 border-t border-stone-800/80">
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-20 h-px bg-amber-400/60 blur-sm" />

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-semibold">
                Project Links
              </span>
            </div>
            <FaArrowRight className="text-stone-700 text-xs group-hover:text-amber-400/70 transition-colors" />
          </div>

          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              relative
              w-full
              py-2.5
              px-4
              rounded-xl
              bg-gradient-to-r
              from-amber-400
              via-yellow-400
              to-amber-400
              hover:from-amber-300
              hover:via-yellow-300
              hover:to-amber-300
              text-black
              font-bold
              text-xs
              sm:text-sm
              flex
              items-center
              justify-center
              gap-2
              shadow-[0_5px_20px_rgba(245,158,11,0.15)]
              transition-all
              duration-300
              hover:shadow-[0_8px_25px_rgba(245,158,11,0.35)]
            "
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
            <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {project.clientCode && (
              <motion.a
                href={project.clientCode}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  py-2
                  px-3
                  rounded-xl
                  bg-stone-950
                  hover:bg-stone-800
                  text-stone-400
                  hover:text-stone-200
                  border
                  border-stone-800
                  hover:border-stone-700
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-colors
                  duration-300
                "
              >
                <FaGithub />
                {project.serverCode ? "Client Code" : "Source Code"}
              </motion.a>
            )}

            {project.serverCode && (
              <motion.a
                href={project.serverCode}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  py-2
                  px-3
                  rounded-xl
                  bg-stone-950
                  hover:bg-stone-800
                  text-stone-400
                  hover:text-stone-200
                  border
                  border-stone-800
                  hover:border-stone-700
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-colors
                  duration-300
                "
              >
                <FaCode />
                Server Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Ideal Commerce College",
      type: "Fullstack",
      image: "/Project1.png",
      description:
        "A complete college management and institutional website developed for Ideal Commerce College. The platform provides students, teachers, operators, and administrators with a modern digital experience for academic and administrative activities.",
      liveLink: "https://icc-modern.vercel.app/",
      clientCode: "https://github.com/FrontFury/icc-modern-client.git",
      serverCode: "https://github.com/FrontFury/ideal-commerce-college-server",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      id: 2,
      title: "RiseUp Foundation",
      type: "Fullstack",
      image: "/Project4.png",
      description:
        "RiseUp Foundation offers crowdfunding support for personal issues, startups, businesses, and creative projects. It empowers individuals and communities by providing financial assistance.",
      liveLink: "https://riseup-foundation-a10.web.app/",
      clientCode: "https://github.com/FrontFury/riseup-foundation-client",
      serverCode: "https://github.com/FrontFury/riseup-foundation-server",
      technologies: ["React", "Express.js", "Node.js", "MongoDB", "Firebase"],
    },
    {
      id: 3,
      title: "Happiem",
      type: "Frontend",
      image: "/Project5.png",
      description:
        "Happiem is a revolutionary web app designed to help users achieve a happier and more fulfilled life. It combines Personal Assistants, Coaches, and Essential Tools to guide you.",
      liveLink: "https://frontfury.github.io/happiem-proj/",
      clientCode: "https://github.com/FrontFury/happiem-proj.git",
      serverCode: null,
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    },
    {
      id: 4,
      title: "Rinterio",
      type: "Frontend",
      image: "/Project6.png",
      description:
        "The Rinterio website showcases modern architectural designs with a focus on blending rustic charm and contemporary elegance. It offers services, portfolios, and blogs.",
      liveLink: "https://frontfury.github.io/rinterio-design/",
      clientCode: "https://github.com/FrontFury/rinterio-design",
      serverCode: null,
      technologies: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  const handleImageMouseEnter = (event) => {
    const container = event.currentTarget;
    const image = container.querySelector(".portfolio-scroll-image");
    if (!image) return;

    const imageHeight = image.offsetHeight;
    const containerHeight = container.clientHeight;
    const scrollDistance = imageHeight - containerHeight;

    if (scrollDistance > 0) {
      image.style.transform = `translateY(-${scrollDistance}px)`;
    }
  };

  const handleImageMouseLeave = (event) => {
    const container = event.currentTarget;
    const image = container.querySelector(".portfolio-scroll-image");
    if (!image) return;

    image.style.transform = "translateY(0)";
  };

  return (
    <section
      id="portfolio"
      className="
        relative
        min-h-screen
        w-full
        bg-[#0a0a0a]
        text-stone-200
        py-16
        px-4
        sm:px-8
        lg:px-16
        overflow-hidden
        font-sans
      "
    >
      {/* =====================================================
          FLOATING ANIMATED TECH ICONS (SIDE BACKGROUND)
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block">
        {/* LEFT SIDE ICONS */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-8 text-amber-500/20 text-5xl"
        >
          <FaReact />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-12 text-stone-700/30 text-4xl"
        >
          <FaJs />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-6 text-amber-500/15 text-5xl"
        >
          <FaNodeJs />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-16 text-stone-700/30 text-4xl"
        >
          <FaDatabase />
        </motion.div>

        {/* RIGHT SIDE ICONS */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 right-8 text-stone-700/30 text-5xl"
        >
          <FaHtml5 />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-12 text-amber-500/20 text-4xl"
        >
          <FaCss3Alt />
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-44 right-6 text-stone-700/30 text-4xl"
        >
          <FaGitAlt />
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-16 text-amber-500/15 text-5xl"
        >
          <FaServer />
        </motion.div>
      </div>

      {/* BACKGROUND AMBIENT LIGHTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute
            top-1/4
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[400px]
            bg-amber-500/15
            rounded-full
            blur-[150px]
          "
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="
              text-4xl
              sm:text-6xl
              font-extrabold
              tracking-wider
              text-stone-100
              uppercase
            "
          >
            Port
            <span className="text-amber-400 relative inline-block">
              folio
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-1 left-0 w-full h-[3px] bg-amber-400 rounded-full origin-left"
              />
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              h-1
              bg-amber-400
              mx-auto
              mt-4
              rounded-full
              shadow-[0_0_12px_rgba(251,191,36,0.6)]
            "
          />
        </div>

        {/* PROJECT GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            items-stretch
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              cardVariants={cardVariants}
              handleImageMouseEnter={handleImageMouseEnter}
              handleImageMouseLeave={handleImageMouseLeave}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;