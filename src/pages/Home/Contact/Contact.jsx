import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiKotlin,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // =========================
  // PERSONAL INFORMATION
  // =========================

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
      label: "Location",
      value: "Dhaka, Bangladesh",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+880 1909 855 135",
    },
  ];

  // =========================
  // FOCUS AREAS
  // =========================

  const focusAreas = [
    "Web Development",
    "Frontend Engineering",
    "UI/UX Integration",
    "App Development",
    "Mobile Engineering",
    "Full-Stack Development",
  ];

  // =========================
  // CORE TECHNOLOGIES
  // =========================

  const coreTech = [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-400",
    },
    {
      name: "JavaScript",
      icon: FaJsSquare,
      color: "text-yellow-400",
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
    },
    {
      name: "Kotlin",
      icon: SiKotlin,
      color: "text-purple-400",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "text-cyan-300",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "text-amber-400",
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "text-stone-300",
    },
  ];

  // =========================
  // FORM VALIDATION
  // =========================

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim();

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // SEND EMAIL
  // =========================

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      to: "Tasin",
      message: formData.message,
      year,
      month,
      day,
      time,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been sent successfully. I will reply soon!",
          icon: "success",
          background: "#121212",
          color: "#f5f5f4",
          confirmButtonColor: "#D4AF37",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);

        Swal.fire({
          title: "Something Went Wrong!",
          text: "Failed to send message. Please try again later.",
          icon: "error",
          background: "#121212",
          color: "#f5f5f4",
          confirmButtonColor: "#D4AF37",
        });
      });
  };

  // =========================
  // ANIMATION
  // =========================

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.08,
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#0a0a0a]
        text-stone-200
        px-4
        sm:px-8
        lg:px-12
        py-16
        lg:py-24
        font-sans
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Gold Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[10%]
            left-[15%]
            w-[300px]
            h-[300px]
            sm:w-[500px]
            sm:h-[500px]
            bg-amber-600/10
            rounded-full
            blur-[120px]
          "
        />

        {/* Secondary Gold Glow */}
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[5%]
            right-[10%]
            w-[250px]
            h-[250px]
            sm:w-[450px]
            sm:h-[450px]
            bg-yellow-700/10
            rounded-full
            blur-[120px]
          "
        />

        {/* Grid Pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-12 lg:mb-16"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-amber-950/30
              border
              border-[#D4AF37]/30
              text-[#D4AF37]
              text-xs
              sm:text-sm
              font-bold
              tracking-[0.2em]
              uppercase
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            About & Contact
          </span>

          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-black
              tracking-tight
              text-stone-100
            "
          >
            Let's{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#B8860B]
                via-[#FFD700]
                to-[#D4AF37]
              "
            >
              Connect
            </span>
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-4
              text-sm
              sm:text-base
              lg:text-lg
              text-stone-400
              leading-relaxed
            "
          >
            Have a project in mind, an opportunity to discuss, or simply want
            to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        {/* =================================================
            ABOUT + CONTACT GRID
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
            lg:gap-8
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="lg:col-span-7 space-y-6">

            {/* Personal Information */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -4,
              }}
              className="
                p-6
                sm:p-8
                rounded-3xl
                bg-stone-950/70
                backdrop-blur-xl
                border
                border-stone-800
                shadow-2xl
                hover:border-[#D4AF37]/40
                transition-all
                duration-500
              "
            >
              <div className="flex items-center justify-between mb-7">
                <div>
                  <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">
                    Personal Details
                  </span>

                  <h2 className="text-xl sm:text-2xl font-bold text-stone-100 mt-1">
                    Get to Know Me
                  </h2>
                </div>

                <div className="hidden sm:block w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  ✦
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => {
                  const Icon = info.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="
                        flex
                        items-center
                        gap-3
                        p-4
                        rounded-2xl
                        bg-[#111111]
                        border
                        border-stone-800
                        hover:border-[#D4AF37]/40
                        transition-all
                      "
                    >
                      <div
                        className="
                          w-10
                          h-10
                          shrink-0
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          bg-amber-950/40
                          border
                          border-[#D4AF37]/25
                          text-[#D4AF37]
                        "
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                          {info.label}
                        </span>

                        <span className="block text-sm font-semibold text-stone-200 truncate">
                          {info.value}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Focus */}

            <motion.div
              variants={itemVariants}
              className="
                p-6
                sm:p-8
                rounded-3xl
                bg-stone-950/70
                backdrop-blur-xl
                border
                border-stone-800
                shadow-2xl
                hover:border-[#D4AF37]/40
                transition-all
                duration-500
              "
            >
              <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">
                What I Do
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-stone-100 mt-1 mb-5">
                Areas of Focus
              </h2>

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
                      text-xs
                      sm:text-sm
                      font-semibold
                      text-stone-300
                      bg-stone-900
                      border
                      border-stone-800
                      hover:text-[#D4AF37]
                      hover:border-[#D4AF37]/50
                      transition-all
                      cursor-default
                    "
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Core Technologies */}

            <motion.div
              variants={itemVariants}
              className="
                p-6
                sm:p-8
                rounded-3xl
                bg-stone-950/70
                backdrop-blur-xl
                border
                border-stone-800
                shadow-2xl
                hover:border-[#D4AF37]/40
                transition-all
              "
            >
              <div className="mb-7">
                <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">
                  My Toolkit
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-stone-100 mt-1">
                  Core Technologies
                </h2>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {coreTech.map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -6,
                        scale: 1.04,
                      }}
                      className="
                        min-h-[95px]
                        rounded-2xl
                        bg-[#111111]
                        border
                        border-stone-800
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        hover:border-[#D4AF37]/50
                        hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)]
                        transition-all
                      "
                    >
                      <Icon className={`text-2xl ${tech.color}`} />

                      <span className="text-[10px] sm:text-xs font-semibold text-stone-400 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE — CONTACT FORM
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="
              lg:col-span-5
              relative
              h-fit
              lg:sticky
              lg:top-24
            "
          >
            <div
              className="
                absolute
                -inset-1
                bg-gradient-to-br
                from-[#D4AF37]/20
                via-transparent
                to-amber-700/10
                rounded-[28px]
                blur-xl
                opacity-60
              "
            />

            <div
              className="
                relative
                p-6
                sm:p-8
                rounded-3xl
                bg-[#101010]/90
                backdrop-blur-2xl
                border
                border-[#D4AF37]/20
                shadow-2xl
                overflow-hidden
              "
            >
              {/* Decorative Corner */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-48
                  h-48
                  rounded-full
                  bg-[#D4AF37]/10
                  blur-3xl
                "
              />

              <div className="relative z-10">

                {/* Form Header */}

                <div className="mb-7">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-[#FFD700]
                      to-[#B8860B]
                      text-black
                      shadow-lg
                      shadow-amber-500/20
                      mb-5
                    "
                  >
                    <FaPaperPlane />
                  </div>

                  <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">
                    Send a Message
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-stone-100 mt-1">
                    Let's Talk.
                  </h2>

                  <p className="text-sm text-stone-400 mt-2 leading-relaxed">
                    Tell me about your idea, project, or opportunity. I'll get
                    back to you as soon as possible.
                  </p>
                </div>

                {/* FORM */}

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-4"
                >
                  {/* Name + Email */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-400 mb-2">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="
                          w-full
                          h-12
                          px-4
                          rounded-xl
                          bg-stone-950
                          border
                          border-stone-800
                          text-sm
                          text-stone-100
                          placeholder:text-stone-600
                          outline-none
                          focus:border-[#D4AF37]
                          focus:ring-1
                          focus:ring-[#D4AF37]/30
                          transition-all
                        "
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-400 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className="
                          w-full
                          h-12
                          px-4
                          rounded-xl
                          bg-stone-950
                          border
                          border-stone-800
                          text-sm
                          text-stone-100
                          placeholder:text-stone-600
                          outline-none
                          focus:border-[#D4AF37]
                          focus:ring-1
                          focus:ring-[#D4AF37]/30
                          transition-all
                        "
                      />
                    </div>
                  </div>

                  {/* Subject */}

                  <div>
                    <label className="block text-xs font-semibold text-stone-400 mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      className="
                        w-full
                        h-12
                        px-4
                        rounded-xl
                        bg-stone-950
                        border
                        border-stone-800
                        text-sm
                        text-stone-100
                        placeholder:text-stone-600
                        outline-none
                        focus:border-[#D4AF37]
                        focus:ring-1
                        focus:ring-[#D4AF37]/30
                        transition-all
                      "
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label className="block text-xs font-semibold text-stone-400 mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell me about your project..."
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-stone-950
                        border
                        border-stone-800
                        text-sm
                        text-stone-100
                        placeholder:text-stone-600
                        outline-none
                        resize-none
                        focus:border-[#D4AF37]
                        focus:ring-1
                        focus:ring-[#D4AF37]/30
                        transition-all
                      "
                    />
                  </div>

                  {/* Submit */}

                  <motion.button
                    type="submit"
                    disabled={!isFormValid}
                    whileHover={
                      isFormValid
                        ? {
                            scale: 1.02,
                          }
                        : {}
                    }
                    whileTap={
                      isFormValid
                        ? {
                            scale: 0.98,
                          }
                        : {}
                    }
                    className={`
                      group
                      relative
                      w-full
                      h-13
                      py-3.5
                      rounded-xl
                      font-bold
                      text-sm
                      flex
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isFormValid
                          ? "bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                          : "bg-stone-800 text-stone-500 cursor-not-allowed"
                      }
                    `}
                  >
                    {isFormValid && (
                      <motion.div
                        className="
                          absolute
                          inset-0
                          w-1/3
                          bg-white/30
                          skew-x-[-25deg]
                        "
                        initial={{
                          x: "-150%",
                        }}
                        whileHover={{
                          x: "400%",
                        }}
                        transition={{
                          duration: 0.7,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      Send Message
                    </span>

                    <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>

                {/* Social Links */}

                <div className="mt-7 pt-6 border-t border-stone-800">
                  <p className="text-xs text-stone-500 text-center mb-4">
                    Or connect with me directly
                  </p>

                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-stone-900
                        border
                        border-stone-800
                        flex
                        items-center
                        justify-center
                        text-stone-400
                        hover:text-[#D4AF37]
                        hover:border-[#D4AF37]/50
                        transition-all
                      "
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href="#"
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-stone-900
                        border
                        border-stone-800
                        flex
                        items-center
                        justify-center
                        text-stone-400
                        hover:text-[#D4AF37]
                        hover:border-[#D4AF37]/50
                        transition-all
                      "
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="mailto:tasin220116@diit.edu.bd"
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-stone-900
                        border
                        border-stone-800
                        flex
                        items-center
                        justify-center
                        text-stone-400
                        hover:text-[#D4AF37]
                        hover:border-[#D4AF37]/50
                        transition-all
                      "
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]/50
          to-transparent
        "
      />
    </section>
  );
};

export default Contact;