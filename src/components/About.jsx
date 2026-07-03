import { motion } from "framer-motion";
import ProfileImg from "../assets/about.png";

export default function About() {
  return (
    <section id='about' className='py-20 px-6 md:px-20 bg-surface'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start'>
        {/* Left Column */}
        <motion.div
          className='col-span-1 flex flex-col items-center md:items-start space-y-6'
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          {/* Profile Image */}
          <img
            src={ProfileImg}
            alt='Profile'
            className='w-44 h-44 md:w-full md:h-56 rounded-2xl object-cover border border-slate-100 shadow-md'
          />

          {/* Info Card */}
          <div className='w-full bg-white rounded-2xl shadow-md border border-slate-200 p-6'>
            <div className='flex justify-between py-3 border-b border-slate-200'>
              <span className='text-slate-500 font-medium'>Name</span>
              <span className='font-semibold text-textMain'>Kamalesh S</span>
            </div>

            <div className='flex justify-between py-3 border-b border-slate-200'>
              <span className='text-slate-500 font-medium'>Education</span>
              <span className='font-semibold text-textMain text-right'>
                M.Sc Computer Science
              </span>
            </div>

            <div className='flex justify-between py-3 border-b border-slate-200'>
              <span className='text-slate-500 font-medium'>Phone</span>
              <span className='font-semibold text-textMain text-right'>
                +91 63699 16750
              </span>
            </div>

            <div className='flex justify-between py-3 border-b border-slate-200'>
              <span className='text-slate-500 font-medium'>Location</span>
              <span className='font-semibold text-textMain text-right'>
                Kanchipuram, Tamil Nadu
              </span>
            </div>

            <div className='flex justify-between py-3 border-b border-slate-200'>
              <span className='text-slate-500 font-medium'>Email</span>
              <span className='font-semibold text-textMain text-right break-all'>
                skamalesh0204@outlook.com
              </span>
            </div>

            <div className='flex justify-between pt-3'>
              <span className='text-slate-500 font-medium'>Languages</span>
              <span className='font-semibold text-textMain'>
                English, Tamil
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className='col-span-2'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}>
          <h2 className='font-outfit font-extrabold text-3xl text-textMain'>
            About Me
          </h2>

          <div className='h-1 w-16 bg-accent rounded mt-3 mb-6'></div>

          <h3 className='text-2xl font-semibold mb-6'>Get to know me better</h3>

          <p className='text-slate-800 leading-relaxed mb-6'>
            I'm <span className='text-accent font-semibold'>Kamalesh S</span>, a
            Computer Science postgraduate and aspiring Web Developer with strong
            experience in building responsive, user-friendly applications.
            <br />
            <br />
            I enjoy transforming ideas into real-world solutions using HTML5,
            CSS3, JavaScript (ES6+), Bootstrap, React.js, and Tailwind CSS.
            Through hands-on projects, I've gained experience in responsive UI
            design, component-based architecture, DOM manipulation, and frontend
            state management.
            <br />
            <br />
            I'm currently improving my backend skills in Node.js, Express.js,
            RESTful APIs, and CRUD operations while continuing to build modern
            web solutions with clean interfaces and practical UX.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-primary'>
            <li>✔ Proficient: HTML5, CSS3, JavaScript (ES6+)</li>
            <li>✔ Frontend: React.js, Tailwind CSS, Bootstrap</li>
            <li>✔ Backend: Node.js, Express.js, REST API</li>
            <li>✔ Databases: MongoDB, JSON Server db</li>
            <li>✔ Web Concepts: DOM, State Management, Routing</li>
            <li>✔ Programming: C++, Java, Python (Basics)</li>
            <li>✔ Tools: Git, GitHub, VS Code, Postman, Thunderclient</li>
            <li>✔ Soft Skills: Problem Solving, Team Collaboration</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
