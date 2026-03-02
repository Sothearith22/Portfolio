import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b0d1c] via-[#111827] to-[#0b0d1c] py-24 px-6 flex items-center"
    >
      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="p-1 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500">
            <img
              src={profileImg}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-3xl bg-[#0b0d1c]"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m <span className="text-white font-semibold">Sothearith</span>, a
            passionate <span className="text-purple-400">Backend Developer</span>{" "}
            who enjoys building secure, scalable, and efficient web
            applications.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I work mainly with{" "}
            <span className="text-white font-medium">
              Laravel, MySQL, REST APIs
            </span>{" "}
            and also collaborate with frontend technologies like{" "}
            <span className="text-white font-medium">
              React & Tailwind CSS
            </span>.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            My goal is to continuously improve my skills, work on real-world
            projects, and grow into a professional software engineer delivering
            high-quality digital solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
            {[
              { value: "2+", label: "Years Learning" },
              { value: "8+", label: "Projects" },
              { value: "5+", label: "Technologies" },
              { value: "100%", label: "Commitment" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#111827]/80 backdrop-blur border border-white/10 rounded-xl p-5 text-center hover:border-purple-500"
              >
                <h3 className="text-2xl font-bold text-purple-400">
                  {item.value}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;