import React from "react";

export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend Development",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive Web Design", "Mobile-First Design"]
    },
    {
      category: "Web Concepts & Architecture",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: ["DOM Manipulation", "React Hooks", "Component Architecture", "REST API Integration", "JSON", "Flexbox", "CSS Grid"]
    },
    {
      category: "Backend & Database",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      category: "Programming Languages",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["Python", "C++"]
    },
    {
      category: "Tools & Workflows",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "MS Excel", "Office Tools"]
    },
    {
      category: "Professional & Soft Skills",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"]
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20 border-b border-slate-100" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight">
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-accent mt-2 rounded mx-auto md:mx-0"></div>
          <p className="pt-4 text-textMuted text-base max-w-xl font-light">
            A breakdown of my frontend core competency, backend knowledge, programming languages, and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="bg-surface border border-slate-100 hover:border-slate-200/80 p-6 rounded-2xl hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white border border-slate-200/60 p-2.5 rounded-xl flex items-center justify-center shadow-sm">
                  {group.icon}
                </div>
                <h3 className="font-outfit font-bold text-lg text-textMain leading-tight">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white text-textMain shadow-sm border border-slate-200/50 hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
