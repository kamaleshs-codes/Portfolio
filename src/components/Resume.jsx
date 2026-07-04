import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
  return (
    <section
      className='bg-white py-20 px-6 md:px-20 border-b border-slate-100'
      id='resume'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12'>
        {/* Left Side: Mockup Image */}
        <div className='w-full md:w-1/2 flex justify-center md:order-last'>
          <div className='relative group'>
            <div className='absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-300'></div>
            <img
              src={ResumeImg}
              alt='Kamalesh S - Resume Preview'
              className='relative w-72 md:w-80 h-auto rounded-2xl shadow-lg border border-slate-100 hover:scale-[1.01] transition-all duration-300'
            />
          </div>
        </div>

        {/* Right Side: CTA details */}
        <div className='w-full md:w-1/2 flex flex-col space-y-6'>
          <div>
            <h2 className='font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight'>
              Resume / Curriculum Vitae
            </h2>
            <div className='h-1 w-20 bg-accent mt-2 rounded'></div>
          </div>

          <p className='text-textMuted text-base md:text-lg leading-relaxed font-light'>
            Interested in working together? You can view my complete
            professional profile by downloading or reading my resume. It details
            my academic credentials, software skill levels, and recent projects.
          </p>

          <div className='flex flex-wrap gap-4 pt-2'>
            <a
              href={`${import.meta.env.BASE_URL}resume/Kamalesh_S_Resume.pdf`}
              download='Kamalesh_S_Resume.pdf'
              className='btn-accent text-center shadow-lg shadow-accent/20 flex items-center justify-center space-x-2'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                />
              </svg>
              <span>Download PDF</span>
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume/Kamalesh_S_Resume.pdf`}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-secondary text-center flex items-center justify-center space-x-2'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
              <span>View Online</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
