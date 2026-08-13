import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaQuoteRight, FaStar, FaComments, FaCode, FaGlobeAmericas } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiGit,
  SiExpress,
} from "react-icons/si";

// =====================================================
// ENHANCED CLIENT REVIEWS DATA (WITH METADATA TAGS)
// =====================================================
const reviewsData = [
  {
    id: 1,
    name: "Alex Mercer",
    role: "Product Manager, Apex Soft",
    country: "USA 🇺🇸",
    projectType: "Enterprise Web App",
    techStack: ["React", "TypeScript", "Tailwind"],
    review:
      "Estiak is a fantastic developer. He delivered our project on time and exceeded our expectations with his attention to detail and clean code architecture.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    id: 2,
    name: "Tanvir Hossain",
    role: "CEO, Nexa Tech BD",
    country: "Bangladesh 🇧🇩",
    projectType: "College Management System",
    techStack: ["React", "Node.js", "MongoDB"],
    review:
      "খুবই প্রফেশনাল এবং দক্ষ একজন ডেভেলপার! আমাদের কলেজের ম্যানেজমেন্ট সিস্টেম প্রজেক্টটি খুব নিখুঁতভাবে শেষ করেছেন। উনার সাথে কাজ করে আমরা অত্যন্ত সন্তুষ্ট।",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Founder, TechWave Solutions",
    country: "UK 🇬🇧",
    projectType: "SaaS Dashboard UI",
    techStack: ["Next.js", "Framer Motion"],
    review:
      "Working with Estiak was an absolute pleasure. His frontend skills are top-notch, and he brings a great level of creativity and problem-solving to the table.",
    avatar: "https://i.pravatar.cc/150?img=20",
    rating: 5,
  },
  {
    id: 4,
    name: "Mahmudul Hasan",
    role: "Managing Director, Ideal Edu",
    country: "Bangladesh 🇧🇩",
    projectType: "EdTech Platform",
    techStack: ["React", "Tailwind", "Express"],
    review:
      "আমাদের রিকোয়ারমেন্টগুলো খুব দ্রুত বুঝে কোড করেছেন। ওয়েবসাইট লোডিং স্পিড এবং অ্যানিমেশন দুইটাই চমৎকার হয়েছে। ভবিষ্যতে আবার উনার সাথে কাজ করব।",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
  },
  {
    id: 5,
    name: "Michael Chang",
    role: "CTO, Innovate AI",
    country: "Canada 🇨🇦",
    projectType: "AI Platform Frontend",
    techStack: ["React", "TypeScript", "Tailwind"],
    review:
      "The quality of work and the speed of delivery were outstanding. Estiak transformed our messy design into a sleek, fast, and responsive user interface.",
    avatar: "https://i.pravatar.cc/150?img=60",
    rating: 5,
  },
  {
    id: 6,
    name: "Sultana Razia",
    role: "Founder, CraftBD",
    country: "Bangladesh 🇧🇩",
    projectType: "E-Commerce System",
    techStack: ["Node.js", "MongoDB", "React"],
    review:
      "ডিজাইন সেন্স এবং অ্যানিমেশন স্কিল অসাধারণ! আমাদের ই-কমার্স প্ল্যাটফর্মের UI আগের চেয়ে অনেক বেশি ইউজার ফ্রেন্ডলি এবং আকর্ষণীয় হয়েছে।",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
  {
    id: 7,
    name: "David Miller",
    role: "Operations Lead, GrowthX",
    country: "Australia 🇦🇺",
    projectType: "Web App Micro-Animations",
    techStack: ["Framer Motion", "React"],
    review:
      "Estiak builds interfaces that feel truly alive. The micro-animations and seamless React integration made a huge difference in our app's user retention.",
    avatar: "https://i.pravatar.cc/150?img=53",
    rating: 5,
  },
  {
    id: 8,
    name: "Anisur Rahman",
    role: "Co-Founder, RiseUp",
    country: "Bangladesh 🇧🇩",
    projectType: "Custom ERP Portal",
    techStack: ["Fullstack MERN"],
    review:
      "টাইমলাইনের মধ্যে প্রজেক্ট সাবমিট করেছেন। উনার কোডিং কোয়ালিটি অত্যন্ত ক্লিন ও মেইনটেইনেবল। যেকোনো ফিডব্যাক খুব দ্রুত ফিক্স করে দেন।",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 5,
  },
  {
    id: 9,
    name: "Emma Watson",
    role: "Design Lead, Studio Creative",
    country: "Germany 🇩🇪",
    projectType: "Figma to React Conversion",
    techStack: ["Figma", "React", "Tailwind"],
    review:
      "Super responsive and highly skilled developer. He paid close attention to every pixel in our Figma design and turned it into perfect React code.",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
  },
  {
    id: 10,
    name: "Sabbir Ahmed",
    role: "Lead Architect, CloudBD",
    country: "Bangladesh 🇧🇩",
    projectType: "Fullstack SaaS App",
    techStack: ["MongoDB", "Express", "React"],
    review:
      "ফুলস্ট্যাক ডেভেলপমেন্টে উনার দক্ষতা দারুণ! MongoDB, Node.js এবং React দিয়ে আমাদের ব্যাকএন্ড ও ফ্রন্টএন্ড খুব চমৎকারভাবে কানেক্ট করেছেন।",
    avatar: "https://i.pravatar.cc/150?img=59",
    rating: 5,
  },
];

const duplicatedReviews = [...reviewsData, ...reviewsData];

// Floating tech stack icon positioning
const techIcons = [
  { Icon: SiReact, top: "10%", left: "7%", size: 42, color: "#61DAFB", delay: 0 },
  { Icon: SiNodedotjs, top: "20%", right: "8%", size: 45, color: "#339933", delay: 1 },
  { Icon: SiMongodb, top: "72%", left: "5%", size: 40, color: "#47A248", delay: 2 },
  { Icon: SiTailwindcss, top: "80%", right: "7%", size: 42, color: "#06B6D4", delay: 1.5 },
  { Icon: SiJavascript, top: "36%", left: "3%", size: 36, color: "#F7DF1E", delay: 0.5 },
  { Icon: SiTypescript, top: "42%", right: "4%", size: 38, color: "#3178C6", delay: 2.5 },
  { Icon: SiNextdotjs, top: "85%", left: "16%", size: 40, color: "#FFFFFF", delay: 3 },
  { Icon: SiFigma, top: "14%", right: "20%", size: 36, color: "#F24E1E", delay: 1.8 },
  { Icon: SiGit, top: "84%", right: "20%", size: 36, color: "#F05032", delay: 0.8 },
  { Icon: SiExpress, top: "8%", left: "22%", size: 38, color: "#E0E0E0", delay: 2.2 },
];

// =====================================================
// INDIVIDUAL REVIEW CARD COMPONENT
// =====================================================
const ReviewCard = ({ review }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="
        w-[360px]
        sm:w-[440px]
        shrink-0
        bg-[#121316]/90
        backdrop-blur-xl
        border
        border-stone-800/90
        hover:border-amber-500/50
        rounded-2xl
        p-6
        sm:p-7
        flex
        flex-col
        justify-between
        relative
        group
        transition-all
        duration-300
        shadow-[0_10px_30px_rgba(0,0,0,0.8)]
        hover:shadow-[0_15px_35px_rgba(245,158,11,0.15)]
      "
    >
      {/* GLOW OVERLAY */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* QUOTE ICON */}
      <FaQuoteRight className="absolute top-6 right-6 text-stone-800/80 group-hover:text-amber-400/40 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />

      <div className="space-y-4 relative z-10">
        {/* RATING & COUNTRY TAG */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-xs drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            ))}
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-900 border border-stone-800 text-[11px] font-medium text-stone-400">
            <FaGlobeAmericas className="text-amber-400/80 text-[10px]" />
            {review.country}
          </span>
        </div>

        {/* PROJECT TYPE BADGE */}
        <div className="inline-block px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
          {review.projectType}
        </div>

        {/* REVIEW TEXT */}
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed line-clamp-4 font-normal">
          "{review.review}"
        </p>

        {/* TECH STACK TAGS */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
            <FaCode className="text-stone-600" /> Stack:
          </span>
          {review.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-stone-900/80 text-stone-400 text-[11px] border border-stone-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* USER INFO */}
      <div className="flex items-center gap-4 pt-5 mt-5 border-t border-stone-800/80 relative z-10">
        <div className="relative">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/70 p-0.5 bg-stone-900 shadow-md group-hover:border-amber-400 transition-colors duration-300">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div>
          <h4 className="text-stone-100 font-bold text-sm sm:text-base group-hover:text-amber-400 transition-colors duration-300">
            {review.name}
          </h4>
          <p className="text-stone-400 text-xs font-medium">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

// =====================================================
// MAIN REVIEWS SECTION
// =====================================================
const Reviews = () => {
  return (
    <section
      id="reviews"
      className="
        relative
        w-full
        min-h-screen
        bg-transparent
        text-stone-200
        py-24
        flex
        flex-col
        justify-center
        overflow-hidden
        font-sans
      "
    >
      {/* 1. DYNAMIC FLOATING TECH STACK ICONS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {techIcons.map((item, idx) => {
          const TechIcon = item.Icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 0, opacity: 0.15 }}
              animate={{
                y: [-15, 15, -15],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 6 + (idx % 4),
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
              className="p-3 rounded-2xl bg-stone-900/40 border border-stone-800/50 backdrop-blur-md shadow-2xl"
            >
              <TechIcon
                size={item.size}
                color={item.color}
                style={{ filter: `drop-shadow(0 0 12px ${item.color}66)` }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* 2. BACKGROUND AMBIENT GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-amber-500/15 rounded-full blur-[180px] pointer-events-none z-0"
      />

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
        >
          <FaComments className="text-amber-400 animate-pulse" />
          Testimonials & Feedback
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            text-4xl
            sm:text-6xl
            font-black
            tracking-wider
            text-stone-100
            uppercase
            block
          "
        >
          WHAT <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]">PEOPLE SAY</span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1.5 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-5 rounded-full shadow-[0_0_16px_rgba(251,191,36,0.8)]"
        />
      </div>

      {/* MARQUEE CAROUSEL CONTAINER */}
      <div className="relative w-full overflow-hidden flex py-8 group z-10">
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-60 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-60 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />

        <div className="flex gap-8 pr-8 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;