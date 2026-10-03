import React from "react";
import { motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiRender,
  SiSocketdotio,
} from "react-icons/si";

import { TbBrandSocketIo } from "react-icons/tb";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCode,
  FaTools,
  FaGithub,
} from "react-icons/fa";

import { MdOutlineWeb } from "react-icons/md";

import { HiUserGroup } from "react-icons/hi";

export default function Skills() {
  const techStack = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: FaServer, color: "#ffffff" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Socket.IO", icon: TbBrandSocketIo, color: "#ffffff" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#ffffff" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Render", icon: SiRender, color: "#46E3B7" },
  ];

  const skillGroups = [
    {
      category: "Front-end",
      icon: FaLaptopCode,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Bootstrap",
        "Tailwind CSS",
        "React.js",
        "Responsive Web Design",
      ],
    },
    {
      category: "Backend",
      icon: FaServer,
      skills: ["Node.js", "Express.js", "REST API", "JWT Authentication"],
    },
    {
      category: "Web Concepts",
      icon: MdOutlineWeb,
      skills: [
        "DOM Manipulation",
        "React Hooks",
        "Component Architecture",
        "JSON",
        "State Management",
        "Params",
        "Routing",
        "CRUD operations",
      ],
    },
    {
      category: "Database",
      icon: FaDatabase,
      skills: ["MongoDB", "JSON Server DB", "Mongoose"],
    },
    {
      category: "Programming Languages-Basics",
      icon: FaCode,
      skills: ["C++", "Java", "Python"],
    },
    {
      category: "Tools & Platforms",
      icon: FaTools,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Thunderclient",
        "Chrome Dev Tools",
        "Postman",
        "Render",
        "MongoDB Atlas",
        "MS Excel",
        "Office Tools",
      ],
    },
    {
      category: "Soft Skills",
      icon: HiUserGroup,
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Adaptability",
      ],
    },
  ];
  return (
    <section
      className=' bg-secondary py-20 px-6 md:px-20 border-b border-slate-200'
      id='skills'>
      {/* Header */}
      <div className='flex flex-col max-w-6xl mx-auto mb-4 justify-items-center items-center md:text-left'>
        <h2 className='font-outfit font-extrabold text-3xl md:text-4xl text-primary tracking-tight text-center'>
          Skills
        </h2>
        <div className='h-1 w-20 bg-surface mt-3 rounded'></div>
        <p className='mt-6 text-sub-main max-w-3xl'>
          A snapshot of the technologies, tools, and soft skills I use to build
          modern, responsive web applications and collaborate effectively.
        </p>
      </div>

      {/* Tech stack icons  */}
      <div className='overflow-hidden py-6'>
        <div className='marquee'>
          {[...techStack, ...techStack].map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div key={index} className='flex items-center gap-2 px-6'>
                <Icon size={34} color={tech.color} />

                <span className='text-sm font-medium'>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Groups  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3'>
        {skillGroups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={idx}
              className='bg-surface border border-slate-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300'
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              {/* Card Header */}
              <div className='flex items-center gap-3 mb-5'>
                <div className='bg-accent-main-main border border-slate-200/60 p-3 rounded-xl shadow-sm'>
                  <Icon className='w-6 h-6 text-primary' />
                </div>

                <h3 className='font-outfit font-bold text-lg text-accent-main-main'>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className='flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1.5 text-sm rounded-lg bg-surface-secondary border border-slate-200 text-accent-main-light shadow-sm transition-all duration-200 hover:border-accent hover-text-accent-main-main cursor-pointer hover:shadow-md'>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
