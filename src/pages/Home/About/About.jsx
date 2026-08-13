import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaAndroid,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiFramer,
  SiKotlin,
  SiFirebase,
  SiSqlite,
  SiDart,
  SiFlutter,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiNextdotjs,
  SiReactquery,
  SiChakraui,
  SiAntdesign,
  SiShadcnui,
  SiNodedotjs,
  SiJsonwebtokens,
  SiAndroidstudio,
} from "react-icons/si";

const About = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // =========================================================
  // PERSONAL INFORMATION
  // =========================================================

  const personalInfo = [
    {
      icon: FaUser,
      label: "Name",
      value: "Estiak Ahamed Tasin",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "tasin220116@diit.edu.bd",
    },
    {
      icon: FaMapMarkerAlt,
      label: "From",
      value: "Dhaka, Bangladesh",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+880 1909 855 135",
    },
  ];

  // =========================================================
  // FOCUS AREAS
  // =========================================================

  const focusAreas = [
    "Web Development",
    "Frontend Engineering",
    "UI/UX Integration",
    "Full Stack Development",
    "App Development",
    "Mobile Engineering",
    "Responsive Design",
    "API Integration",
  ];

  // =========================================================
  // TECHNOLOGY DATA
  // =========================================================

  const technologyCategories = {
    Frontend: [
      {
        name: "React JS",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-stone-100",
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-400",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-purple-400",
      },
      {
        name: "React Query",
        icon: SiReactquery,
        color: "text-red-400",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
    ],

    "UI / Styling": [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
      },
      {
        name: "Chakra UI",
        icon: SiChakraui,
        color: "text-teal-400",
      },
      {
        name: "Ant Design",
        icon: SiAntdesign,
        color: "text-blue-400",
      },
      {
        name: "shadcn/ui",
        icon: SiShadcnui,
        color: "text-stone-100",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "text-pink-400",
      },
      {
        name: "Responsive UI",
        icon: FaCode,
        color: "text-amber-400",
      },
    ],

    Backend: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-stone-100",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-400",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-400",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "text-cyan-300",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "text-fuchsia-400",
      },
    ],

    "Tools & More": [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-stone-100",
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "text-green-400",
      },
      {
        name: "Framer",
        icon: SiFramer,
        color: "text-blue-500",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-white",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "text-cyan-400",
      },
    ],

    "Development Technology": [
      {
        name: "Android",
        icon: FaAndroid,
        color: "text-green-400",
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
        color: "text-purple-400",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "text-sky-400",
      },
      {
        name: "Dart",
        icon: SiDart,
        color: "text-blue-400",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-yellow-400",
      },
      {
        name: "SQLite",
        icon: SiSqlite,
        color: "text-sky-300",
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "text-green-400",
      },
    ],
  };

  // =========================================================
  // CATEGORY LIST
  // =========================================================

  const categories = [
    "Frontend",
    "UI / Styling",
    "Backend",
    "Tools & More",
    "Development Technology",
  ];

  // =========================================================
  // ANIMATIONS
  // =========================================================

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#080808]
        text-stone-200
        px-4
        sm:px-6
        lg:px-8
        py-16
        sm:py-20
        font-sans
        selection:bg-amber-500/30
        selection:text-amber-200
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS & GLASSORPHISM LIGHTING
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Glow */}
        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            w-[300px]
            sm:w-[500px]
            lg:w-[700px]
            h-[300px]
            sm:h-[500px]
            lg:h-[700px]
            rounded-full
            bg-amber-600/[0.12]
            blur-[120px]
          "
        />

        {/* Gold Orb */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[35%]
            left-[10%]
            w-48
            h-48
            rounded-full
            bg-amber-500/[0.08]
            blur-3xl
          "
        />

        {/* Secondary Orb */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[10%]
            right-[10%]
            w-56
            h-56
            rounded-full
            bg-yellow-500/[0.08]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 sm:w-12 bg-amber-500" />

            <span
              className="
                text-xs
                sm:text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-amber-400
              "
            >
              About Me
            </span>
          </div>

          <h2
            className="
              text-3xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              text-stone-100
            "
          >
            More About{" "}
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
              Me
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              sm:text-base
              text-stone-400
              leading-relaxed
            "
          >
            A passionate developer focused on building modern, scalable and
            visually engaging digital experiences across Web and Android
            platforms.
          </p>
        </motion.div>

        {/* ===================================================
            TOP INFORMATION GRID (GLASS CARDS)
        ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
            mb-8
          "
        >
          {/* Career Objective */}

          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -5,
            }}
            className="
              lg:col-span-7
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.08]
              bg-[#101010]/60
              backdrop-blur-xl
              p-6
              sm:p-8
              shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
              transition-all
              duration-300
              hover:border-amber-500/40
              hover:bg-[#101010]/80
            "
          >
            {/* Gold Line */}

            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-1
                bg-gradient-to-b
                from-amber-300
                via-amber-500
                to-yellow-700
              "
            />

            {/* Decorative Glow */}

            <div
              className="
                absolute
                -right-16
                -top-16
                w-40
                h-40
                rounded-full
                bg-amber-500/[0.08]
                blur-3xl
              "
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    border
                    border-amber-500/30
                    bg-amber-500/10
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    text-amber-400
                    font-bold
                  "
                >
                  ✦
                </div>

                <div>
                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-amber-500
                      font-bold
                    "
                  >
                    My Vision
                  </span>

                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-stone-100
                    "
                  >
                    Career Objective
                  </h3>
                </div>
              </div>

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-8
                  text-stone-300
                "
              >
                I am a quick learner and highly adaptable professional, always
                eager to embrace new challenges and acquire knowledge. With a
                strong foundation in front-end development, I have crafted
                visually appealing and intuitive web applications that highlight
                my technical expertise.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  leading-8
                  text-stone-400
                "
              >
                My passion extends to both front-end and full-stack
                development as I continue to deepen my backend knowledge and
                explore modern development technologies to build efficient,
                scalable and meaningful digital products.
              </p>
            </div>
          </motion.div>

          {/* Personal Information */}

          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -5,
            }}
            className="
              lg:col-span-5
              rounded-3xl
              border
              border-white/[0.08]
              bg-[#101010]/60
              backdrop-blur-xl
              p-6
              sm:p-8
              shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
              hover:border-amber-500/40
              hover:bg-[#101010]/80
              transition-all
              duration-300
            "
          >
            <div className="flex items-center justify-between mb-7">
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-stone-100
                "
              >
                Personal Info
              </h3>

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_12px_rgba(52,211,153,0.8)]
                "
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {personalInfo.map((info, index) => {
                const Icon = info.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 4,
                    }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="
                        w-10
                        h-10
                        shrink-0
                        rounded-xl
                        bg-white/[0.03]
                        backdrop-blur-md
                        border
                        border-white/[0.08]
                        flex
                        items-center
                        justify-center
                        text-amber-400
                      "
                    >
                      <Icon />
                    </div>

                    <div className="min-w-0">
                      <span
                        className="
                          block
                          text-[10px]
                          uppercase
                          tracking-widest
                          text-stone-500
                          font-bold
                          mb-1
                        "
                      >
                        {info.label}
                      </span>

                      <span
                        className="
                          block
                          text-xs
                          sm:text-sm
                          font-semibold
                          text-stone-200
                          break-all
                        "
                      >
                        {info.value}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* ===================================================
            FOCUS AREAS (GLASS PILLS)
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            rounded-3xl
            border
            border-white/[0.08]
            bg-[#101010]/60
            backdrop-blur-xl
            p-6
            sm:p-8
            mb-10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
            hover:border-amber-500/30
            hover:bg-[#101010]/80
            transition-all
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="
                h-8
                w-1
                rounded-full
                bg-amber-400
              "
            />

            <h3
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-stone-100
              "
            >
              Areas of Focus
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {focusAreas.map((area, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                className="
                  px-4
                  py-2
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  backdrop-blur-md
                  text-xs
                  sm:text-sm
                  font-medium
                  text-stone-300
                  hover:text-amber-300
                  hover:border-amber-500/40
                  hover:bg-amber-500/10
                  transition-all
                  cursor-default
                  shadow-sm
                "
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            TECHNOLOGY SECTION (GLASS CONTAINER)
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/[0.08]
            bg-[#090909]/70
            backdrop-blur-2xl
            shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
            p-5
            sm:p-8
            lg:p-10
          "
        >
          {/* Background Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              pointer-events-none
              bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />

          {/* Section Heading */}

          <div className="relative z-10 text-center mb-8">
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1
                rounded-full
                border
                border-amber-500/30
                bg-amber-500/10
                backdrop-blur-md
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.2em]
                text-amber-400
                font-bold
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              My Arsenal
            </span>

            <h3
              className="
                mt-4
                text-2xl
                sm:text-4xl
                lg:text-5xl
                font-black
                text-stone-100
              "
            >
              Core{" "}
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
                Technologies
              </span>
            </h3>

            <p
              className="
                mt-3
                text-xs
                sm:text-sm
                text-stone-400
                max-w-xl
                mx-auto
              "
            >
              Technologies and tools I use to transform ideas into modern,
              scalable and production-ready applications.
            </p>
          </div>

          {/* =================================================
              CATEGORY TABS (GLASS BUTTONS)
          ================================================== */}

          <div
            className="
              relative
              z-10
              flex
              flex-wrap
              justify-center
              gap-2
              sm:gap-3
              mb-10
            "
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className={`
                    relative
                    px-4
                    sm:px-6
                    py-2.5
                    rounded-full
                    text-xs
                    sm:text-sm
                    font-semibold
                    transition-all
                    duration-300
                    border
                    backdrop-blur-md
                    ${
                      isActive
                        ? "text-black border-amber-300 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.35)]"
                        : "text-stone-400 border-white/[0.08] bg-white/[0.03] hover:text-amber-300 hover:border-amber-500/30 hover:bg-amber-500/10"
                    }
                  `}
                >
                  {category}
                </motion.button>
              );
            })}
          </div>

          {/* =================================================
              TECHNOLOGY CARDS (GLASS SPHERES)
          ================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                z-10
                flex
                flex-wrap
                justify-center
                gap-x-5
                sm:gap-x-8
                gap-y-8
              "
            >
              {technologyCategories[activeCategory].map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                      type: "spring",
                      stiffness: 150,
                      damping: 14,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      group
                      flex
                      flex-col
                      items-center
                      w-[85px]
                      sm:w-[100px]
                      cursor-pointer
                    "
                  >
                    {/* Icon Circle */}

                    <div
                      className="
                        relative
                        w-[74px]
                        h-[74px]
                        sm:w-[84px]
                        sm:h-[84px]
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-white/[0.03]
                        backdrop-blur-md
                        border
                        border-white/[0.1]
                        shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                        transition-all
                        duration-500
                        group-hover:border-amber-400/80
                        group-hover:bg-amber-500/10
                        group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]
                      "
                    >
                      {/* Outer Gold Ring */}

                      <div
                        className="
                          absolute
                          inset-[-5px]
                          rounded-full
                          border
                          border-transparent
                          group-hover:border-amber-500/30
                          transition-all
                          duration-500
                        "
                      />

                      {/* Inner Glow */}

                      <div
                        className="
                          absolute
                          inset-3
                          rounded-full
                          bg-amber-500/[0.02]
                          group-hover:bg-amber-500/15
                          blur-md
                          transition-all
                          duration-500
                        "
                      />

                      <Icon
                        className={`
                          relative
                          z-10
                          text-3xl
                          sm:text-4xl
                          ${tech.color}
                          transition-all
                          duration-500
                          group-hover:scale-110
                        `}
                      />
                    </div>

                    {/* Technology Name */}

                    <span
                      className="
                        mt-3
                        text-[11px]
                        sm:text-xs
                        text-stone-400
                        group-hover:text-amber-300
                        font-medium
                        text-center
                        transition-colors
                        duration-300
                        whitespace-nowrap
                      "
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Accent */}

          <div
            className="
              relative
              z-10
              mt-10
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-amber-500/30
              to-transparent
            "
          />

          <p
            className="
              relative
              z-10
              text-center
              mt-5
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              text-stone-500
            "
          >
            Always Learning • Always Building • Always Improving
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;