import React from "react";

const ProjectCard = ({ project }) => {
  const techStack = Array.isArray(project?.tech) ? project.tech : [];

  return (
    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      {/* Image */}
      {project.image && (
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
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
    </div>
  );
};

export default ProjectCard;
