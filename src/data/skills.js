import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaVuejs,
    FaPhp,
    FaLaravel,
    FaGitAlt,
    FaDocker,
    FaJava,
    FaPython
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiMysql,
    SiPostgresql,
    SiSpring,
    SiXampp,
    SiGithub,
    SiC,
    SiCplusplus,
} from "react-icons/si";

const skills = [
    {
        title: "Programming",
        skills: [
            { name: "C++", icon: SiCplusplus, level: 75, color: "text-sky-400" },
            { name: "C", icon: SiC, level: 70, color: "text-blue-500" },
            { name: "Java", icon: FaJava, level: 70, color: "text-orange-500" },
            { name: "Python", icon: FaPython, level: 55, color: "text-yellow-200" }
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: FaHtml5, level: 90, color: "text-orange-500" },
            { name: "CSS", icon: FaCss3Alt, level: 85, color: "text-blue-500" },
            { name: "Bootstrap", icon: FaBootstrap, level: 80, color: "text-purple-600" },
            { name: "Tailwind", icon: SiTailwindcss, level: 65, color: "text-cyan-400" },
            { name: "JavaScript", icon: SiJavascript, level: 60, color: "text-yellow-400" },
            { name: "TypeScript", icon: SiTypescript, level: 60, color: "text-blue-600" },
            { name: "React", icon: FaReact, level: 60, color: "text-cyan-400" },
            { name: "Vue", icon: FaVuejs, level: 50, color: "text-green-500" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "PHP", icon: FaPhp, level: 65, color: "text-indigo-500" },
            { name: "Laravel", icon: FaLaravel, level: 60, color: "text-red-500" },
            { name: "Spring", icon: SiSpring, level: 10, color: "text-green-600" },
            { name: "MySQL", icon: SiMysql, level: 65, color: "text-blue-500" },
            { name: "PostgreSQL", icon: SiPostgresql, level: 65, color: "text-blue-400" },
            {name: "MySQL Workbench", icon: SiMysql, level: 65, color: "text-blue-600",}

        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: FaGitAlt, level: 70, color: "text-orange-600" },
            { name: "GitHub", icon: SiGithub, level: 70, color: "text-black" },
            { name: "XAMPP", icon: SiXampp, level: 85, color: "text-orange-500" },
            { name: "Docker", icon: FaDocker, level: 50, color: "text-sky-500" }
        ],
    },
];

export default skills;