import React from "react";

export default function Certifications() {
  const certList = [
    {
      title: "(30 Days) Full Stack Development",
      issuer: "NoviTech R&D Private Limited.",
      type: "Full Stack Training",
      icon: (
        <svg
          className='w-8 h-8 text-accent'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
          />
        </svg>
      ),
    },
    {
      title: "(15 Days) Frontend Web Development Program",
      issuer: "Coursevita",
      type: "Web Development Bootcamp",
      icon: (
        <svg
          className='w-8 h-8 text-accent'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
          />
        </svg>
      ),
    },
    {
      title: "HTML, CSS, Javascript",
      issuer: "Great Learning Academy",
      type: "Frontend Essentials",
      icon: (
        <svg
          className='w-8 h-8 text-accent'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
          />
        </svg>
      ),
    },
    {
      title: "Advanced C++, Java (Training)",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      type: "Object Oriented Programming",
      icon: (
        <svg
          className='w-8 h-8 text-accent'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className='bg-white py-20 px-6 md:px-20 border-b border-slate-100'
      id='certifications'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight'>
            Certifications & Training
          </h2>
          <div className='h-1 w-20 bg-accent mt-2 rounded mx-auto'></div>
          <p className='pt-4 text-textMuted text-base max-w-xl mx-auto font-light'>
            Verified external programs and coursework demonstrating specialized
            skills and continuous growth.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {certList.map((cert, idx) => (
            <div
              key={idx}
              className='bg-surface border border-slate-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1'>
              {/* Badge Icon */}
              <div className='w-16 h-16 bg-white border border-slate-150 rounded-2xl flex items-center justify-center shadow-sm mb-6'>
                {cert.icon}
              </div>

              {/* Tag Category */}
              <span className='text-[10px] font-bold tracking-wider uppercase text-accent bg-accent/5 px-2.5 py-1 rounded-full mb-3'>
                {cert.type}
              </span>

              {/* Title & Issuer */}
              <h3 className='font-outfit font-bold text-textMain text-base mb-2 flex-grow'>
                {cert.title}
              </h3>

              <p className='text-xs text-textMuted leading-relaxed border-t border-slate-200/50 w-full pt-4 mt-2'>
                Issuer:{" "}
                <span className='font-semibold text-textMain'>
                  {cert.issuer}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
