import React, { useState } from "react";
import {
  Home,
  User,
  ClipboardList,
  Briefcase,
  Code,
  Layers,
  MessageSquare,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      path: "/",
    },
    {
      id: "about",
      label: "About",
      icon: User,
      path: "/about",
    },
    {
      id: "process",
      label: "Process",
      icon: ClipboardList,
      path: "/process",
    },
    {
      id: "services",
      label: "Services",
      icon: Briefcase,
      path: "/services",
    },
    {
      id: "skills",
      label: "Skills",
      icon: Code,
      path: "/skills",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: Layers,
      path: "/portfolio",
    },
    {
      id: "testimonials",
      label: "Reviews",
      icon: MessageSquare,
      path: "/testimonials",
    },
    {
      id: "contact",
      label: "Contact",
      icon: Mail,
      path: "/contact",
    },
  ];

  return (
    <>
      {/* =====================================================
          MOBILE HAMBURGER BUTTON
      ====================================================== */}

      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Navigation Menu"
          className="
            p-3
            bg-[#18181B]/90
            backdrop-blur-md
            border
            border-zinc-800
            text-zinc-300
            hover:text-white
            rounded-xl
            shadow-xl
            transition-all
            duration-200
            active:scale-95
          "
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#EAB308]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
            lg:hidden
          "
        />
      )}

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}

      <aside
        className={`
          fixed
          z-50
          transition-all
          duration-300
          ease-in-out

          top-16
          right-4
          left-4

          flex
          flex-col
          p-3

          bg-[#18181B]/95
          backdrop-blur-xl
          border
          border-zinc-800
          rounded-2xl
          shadow-2xl

          gap-2
          max-h-[80vh]
          overflow-y-auto

          lg:left-auto
          lg:top-1/2
          lg:right-6
          lg:-translate-y-1/2
          lg:w-auto
          lg:items-end
          lg:gap-3
          lg:bg-transparent
          lg:border-none
          lg:p-0
          lg:shadow-none
          lg:backdrop-blur-none
          lg:overflow-visible

          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none lg:opacity-100 lg:scale-100 lg:pointer-events-auto"
          }
        `}
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                group
                relative
                flex
                items-center
                transition-all
                duration-300
                ease-in-out
                w-full
                lg:w-auto

                ${
                  isActive
                    ? `
                      bg-[#EAB308]
                      text-black
                      font-semibold
                      px-4
                      py-3
                      rounded-xl
                      lg:rounded-2xl
                      shadow-lg
                      shadow-yellow-500/10
                      justify-start
                      lg:justify-center
                    `
                    : `
                      text-zinc-400
                      hover:text-white
                      hover:bg-[#27272A]/80
                      p-3
                      rounded-xl

                      lg:bg-[#18181B]/80
                      lg:border
                      lg:border-zinc-800/80
                      lg:backdrop-blur-md

                      justify-start
                      lg:justify-center
                    `
                }
              `}
            >
              {({ isActive }) => (
                <>
                  {/* Icon */}
                  <Icon
                    className={`
                      w-5
                      h-5
                      shrink-0

                      ${isActive ? "stroke-[2.5]" : "stroke-2"}
                    `}
                  />

                  {/* =================================================
                      RESPONSIVE LABEL
                  ================================================== */}

                  <span
                    className={`
                      ml-3
                      text-sm
                      whitespace-nowrap
                      tracking-wide

                      ${isActive ? "inline-block" : "inline-block lg:hidden"}
                    `}
                  >
                    {item.label}
                  </span>

                  {/* =================================================
                      DESKTOP HOVER TOOLTIP
                  ================================================== */}

                  {!isActive && (
                    <span
                      className="
                        hidden
                        lg:block
                        absolute
                        right-14
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-200
                        pointer-events-none
                        bg-[#18181B]
                        text-zinc-200
                        text-xs
                        py-1.5
                        px-3
                        rounded-lg
                        border
                        border-zinc-800
                        whitespace-nowrap
                        shadow-xl
                      "
                    >
                      {item.label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </aside>
    </>
  );
};

export default Navbar;
