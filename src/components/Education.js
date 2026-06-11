import React from "react";

export default function Education() {
  const educationList = [
    {
      degree: "M.Sc Computer Science",
      institution: "Sri Sankara Arts and Science College",
      period: "2026",
      cgpa: "CGPA - 8.2",
      description: "Post-graduate studies specializing in advanced computer science methodologies, algorithms, and software engineering. Focused research on web technologies and user experience."
    },
    {
      degree: "B.Sc Computer Science",
      institution: "Sri Sankara Arts and Science College",
      period: "2024",
      cgpa: "CGPA - 7.3",
      description: "Undergraduate curriculum building foundational concepts in programming languages, data structures, databases, and general computer science theory."
    }
  ];

  return (
    <section className="bg-surface py-20 px-6 md:px-20 border-b border-slate-100" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight">
            Academic Background
          </h2>
          <div className="h-1 w-20 bg-accent mt-2 rounded mx-auto"></div>
          <p className="pt-4 text-textMuted text-base max-w-xl mx-auto font-light">
            My academic path in Computer Science has provided a strong theoretical foundation to back my practical development skills.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-8 space-y-12">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Indicator Dot */}
              <div className="timeline-dot group-hover:bg-primary transition-colors duration-200"></div>

              {/* Education Content Box */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/5 px-2.5 py-1 rounded-full">
                      {edu.period}
                    </span>
                    <h3 className="font-outfit font-extrabold text-xl md:text-2xl text-textMain mt-3 leading-tight">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>

                <h4 className="font-semibold text-textMain/90 text-sm md:text-base mb-3 flex items-center">
                  <svg className="w-5 h-5 text-textMuted mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {edu.institution}
                </h4>

                <p className="text-textMuted text-sm leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
