import React from "react";
import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";

import { MdOutlineWeb } from "react-icons/md";

import { HiUserGroup } from "react-icons/hi";

export default function Skills() {
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
        "CRUD operations"
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
      className='bg-white py-20 px-6 md:px-20 border-b border-slate-100'
      id='skills'>
      <div className='max-w-6xl mx-auto mb-12 text-center md:text-left'>
        <h2 className='font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight'>
          Skills
        </h2>
        <div className='h-1 w-20 bg-accent mt-3 rounded'></div>
        <p className='mt-4 text-textMuted text-base max-w-3xl font-light'>
          A snapshot of the technologies, tools, and soft skills I use to build
          modern, responsive web applications and collaborate effectively.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
                <div className='bg-white border border-slate-200/60 p-3 rounded-xl shadow-sm'>
                  <Icon className='w-6 h-6 text-accent' />
                </div>

                <h3 className='font-outfit font-bold text-lg text-textMain'>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className='flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1.5 text-sm rounded-lg bg-white border border-slate-200 text-textMain shadow-sm transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-md'>
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
