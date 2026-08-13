import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import certificateImg from "../../../../public/certificate.jpg";

const EduNexp = () => {
  // Framer motion variants for stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="eduEx"
      className="relative bg-[#0a0a0a] text-stone-200 py-20 px-6 lg:px-20 overflow-hidden font-sans"
    >
      {/* Background Soft Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wider text-stone-100 uppercase">
            EDUCATION &{" "}
            <span className="text-amber-400 relative inline-block">
              EXPERIENCE
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-amber-400/80 rounded-full origin-left"
              />
            </span>
          </h2>
        </motion.div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* ---------------- EDUCATION COLUMN ---------------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-10 flex items-center gap-3">
              <FaGraduationCap className="text-amber-400" />
              Education
            </h3>

            <div className="relative border-l border-stone-800 ml-3 pl-8 sm:pl-10 space-y-12">
              
              {/* Item 1: B.Sc */}
              <motion.div variants={itemVariants} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[39px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#0a0a0a] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)] transition-all duration-300" />

                {/* Date Pill */}
                <span className="inline-block px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/90 text-stone-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
                  2022 - Present
                </span>

                <h4 className="text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors duration-300">
                  B.Sc (Hons.) in Computer Science & Engineering
                </h4>

                <a
                  href="https://www.diit.edu.bd/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold text-base sm:text-lg mt-1 mb-3 transition-colors"
                >
                  Daffodil Institute of IT
                  <FaExternalLinkAlt className="text-xs opacity-70" />
                </a>

                <p className="text-stone-400 text-sm sm:text-base leading-relaxed text-justify">
                  Mastering algorithms, data structures, software architecture, and computer systems. Building a strong foundation in both theory and practice while developing the skills to design creative, efficient solutions to complex computing challenges.
                </p>
              </motion.div>

              {/* Item 2: HSC */}
              <motion.div variants={itemVariants} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[39px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-stone-600 border-4 border-[#0a0a0a] group-hover:bg-amber-400 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)] transition-all duration-300" />

                {/* Date Pill */}
                <span className="inline-block px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/90 text-stone-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
                  2019 - 2021
                </span>

                <h4 className="text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors duration-300">
                  Higher Secondary Certificate (HSC)
                </h4>

                <h5 className="text-amber-400 font-semibold text-base sm:text-lg mt-1 mb-3">
                  Ideal Commerce College
                </h5>

                <p className="text-stone-400 text-sm sm:text-base leading-relaxed text-justify">
                  I explored advanced subjects in physics, chemistry, biology, and mathematics, gaining a deep understanding of both theoretical principles and practical applications. This solid foundation equipped me for pursuing higher studies in diverse fields like engineering, medicine, and technology.
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* ---------------- EXPERIENCE COLUMN ---------------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-10 flex items-center gap-3">
              <FaAward className="text-amber-400" />
              Experience
            </h3>

            <div className="relative border-l border-stone-800 ml-3 pl-8 sm:pl-10 space-y-12">
              
              {/* Item 1: Complete Web Development */}
              <motion.div variants={itemVariants} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[39px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#0a0a0a] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)] transition-all duration-300" />

                {/* Date Pill */}
                <span className="inline-block px-4 py-1.5 rounded-full border border-stone-800 bg-stone-900/90 text-stone-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
                  July, 2024 - December, 2024
                </span>

                <h4 className="text-xl sm:text-2xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors duration-300">
                  Complete Web Development
                </h4>

                <a
                  href="https://www.programming-hero.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold text-base sm:text-lg mt-1 mb-3 transition-colors"
                >
                  Programming Hero
                  <FaExternalLinkAlt className="text-xs opacity-70" />
                </a>

                <p className="text-stone-400 text-sm sm:text-base leading-relaxed text-justify mb-6">
                  I completed the Complete Web Development course from Programming Hero, gaining hands-on experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB. The course covered both front-end and back-end development, along with real-world project building. This training strengthened my skills to create fully functional and responsive web applications.
                </p>

                {/* View Certificate Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    document.getElementById("certificate").showModal()
                  }
                  className="
                    px-6
                    py-2.5
                    rounded-full
                    border
                    border-amber-400/80
                    text-amber-400
                    hover:bg-amber-400
                    hover:text-black
                    font-semibold
                    text-sm
                    sm:text-base
                    transition-all
                    duration-300
                    shadow-[0_0_15px_rgba(245,158,11,0.1)]
                    hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]
                  "
                >
                  View Certificate_
                </motion.button>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= CERTIFICATE MODAL ================= */}
      <dialog
        id="certificate"
        className="modal bg-black/80 backdrop-blur-md p-4 transition-all"
      >
        <div className="modal-box w-11/12 max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-6 relative shadow-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-stone-400 hover:text-white">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold text-amber-400 mb-4">
            Course Completion Certificate
          </h3>
          <div className="overflow-hidden rounded-xl border border-stone-800">
            <img
              src={certificateImg}
              alt="Programming Hero Certificate"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default EduNexp;