import React from "react";
import { motion as Motion } from "framer-motion";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0b0d1c] py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Technologies and tools I work with
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="space-y-14">
          {skills.map((group, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-purple-300 mb-6">
                {group.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <Motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="relative group cursor-pointer
                      bg-white/5 border border-white/10 backdrop-blur-xl
                      rounded-xl p-5 hover:shadow-purple-500/20
                      hover:-translate-y-1 transition"
                    >
                      {/* TOOLTIP */}
                      <div
                        className="absolute -top-8 left-1/2 -translate-x-1/2
                        bg-gray-900 text-white text-xs px-3 py-1 rounded-md
                        opacity-0 group-hover:opacity-100 transition pointer-events-none"
                      >
                        {skill.name} · {skill.level}%
                      </div>

                      <div className="flex items-center gap-4">
                        <Icon className={`text-4xl ${skill.color}`} />

                        <div className="flex-1">
                          <p className="font-medium text-white">
                            {skill.name}
                          </p>

                          {/* PROGRESS BAR */}
                          <div className="w-full bg-white/10 rounded-full h-2 mt-2 overflow-hidden">
                            <Motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8 }}
                              className="h-2 rounded-full
                              bg-gradient-to-r from-purple-500 to-indigo-500"
                            />
                          </div>
                        </div>
                      </div>
                    </Motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
