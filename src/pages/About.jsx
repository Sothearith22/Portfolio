import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        scroll-mt-20
        bg-[#0b0d1c]
        py-20
        px-5
        flex
        items-center
      "
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="
                w-40 h-40
                sm:w-48 sm:h-48
                md:w-56 md:h-56
                object-cover
                rounded-xl
                border-2 border-purple-500
              "
            />
          </motion.div>

          {/* Text */}
          {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m <span className="text-white font-semibold">Sothearith</span>, a
            passionate <span className="text-purple-400">Backend Developer</span>{" "}
            who enjoys building secure, scalable, and efficient web
            applications.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I work mainly with{" "}
            <span className="text-white font-medium">
              Spring, Laravel , MySQL, REST APIs
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
      </div>
      
    </section>
    
  );
};

export default About;