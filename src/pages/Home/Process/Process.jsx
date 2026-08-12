import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      subtitle: "Research & Architecture",
      icon: FaSearch,
      description:
        "Understanding project requirements, defining target audience, outlining tech stack, and mapping the core database structure.",
      tags: ["Requirements", "Wireframing", "Tech Stack"],
    },
    {
      number: "02",
      title: "Design & Prototyping",
      subtitle: "UI/UX Experience",
      icon: FaPencilRuler,
      description:
        "Crafting intuitive user interfaces with a focus on seamless UX, modern design systems, and goldish aesthetic perfection.",
      tags: ["UI Design", "Figma", "Design System"],
    },
    {
      number: "03",
      title: "Development & Build",
      subtitle: "Web & Mobile Logic",
      icon: FaCode,
      description:
        "Writing scalable, modular frontend code with React/Tailwind CSS and native Android apps using Kotlin and SQLite.",
      tags: ["React.js", "Kotlin", "Clean Code"],
    },
    {
      number: "04",
      title: "Testing & Deployment",
      subtitle: "Launch & Optimization",
      icon: FaRocket,
      description:
        "Rigorous cross-platform testing, performance optimization, CI/CD pipeline setups, and final live deployment.",
      tags: ["Performance", "QA Testing", "Deployment"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] text-stone-200 px-4 sm:px-8 py-16 sm:py-20 font-sans selection:bg-amber-900/50 selection:text-amber-200 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left mb-12 sm:mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/40 px-3.5 py-1.5 rounded-full border border-amber-800/60 inline-block mb-3">
            Workflow & Strategy
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-100 tracking-tight">
            How I Work
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mt-3">
            A structured, quality-driven approach designed to bring ideas from initial concept to high-performing digital products.
          </p>
        </motion.div>

        {/* Process Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#121212] border border-stone-800/80 shadow-xl flex flex-col justify-between overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              >
                {/* Gold Gradient Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Card Glow Effect on Hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Step Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-amber-400/90 tracking-tighter group-hover:text-amber-300 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-amber-400 group-hover:border-amber-500/40 group-hover:bg-amber-950/30 group-hover:text-amber-300 transition-all duration-300 shadow-md">
                      <Icon className="text-xl" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500/80 block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-stone-100 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Step Tags */}
                <div className="pt-4 border-t border-stone-800/60 flex flex-wrap gap-1.5">
                  {step.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold text-stone-300 bg-stone-900 border border-stone-800 rounded-md group-hover:border-amber-500/30 group-hover:text-amber-200 transition-all"
                    >
                      <FaCheckCircle className="text-[8px] text-amber-400" />
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

export default Process;