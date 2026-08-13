import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaLinkedinIn,
  FaGithub,
  FaFileDownload,
  FaArrowRight,
  FaCode,
  FaAndroid,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiKotlin,
  SiSqlite,
  SiC,
} from "react-icons/si";

import resumeImg from "../../../../public/Resume_Of_Tasin.pdf";
import profile from "../../../../public/Profile.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const profileImage = profile;

  // =====================================================
  // TECH STACK DATA
  // =====================================================

  const fullTechStack = [
    // Web Frontend
    { Icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
    { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500" },
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { Icon: SiReact, name: "React", color: "text-sky-400" },

    // Backend & Database
    { Icon: SiExpress, name: "Express.js", color: "text-stone-300" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: SiFirebase, name: "Firebase", color: "text-amber-500" },

    // Android & Native Development
    { Icon: FaAndroid, name: "Android", color: "text-emerald-400" },
    { Icon: SiKotlin, name: "Kotlin", color: "text-purple-400" },
    { Icon: SiSqlite, name: "SQLite", color: "text-sky-300" },

    // Core Languages & Tools
    { Icon: SiC, name: "C Language", color: "text-indigo-400" },
    { Icon: FaGitAlt, name: "Git", color: "text-orange-600" },
    { Icon: SiGithub, name: "GitHub", color: "text-stone-200" },
  ];

  // =====================================================
  // ANIMATION VARIANTS
  // =====================================================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 12 },
    },
    hover: {
      scale: 1.08,
      y: -3,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 220, damping: 12 },
    },
    hover: {
      scale: 1.2,
      y: -4,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        bg-[#080808]
        text-stone-200
        flex
        flex-col
        justify-between
        overflow-x-hidden
        font-sans
        selection:bg-amber-500/30
        selection:text-amber-200
      "
    >
      {/* =====================================================
          TOP LEFT CODE STYLE LOGO
      ====================================================== */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="
          fixed
          top-5
          left-5
          sm:top-6
          sm:left-7
          z-[100]
          select-none
        "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="
            text-xl
            sm:text-2xl
            md:text-3xl
            font-black
            tracking-tighter
            cursor-pointer
            drop-shadow-[0_0_12px_rgba(245,158,11,0.2)]
          "
        >
          <span className="text-amber-500/90">&lt;</span>
          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-amber-300
              via-yellow-400
              to-amber-500
            "
          >
            Tasin
          </span>
          <span className="text-amber-500/90">/&gt;</span>
        </motion.div>

        {/* Gold Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "65%" }}
          transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
          className="
            mt-1
            h-[1.5px]
            bg-gradient-to-r
            from-amber-400
            to-transparent
          "
        />
      </motion.div>

      {/* =====================================================
          ANIMATED BACKGROUND & GLASS LIGHTING
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Main Amber Glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-1/4
            left-1/4
            w-[300px]
            sm:w-[500px]
            lg:w-[600px]
            h-[300px]
            sm:h-[500px]
            lg:h-[600px]
            bg-amber-600/20
            rounded-full
            blur-[100px]
            sm:blur-[140px]
          "
        />

        {/* Secondary Glow */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="
            absolute
            bottom-1/5
            right-1/4
            w-[250px]
            sm:w-[400px]
            lg:w-[500px]
            h-[250px]
            sm:h-[400px]
            lg:h-[500px]
            bg-yellow-600/15
            rounded-full
            blur-[100px]
            sm:blur-[140px]
          "
        />

        {/* Floating Technology Background Icons */}
        <AnimatePresence>
          {fullTechStack.slice(0, 8).map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              className={`
                absolute
                ${color}
                hidden
                sm:block
                pointer-events-none
              `}
              style={{
                top: `${index * 12 + 6}%`,
                left: index % 2 === 0 ? "4%" : "91%",
                fontSize: "3.2rem",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.03, 0.08, 0.03],
                scale: 1,
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: {
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 22 + index * 2,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: { duration: 0.8 },
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* =====================================================
          NAVBAR (GLASS)
      ====================================================== */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="
          relative
          z-20
          flex
          items-center
          justify-between
          px-4
          sm:px-8
          py-4
          sm:py-5
          max-w-7xl
          mx-auto
          w-full
          border-b
          border-white/[0.08]
          bg-[#0a0a0a]/60
          backdrop-blur-md
        "
      >
        {/* DEV.TASIN Brand */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
            text-xl
            sm:text-2xl
            font-black
            tracking-tighter
            text-stone-100 m-8
            group
            cursor-pointer
          "
        >
          <span className="text-amber-400 group-hover:text-amber-300 transition-colors">
            DEV
          </span>
          <span className="text-stone-400">.TASIN</span>
          <motion.span
            className="
              inline-block
              w-2
              h-2
              rounded-full
              bg-amber-500
              ml-1.5
            "
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Availability Badge (Glass Pill) */}
        <motion.div
          className="
            flex
            items-center
            gap-2
            px-3
            py-1
            sm:px-4
            sm:py-1.5
            rounded-full
            bg-white/[0.03]
            backdrop-blur-md
            border
            border-white/[0.08]
            shadow-inner
            cursor-pointer
          "
          whileHover={{
            scale: 1.05,
            borderColor: "rgba(245, 158, 11, 0.4)",
            boxShadow: "0 0 15px rgba(245, 158, 11, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
          </span>
          <span className="text-[10px] sm:text-xs text-stone-300 font-medium tracking-wide">
            Ready for Innovations
          </span>
        </motion.div>
      </motion.header>

      {/* =====================================================
          MAIN HERO CONTENT
      ====================================================== */}
      <main
        className="
          relative
          z-10
          flex-grow
          flex
          items-center
          justify-center
          px-4
          sm:px-6
          py-8
          sm:py-12
          md:py-16
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            relative
            max-w-6xl
            w-full
            grid
            grid-cols-1
            lg:grid-cols-[1fr,1.6fr]
            gap-12
            lg:gap-14
            items-center
          "
        >
          {/* =================================================
              LEFT COLUMN — PROFILE IMAGE (GLASS)
          ================================================== */}
          <motion.div
            variants={itemVariants}
            className="
              relative
              justify-self-center
              lg:justify-self-start
              group
              mb-14
              sm:mb-16
              lg:mb-0
            "
          >
            {/* Animated Profile Ambient Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -inset-4
                bg-gradient-to-b
                from-amber-500/30
                to-yellow-600/20
                rounded-3xl
                blur-2xl
                sm:blur-3xl
              "
            />

            {/* Profile Container */}
            <motion.div
              className="
                relative
                p-2
                sm:p-2.5
                bg-[#101010]/60
                backdrop-blur-xl
                border
                border-white/[0.1]
                rounded-2xl
                shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
              "
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Profile Image */}
              <motion.img
                src={profileImage}
                alt="Estiak Ahamed Tasin"
                className="
                  w-48
                  h-56
                  xs:w-56
                  xs:h-64
                  sm:w-64
                  sm:h-72
                  lg:w-72
                  lg:h-80
                  object-cover
                  rounded-xl
                  bg-[#18170F]
                  border
                  border-[#D4AF37]/40
                  shadow-[0_0_30px_rgba(212,175,55,0.12)]
                  group-hover:border-[#D4AF37]/80
                  transition-all
                  duration-500
                "
              />

              {/* Dynamic Pulse Border Accent */}
              <motion.div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  border-2
                  border-amber-400/50
                  pointer-events-none
                "
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.6, 0.1, 0.6],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Social Icons Bar Floating Below Profile (Glassmorphism) */}
            <motion.div
              className="
                absolute
                -bottom-7
                sm:-bottom-6
                left-1/2
                -translate-x-1/2
                flex
                gap-2.5
                sm:gap-3
                p-1.5
                sm:p-2
                bg-[#121212]/70
                backdrop-blur-xl
                rounded-xl
                border
                border-white/[0.1]
                shadow-2xl
                z-20
              "
              variants={containerVariants}
            >
              {[
                {
                  icon: <FaLinkedinIn />,
                  href: "https://www.linkedin.com/in/estiak-ahamed-tasin/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  href: "https://github.com/FrontFury",
                  label: "GitHub",
                },
                {
                  icon: <FaCode />,
                  href: "https://tasin07.vercel.app/",
                  label: "Portfolio",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    rounded-lg
                    bg-white/[0.05]
                    backdrop-blur-md
                    border
                    border-white/[0.05]
                    flex
                    items-center
                    justify-center
                    text-stone-300
                    hover:text-[#0a0a0a]
                    hover:bg-amber-400
                    hover:border-amber-400
                    transition-all
                    duration-300
                    shadow-md
                  "
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT COLUMN — HERO CONTENT CARD (GLASS)
          ================================================== */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="
              space-y-5
              sm:space-y-6
              p-5
              sm:p-8
              rounded-2xl
              sm:rounded-3xl
              bg-[#101010]/60
              backdrop-blur-xl
              border
              border-white/[0.08]
              shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
              hover:border-amber-500/30
              hover:bg-[#101010]/80
              transition-all
              relative
              overflow-hidden
            "
          >
            {/* Top Right Decorative Ambient Light */}
            <div
              className="
                absolute
                top-0
                right-0
                w-36
                h-36
                bg-amber-500/10
                rounded-full
                blur-3xl
                -translate-y-1/2
                translate-x-1/2
                pointer-events-none
              "
            />

            {/* Intro Text Block */}
            <div className="space-y-2.5 sm:space-y-3 text-center lg:text-left relative z-10">
              {/* Role Badge (Glass) */}
              <motion.div
                className="
                  inline-block
                  px-3.5
                  py-1
                  text-[11px]
                  sm:text-sm
                  font-semibold
                  tracking-wider
                  text-amber-300
                  uppercase
                  bg-amber-500/10
                  backdrop-blur-md
                  rounded-full
                  border
                  border-amber-500/30
                  shadow-sm
                "
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(245, 158, 11, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Web & Native Android Developer
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight text-stone-50">
                Hello, I'm <br />
                <motion.span
                  className="text-amber-400 inline-block"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  animate={{
                    backgroundPosition: ["0%", "200%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Estiak Ahamed Tasin
                </motion.span>
              </h1>

              {/* Bio Description */}
              <p className="text-sm sm:text-lg text-stone-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                I’m an enthusiastic developer transforming concepts into
                seamless applications across Web & Android platforms.
                Combining{" "}
                <span className="text-amber-300 font-semibold">
                  Web Craftsmanship
                </span>{" "}
                with{" "}
                <span className="text-emerald-400 font-semibold">
                  Kotlin & SQLite Native Solutions
                </span>{" "}
                to build performance-driven digital products.
              </p>
            </div>

            {/* Tech Stack Grid Section */}
            <motion.div
              className="space-y-2.5 sm:space-y-3 relative z-10"
              variants={containerVariants}
            >
              <h3 className="text-[10px] sm:text-xs font-bold tracking-widest text-stone-400 uppercase text-center lg:text-left">
                Tech Stack & Ecosystem
              </h3>

              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  lg:justify-start
                  gap-2
                  sm:gap-2.5
                  max-h-[140px]
                  sm:max-h-[180px]
                  overflow-y-auto
                  pr-1
                  custom-scrollbar
                "
              >
                {fullTechStack.map(({ Icon, name, color }, index) => (
                  <motion.div
                    key={index}
                    className={`
                      flex
                      items-center
                      gap-1.5
                      sm:gap-2
                      px-2.5
                      sm:px-3
                      py-1
                      sm:py-1.5
                      rounded-lg
                      bg-white/[0.03]
                      backdrop-blur-md
                      border
                      border-white/[0.08]
                      ${color}
                      hover:border-amber-500/50
                      hover:bg-amber-500/10
                      transition-all
                      shadow-sm
                      cursor-default
                    `}
                    variants={badgeVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    title={name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[11px] sm:text-xs font-medium text-stone-200 group-hover:text-white transition-colors">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-3
                sm:gap-4
                pt-2
                relative
                z-10
              "
              variants={itemVariants}
            >
              {/* Explore Projects Button */}
              <motion.button
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  sm:px-7
                  py-2.5
                  sm:py-3
                  text-sm
                  sm:text-base
                  font-extrabold
                  text-[#0a0a0a]
                  bg-gradient-to-r
                  from-amber-300
                  via-yellow-400
                  to-amber-500
                  rounded-xl
                  transition-all
                  duration-300
                  shadow-lg
                  overflow-hidden
                  w-full
                  sm:w-auto
                  justify-center
                  cursor-pointer
                "
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Metallic Shine Animation */}
                <motion.div
                  className="
                    absolute
                    inset-0
                    w-1/2
                    h-full
                    bg-white/30
                    skew-x-[-30deg]
                  "
                  initial={{ x: "-150%" }}
                  whileHover={{ x: "250%" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                <span>
                  <Link to="/portfolio">Explore Projects</Link>
                </span>
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.button>

              {/* Download Resume Link Button (Glass Button) */}
              <motion.a
                href={resumeImg}
                download="Tasin_Resume.pdf"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  sm:px-7
                  py-2.5
                  sm:py-3
                  text-sm
                  sm:text-base
                  font-semibold
                  text-stone-100
                  bg-white/[0.04]
                  backdrop-blur-md
                  rounded-xl
                  border
                  border-white/[0.1]
                  transition-all
                  duration-300
                  hover:border-amber-400
                  hover:bg-amber-500/10
                  shadow-md
                  w-full
                  sm:w-auto
                  justify-center
                  cursor-pointer
                "
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <FaFileDownload className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Card Border Highlight Accent */}
            <div
              className="
                absolute
                inset-0
                rounded-2xl
                sm:rounded-3xl
                border-t
                border-white/[0.1]
                pointer-events-none
              "
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;