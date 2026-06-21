import React from "react";

export default function Internship() {
  const internshipList = [
    {
      role: "Business & Data Analytics",
      organization: "YBI Foundation",
      period: "05/2025 – 06/2025",
      type: "Remote Internship",
      bullets: [
        "Completed a one-month internship program focused on business and data analytics fundamentals.",
        "Gained exposure to data interpretation, reporting, and analytical thinking.",
      ],
      icon: (
        <svg
          className='w-5 h-5 text-textMuted mr-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
    },
    {
      role: "Python Training",
      organization: "EduPyramids, SINE IIT Bombay",
      period: "09/2025 – 11/2025",
      type: "Professional Training",
      bullets: [
        "Completed training in Python programming fundamentals.",
        "Practiced core programming concepts and problem-solving techniques.",
      ],
      icon: (
        <svg
          className='w-5 h-5 text-textMuted mr-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      ),
    },
    {
      role: "Java Business Application Training",
      organization: "EduPyramids, SINE IIT Bombay",
      period: "09/2025 – 11/2025",
      type: "Professional Training",
      bullets: [
        "Completed self-paced training on Java programming and business application concepts.",
        "Learned object-oriented programming principles and application development fundamentals.",
      ],
      icon: (
        <svg
          className='w-5 h-5 text-textMuted mr-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className='bg-white py-20 px-6 md:px-20 border-b border-slate-100'
      id='internship'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight'>
            Internship & Practical Training
          </h2>
          <div className='h-1 w-20 bg-accent mt-2 rounded mx-auto'></div>
          <p className='pt-4 text-textMuted text-base max-w-xl mx-auto font-light'>
            My practical training and industry internship experiences applying
            analytics, programming, and software concepts.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className='relative border-l border-slate-200 ml-4 md:ml-8 space-y-12'>
          {internshipList.map((item, idx) => (
            <div key={idx} className='relative pl-8 group'>
              {/* Timeline Indicator Dot */}
              <div className='timeline-dot group-hover:bg-primary transition-colors duration-200'></div>

              {/* Internship Content Box */}
              <div className='bg-surface p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4'>
                  <div>
                    <span className='text-xs font-semibold uppercase tracking-wider text-accent bg-accent/5 px-2.5 py-1 rounded-full'>
                      {item.period}
                    </span>
                    <h3 className='font-outfit font-extrabold text-xl md:text-2xl text-textMain mt-3 leading-tight'>
                      {item.role}
                    </h3>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <span className='text-sm font-bold bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg'>
                      {item.type}
                    </span>
                  </div>
                </div>

                <h4 className='font-semibold text-textMain/90 text-sm md:text-base mb-4 flex items-center'>
                  {item.icon}
                  {item.organization}
                </h4>

                <ul className='space-y-2'>
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className='text-sm text-textMuted flex items-start space-x-2'>
                      <span className='text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0'></span>
                      <span className='font-light'>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
