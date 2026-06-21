import { motion } from "framer-motion";
import ProfileImg from "../assets/about.png";

export default function About() {
  return (
    <section id='about' className='py-20 px-6 md:px-20 bg-surface'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
        <motion.div
          className='col-span-1 flex justify-center md:justify-start'
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          <img
            src={ProfileImg}
            alt='Profile'
            className='w-44 h-44 md:w-56 md:h-56 rounded-2xl object-cover border border-slate-100 shadow-md'
          />
        </motion.div>

        <motion.div
          className='col-span-2'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}>
          <h2 className='font-outfit font-extrabold text-3xl text-textMain'>
            About Me
          </h2>
          <div className='h-1 w-16 bg-accent rounded mt-3 mb-6'></div>

          <p className='text-textMuted leading-relaxed mb-4'>
            I'm a front-end developer with a Computer Science postgraduate
            background, focused on building accessible, responsive, and
            performant web applications. I enjoy translating designs into
            polished user interfaces and experimenting with animations to
            improve user experience.
          </p>

          <ul className='grid grid-cols-2 gap-2 text-sm text-textMuted'>
            <li>Proficient: HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Frameworks: React, Tailwind CSS</li>
            <li>Tools: Git, Vite, npm</li>
            <li>Interests: UI/UX, Performance, Accessibility</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
