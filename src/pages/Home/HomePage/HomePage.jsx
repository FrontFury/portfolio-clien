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

const HomePage = () => {
  const profileImage = profile;

  // =====================================================
  // TECH STACK
  // =====================================================

  const fullTechStack = [
    // Web Frontend
    {
      Icon: FaHtml5,
      name: "HTML5",
      color: "text-orange-500",
    },
    {
      Icon: FaCss3Alt,
      name: "CSS3",
      color: "text-blue-500",
    },
    {
      Icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-cyan-400",
    },
    {
      Icon: FaBootstrap,
      name: "Bootstrap",
      color: "text-purple-500",
    },
    {
      Icon: SiJavascript,
      name: "JavaScript",
      color: "text-yellow-400",
    },
    {
      Icon: SiReact,
      name: "React",
      color: "text-sky-400",
    },

    // Backend & Database
    {
      Icon: SiExpress,
      name: "Express.js",
      color: "text-stone-300",
    },
    {
      Icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-500",
    },
    {
      Icon: SiFirebase,
      name: "Firebase",
      color: "text-amber-500",
    },

    // Android & Native Development
    {
      Icon: FaAndroid,
      name: "Android",
      color: "text-emerald-400",
    },
    {
      Icon: SiKotlin,
      name: "Kotlin",
      color: "text-purple-400",
    },
    {
      Icon: SiSqlite,
      name: "SQLite",
      color: "text-sky-300",
    },

    // Core Languages & Tools
    {
      Icon: SiC,
      name: "C Language",
      color: "text-indigo-400",
    },
    {
      Icon: FaGitAlt,
      name: "Git",
      color: "text-orange-600",
    },
    {
      Icon: SiGithub,
      name: "GitHub",
      color: "text-stone-200",
    },
  ];

  // =====================================================
  // CONTAINER ANIMATION
  // =====================================================

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  // =====================================================
  // ITEM ANIMATION
  // =====================================================

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // =====================================================
  // ICON ANIMATION
  // =====================================================

  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },

    visible: {
      scale: 1,
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },

    hover: {
      scale: 1.15,
      y: -5,

      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        bg-[#0a0a0a]
        text-stone-200
        flex
        flex-col
        justify-between
        overflow-x-hidden
        font-sans
        selection:bg-amber-900/50
        selection:text-amber-200
      "
    >
      {/* =====================================================
          TOP LEFT CODE STYLE LOGO
      ====================================================== */}

      <motion.div
        initial={{
          x: -30,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
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
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            text-xl
            sm:text-2xl
            md:text-3xl
            font-black
            tracking-tighter
            cursor-default
            drop-shadow-[0_0_12px_rgba(245,158,11,0.15)]
          "
        >
          {/* Opening Bracket */}

          <span className="text-amber-500/90">
            &lt;
          </span>

          {/* Name */}

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

          {/* Closing Bracket */}

          <span className="text-amber-500/90">
            /&gt;
          </span>
        </motion.div>

        {/* Gold Underline */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "55%",
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="
            mt-1
            h-[1px]
            bg-gradient-to-r
            from-amber-400
            to-transparent
          "
        />
      </motion.div>

      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        {/* Main Amber Glow */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
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
            bg-amber-950/20
            rounded-2xl
            blur-[100px]
            sm:blur-[140px]
          "
        />

        {/* Secondary Glow */}

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
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
            bg-yellow-950/15
            rounded-2xl
            blur-[100px]
            sm:blur-[140px]
          "
        />

        {/* =====================================================
            FLOATING TECHNOLOGY ICONS
        ====================================================== */}

        <AnimatePresence>
          {fullTechStack.slice(0, 8).map(
            ({ Icon, color }, index) => (
              <motion.div
                key={index}
                className={`
                  absolute
                  ${color}
                  opacity-[0.05]
                  sm:opacity-[0.07]
                  hidden
                  sm:block
                `}
                style={{
                  top: `${index * 12 + 5}%`,
                  left:
                    index % 2 === 0
                      ? "3%"
                      : "90%",
                  fontSize: "3.5rem",
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 0.07,
                  scale: 1,
                  y: [0, -25, 0],
                  rotate: [0, 360],

                  transition: {
                    y: {
                      duration: 6 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },

                    rotate: {
                      duration:
                        25 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    },

                    opacity: {
                      duration: 1,
                    },

                    scale: {
                      duration: 1,
                      type: "spring",
                    },
                  },
                }}
              >
                <Icon />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.header
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
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
          border-stone-800/50
          bg-[#0a0a0a]/70
          backdrop-blur-md
        "
      >
        {/* Existing Logo */}

        <div
          className="
            text-xl
            sm:text-2xl
            font-black
            tracking-tighter
            text-stone-100 m-8
            group
          "
        >
          <span
            className="
              text-amber-400
              group-hover:text-amber-300
              transition-colors
            "
          >
            DEV
          </span>

          <span className="text-stone-400">
            .TASIN
          </span>

          <motion.span
            className="
              inline-block
              w-2
              h-2
              rounded-full
              bg-amber-500
              ml-1.5
            "
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Availability */}

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
            bg-stone-900
            border
            border-stone-800
            shadow-inner
          "
          whileHover={{
            scale: 1.05,
            borderColor: "#f59e0b",

            transition: {
              duration: 0.2,
            },
          }}
        >
          <span
            className="
              relative
              flex
              h-2
              w-2
              sm:h-2.5
              sm:w-2.5
            "
          >
            <span
              className="
                animate-ping
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-emerald-400
                opacity-75
              "
            />

            <span
              className="
                relative
                inline-flex
                rounded-full
                h-2
                w-2
                sm:h-2.5
                sm:w-2.5
                bg-emerald-500
              "
            />
          </span>

          <span
            className="
              text-[10px]
              sm:text-xs
              text-stone-300
              font-medium
              tracking-wide
            "
          >
            Ready for Innovations
          </span>
        </motion.div>
      </motion.header>

      {/* =====================================================
          MAIN HERO
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
              LEFT COLUMN — PROFILE IMAGE
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
            whileHover={{
              y: -6,

              transition: {
                duration: 0.3,
              },
            }}
          >
            {/* Profile Glow */}

            <div
              className="
                absolute
                -inset-4
                bg-gradient-to-b
                from-amber-600/30
                to-yellow-700/20
                rounded-2xl
                blur-2xl
                sm:blur-3xl
                opacity-30
                group-hover:opacity-50
                transition
                duration-700
              "
            />

            {/* Profile Container */}

            <motion.div
              className="
                relative
                p-2
                sm:p-2.5
                bg-stone-900/60
                backdrop-blur-xl
                border
                border-amber-500/20
                rounded-2xl
                shadow-2xl
                shadow-amber-950/30
              "
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(245, 158, 11, 0.15)",
              }}
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
                  group-hover:border-[#D4AF37]/70
                  transition-all
                  duration-500
                "
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
              />

              {/* Pulse Border */}

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
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* =================================================
                SOCIAL ICON BAR
            ================================================== */}

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
                bg-stone-800/80
                backdrop-blur-lg
                rounded-xl
                border
                border-stone-700
                shadow-xl
                z-20
              "
              variants={containerVariants}
            >
              {[
                {
                  icon: <FaLinkedinIn />,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  href: "#",
                  label: "GitHub",
                },
                {
                  icon: <FaCode />,
                  href: "#",
                  label: "Dev.to",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  title={item.label}
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    rounded-lg
                    bg-stone-700/50
                    flex
                    items-center
                    justify-center
                    text-stone-300
                    hover:text-[#0a0a0a]
                    hover:bg-amber-400
                    transition-all
                    duration-300
                    shadow-md
                  "
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT COLUMN — HERO CONTENT
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="
              space-y-5
              sm:space-y-6
              p-5
              sm:p-8
              rounded-2xl
              sm:rounded-3xl
              bg-stone-950/40
              backdrop-blur-xl
              border
              border-stone-800
              shadow-xl
              relative
              overflow-hidden
            "
            style={{
              boxShadow:
                "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Decorative Glow */}

            <div
              className="
                absolute
                top-0
                right-0
                w-32
                h-32
                bg-amber-500/5
                rounded-2xl
                blur-3xl
                -translate-y-1/2
                translate-x-1/2
              "
            />

            {/* =================================================
                INTRO
            ================================================== */}

            <div
              className="
                space-y-2.5
                sm:space-y-3
                text-center
                lg:text-left
                relative
                z-10
              "
            >
              {/* Developer Badge */}

              <motion.div
                className="
                  inline-block
                  px-3
                  py-1
                  text-[11px]
                  sm:text-sm
                  font-semibold
                  tracking-wider
                  text-amber-300
                  uppercase
                  bg-amber-950/40
                  rounded-full
                  border
                  border-amber-800/60
                "
                whileHover={{
                  scale: 1.05,
                }}
              >
                Web & Native Android Developer
              </motion.div>

              {/* Heading */}

              <h1
                className="
                  text-2xl
                  xs:text-3xl
                  sm:text-5xl
                  lg:text-6xl
                  font-extrabold
                  tracking-tighter
                  leading-tight
                  text-stone-50
                "
              >
                Hello, I'm
                <br />

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
                    backgroundPosition: [
                      "0%",
                      "100%",
                      "0%",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Estiak Ahamed Tasin
                </motion.span>
              </h1>

              {/* Description */}

              <p
                className="
                  text-sm
                  sm:text-lg
                  text-stone-300
                  max-w-2xl
                  leading-relaxed
                  mx-auto
                  lg:mx-0
                "
              >
                I’m an enthusiastic developer
                transforming concepts into seamless
                applications across Web & Android
                platforms. Combining{" "}
                <span className="text-amber-300 font-semibold">
                  Web Craftsmanship
                </span>{" "}
                with{" "}
                <span className="text-emerald-400 font-semibold">
                  Kotlin & SQLite Native Solutions
                </span>{" "}
                to build performance-driven digital
                products.
              </p>
            </div>

            {/* =================================================
                TECH STACK
            ================================================== */}

            <motion.div
              className="
                space-y-2.5
                sm:space-y-3
                relative
                z-10
              "
              variants={containerVariants}
            >
              <h3
                className="
                  text-[10px]
                  sm:text-xs
                  font-bold
                  tracking-widest
                  text-stone-500
                  uppercase
                  text-center
                  lg:text-left
                "
              >
                Tech Stack & Ecosystem
              </h3>

              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  lg:justify-start
                  gap-2
                  sm:gap-3
                  max-h-[140px]
                  sm:max-h-[180px]
                  overflow-y-auto
                  pr-1
                  custom-scrollbar
                "
              >
                {fullTechStack.map(
                  ({ Icon, name, color }, index) => (
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
                        bg-stone-900/90
                        border
                        border-stone-800
                        ${color}
                        hover:border-amber-500/50
                        hover:bg-stone-800
                        transition-all
                        shadow-sm
                        group
                      `}
                      variants={iconVariants}
                      whileHover="hover"
                      title={name}
                    >
                      <Icon
                        className="
                          w-4
                          h-4
                          sm:w-5
                          sm:h-5
                        "
                      />

                      <span
                        className="
                          text-[11px]
                          sm:text-xs
                          font-medium
                          text-stone-200
                          group-hover:text-white
                          transition-colors
                        "
                      >
                        {name}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

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
              {/* Explore Projects */}

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
                  bg-amber-400
                  rounded-xl
                  transition-all
                  duration-300
                  shadow-lg
                  overflow-hidden
                  w-full
                  sm:w-auto
                  justify-center
                "
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 10px 25px -5px rgba(245, 158, 11, 0.4)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                {/* Shine Effect */}

                <motion.div
                  className="
                    absolute
                    inset-0
                    w-1/2
                    h-full
                    bg-white/20
                    skew-x-[-30deg]
                  "
                  initial={{
                    x: "-150%",
                  }}
                  whileHover={{
                    x: "250%",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                />

                Explore Projects

                <FaArrowRight
                  className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              {/* Download Resume */}

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
                  bg-stone-800/40
                  rounded-xl
                  border
                  border-stone-700
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-amber-400
                  hover:bg-stone-800/60
                  shadow-md
                  w-full
                  sm:w-auto
                  justify-center
                "
              >
                <FaFileDownload
                  className="
                    w-4
                    h-4
                    text-amber-400
                    group-hover:text-amber-300
                  "
                />

                Download Resume
              </motion.a>
            </motion.div>

            {/* Top Border Accent */}

            <div
              className="
                absolute
                inset-0
                rounded-2xl
                sm:rounded-3xl
                border-t
                border-amber-400/10
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