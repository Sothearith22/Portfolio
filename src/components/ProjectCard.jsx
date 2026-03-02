import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const techStack = Array.isArray(project?.tech) ? project.tech : [];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
    >
      {/* Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 text-sm">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm rounded-lg bg-white/10 text-white hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;