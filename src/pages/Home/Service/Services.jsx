import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaLayerGroup,
  FaAndroid,
  FaArrowRight,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Crafting high-performance, interactive web applications using modern frameworks like React and Tailwind CSS with a focus on clean code.",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
    },
    {
      icon: FaMobileAlt,
      title: "Responsive UI/UX",
      description:
        "Designing intuitive user interfaces that provide a seamless experience across all devices, from mobile screens to large desktops.",
      tags: ["Mobile First", "Cross-Browser", "Animations", "UI Systems"],
    },
    {
      icon: FaLayerGroup,
      title: "Full-Stack Solutions",
      description:
        "Building robust end-to-end applications with secure backend architectures, database management, and seamless API integrations.",
      tags: ["Express.js", "MongoDB", "Firebase", "REST APIs"],
    },
    {
      icon: FaAndroid,
      title: "App Development",
      description:
        "Developing high-performance, native Android applications leveraging Kotlin and SQLite for reliable offline-first mobile experiences.",
      tags: ["Kotlin", "Android SDK", "SQLite", "Native UI"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] text-stone-200 px-4 sm:px-8 py-16 sm:py-24 font-sans selection:bg-amber-900/50 selection:text-amber-200 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/40 px-3.5 py-1.5 rounded-full border border-amber-800/60 inline-block mb-3">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-100 tracking-tight">
            MY SERVICES
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#121212] border border-stone-800/80 shadow-xl flex flex-col justify-between overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              >
                {/* Glowing Highlight Effect */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-stone-900/90 border border-stone-800 flex items-center justify-center text-amber-400 text-2xl mb-6 group-hover:border-amber-500/50 group-hover:bg-amber-950/40 group-hover:text-amber-300 transition-all shadow-md">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-stone-100 mb-3 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-stone-800/60 flex flex-wrap gap-1.5">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 text-[10px] font-semibold text-stone-300 bg-stone-900 border border-stone-800 rounded-md group-hover:border-amber-500/30 group-hover:text-amber-200 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;