import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import profileimg from "../assets/profileimg.png";

export default function Hero() {
  const heroContent = {
    status: "Available for Opportunities",

    greeting: "Hello, I am",

    name: "Kamalesh S",

    roles: ["MERN Stack Developer", "Full Stack Developer", "Web Developer"],

    description:
      "Computer Science postgraduate and MERN Stack Developer with hands-on experience building scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Skilled in developing secure RESTful APIs, JWT authentication, CRUD operations, and real-time communication using Socket.IO. Passionate about building efficient, user-friendly applications while continuously exploring AI-assisted software development.",
  };

  const buttons = [
    {
      label: "View Projects",
      href: "#project",
      className: "btn-accent shadow-lg shadow-accent/20",
    },
    {
      label: "Resume",
      href: "#resume",
      className:
        "btn-primary text-sky-400 font-semibold hover:text-blue-700 hover:bg-white",
    },
    {
      label: "Contact Me",
      href: "#contact",
      className:
        "btn-secondary text-white hover:text-secondary border-slate-700 hover:bg-white transition-all",
    },
  ];

  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/kamaleshs-codes",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/kamalesh-s2004",
      label: "LinkedIn",
    },
    {
      icon: MdEmail,
      href: "mailto:skamalesh0204@outlook.com",
      label: "Email",
    },
  ];

  return (
    <section
      id='home'
      className='relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 md:py-28 bg-secondary overflow-hidden'>
      {/* Background */}
      <div className='absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20'></div>

      {/* Left Content */}
      <motion.div
        className='w-full md:w-1/2 flex flex-col justify-center text-white z-10 space-y-6'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        {/* Status */}
        <div className='inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full w-fit'>
          <span className='w-2 h-2 rounded-full bg-accent animate-pulse'></span>

          <span className='text-xs font-semibold uppercase tracking-wider text-slate-300'>
            {heroContent.status}
          </span>
        </div>

        {/* Heading */}
        <div>
          <h1 className='font-outfit font-extrabold text-4xl md:text-7xl tracking-tight leading-tight'>
            {heroContent.greeting}
            <br />

            <span className='bg-clip-text bg-gradient-to-r from-primary-light to-accent'>
              {heroContent.name}
            </span>
          </h1>
        </div>

        {/* Roles */}
        <h2 className='text-xl md:text-2xl font-bold text-slate-200'>
          {heroContent.roles.map((role, index) => (
            <span key={role}>
              {role}

              {index !== heroContent.roles.length - 1 && (
                <span className='text-accent px-2'>|</span>
              )}
            </span>
          ))}
        </h2>

        {/* Description */}
        <p className='text-slate-400 max-w-xl text-base md:text-lg leading-relaxed font-light'>
          {heroContent.description}
        </p>

        {/* Buttons */}
        <div className='flex flex-wrap gap-4 pt-2'>
          {buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={`${button.className} text-center`}>
              {button.label}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className='flex items-center gap-5 pt-4'>
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className='text-slate-400 transition-all duration-300 hover:text-accent hover:-translate-y-1'>
                <Icon size={26} />
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className='w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 z-10'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}>
        <div className='relative group'>
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-30 blur-xl transition-opacity duration-300 group-hover:opacity-40'></div>

          <motion.img
            src={profileimg}
            alt='Kamalesh S'
            className='relative w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover border-2 border-slate-700/50 shadow-2xl'
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
