import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";
import cvFile from "../assets/cv/CV-Sothearith.pdf";

const roles = [
  "Backend Developer",
  "Spring Boot Learner",
];

const typingSpeed = 120;
const deleteSpeed = 60;
const holdTime = 1500;

const Section = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), holdTime);
        }
      } else {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen bg-[#0b0d1c] flex items-center pt-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <p className="text-purple-400 mb-3">I'm Sothearith</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="text-purple-400 animate-pulse ml-1">|</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-lg">
            I’m passionate about learning new things and growing in web development .
             I enjoy building modern websites and improving my skills through real projects.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 flex-wrap">
            {/* Download CV */}
            <Motion.a
              href={cvFile}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg"
            >
              Download CV
            </Motion.a>

            {/* View Projects */}
            <Motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500/10"
            >
              View Projects
            </Motion.a>
          </div>

          {/* STATS */}
          <div className="flex gap-6 mt-10 flex-wrap">
            {[
              { value: "Year 2+", label: "RUPP" },
              { value: "8+", label: "Projects" },
              { value: "15K+", label: "Happy Clients" },
            ].map((item) => (
              <Motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center"
              >
                <h2 className="text-purple-400 text-2xl font-bold">
                  {item.value}
                </h2>
                <p className="text-sm text-gray-400">{item.label}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* RIGHT IMAGE */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-purple-500/40"></div>
            <img
              src={profileImg}
              alt="profile"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-500"
            />
          </div>
        </Motion.div>

      </div>
    </section>
  );  
};

export default Section;
