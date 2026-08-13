import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../pages/Shared/Navbar";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiTypescript,
} from "react-icons/si"; 

// =====================================================
// FLOATING TECH ICONS CONFIGURATION
// =====================================================
const floatingTechIcons = [
  // Left Side Floating Stack
  { Icon: SiReact, top: "12%", left: "3%", size: 38, color: "#61DAFB", delay: 0 },
  { Icon: SiJavascript, top: "35%", left: "2%", size: 34, color: "#F7DF1E", delay: 1 },
  { Icon: SiNodedotjs, top: "60%", left: "4%", size: 36, color: "#339933", delay: 2 },
  { Icon: SiMongodb, top: "82%", left: "3%", size: 34, color: "#47A248", delay: 0.5 },

  // Right Side Floating Stack
  { Icon: SiTailwindcss, top: "15%", right: "3%", size: 36, color: "#06B6D4", delay: 1.5 },
  { Icon: SiExpress, top: "38%", right: "2%", size: 32, color: "#E0E0E0", delay: 2.5 },
  { Icon: SiFirebase, top: "62%", right: "4%", size: 34, color: "#FFCA28", delay: 0.8 },
  { Icon: SiTypescript, top: "85%", right: "3%", size: 32, color: "#3178C6", delay: 1.8 },
];

const Main = () => {
  return (
    // Dark grid theme background setup
    <div className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between selection:bg-yellow-400 selection:text-black font-sans overflow-hidden">
      
      {/* 1. Grid Overlay Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* 2. Soft Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[140px]" />
      </div>

      {/* 3. Floating Tech Stack Icons */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingTechIcons.map((item, idx) => {
          const TechIcon = item.Icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 0, opacity: 0.15 }}
              animate={{
                y: [-12, 12, -12],
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 6 + (idx % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
              style={{
                position: "absolute",
                top: item.top,
                left: item.left,
                right: item.right,
              }}
              className="hidden lg:flex p-3 rounded-2xl bg-stone-900/40 border border-stone-800/60 backdrop-blur-md shadow-xl items-center justify-center"
            >
              <TechIcon
                size={item.size}
                color={item.color}
                style={{ filter: `drop-shadow(0 0 8px ${item.color}66)` }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Floating Navigation Bar */}
      <Navbar />

      {/* Dynamic Content */}
      <main className="relative z-10 flex-grow max-w-[1400px] w-full mx-auto px-4 md:px-8 py-10">
        <Outlet />
      </main>

    </div>
  );
};

export default Main;