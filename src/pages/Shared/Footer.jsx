import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0a0310]">
      <h3 className="text-3xl lg:text-5xl font-black text-white text-center pt-6">
        &lt;Ta<span className="text-[#6f139b]">Sin</span>/&gt;
      </h3>
      <h3 className="font-bold text-white text-center mt-5">Lemme contact us</h3>
      <div className="flex flex-row justify-center items-center text-white pt-10 gap-6">
        <a
          className="text-4xl"
          href="https://www.facebook.com/Mr.Tasin.007"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          className="text-4xl"
          href="https://github.com/FrontFury"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="text-4xl"
          href="https://www.linkedin.com/in/estiak-ahamed-tasin/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-4xl"
          href="https://wa.me/01909855135"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p className=" text-white text-xs md:text-base py-5 text-center">
        Copyright © {new Date().getFullYear()} - All right reserved by Estiak
        Ahamed Tasin
      </p>
    </div>
  );
};

export default Footer;
