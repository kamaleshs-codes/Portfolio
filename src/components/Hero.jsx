import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import myprofile from "../assets/myprofile.png";

export default function Hero() {
  const heroContent = {
    status: "Available for Opportunities",

    greeting: "Hello, I'm",

    name: "Kamalesh S",

    roles: ["Frontend Developer", "Web Developer", "Mern Stack Enthuaist"],

    description:
      "I'm a Frontend Developer with a strong foundation in the MERN stack, passionate about building modern, responsive, and user-focused web applications. I enjoy transforming ideas into intuitive digital experiences using React.js and continuously enhancing my frontend expertise while expanding my full-stack development skills. I'm currently focused on mastering modern frontend technologies and strengthening my backend knowledge to grow into a well-rounded Full-Stack Software Developer, with a long-term vision of integrating AI into impactful web applications.",
  };

  const buttons = [
    {
      label: "View Projects",
      href: "#project",
      className: "btn-primary",
    },
    {
      label: "Download Resume",
      href: "#resume",
      className: "btn-primary",
    },
    {
      label: "Contact Me",
      href: "#contact",
      className: "btn-primary",
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
      className='relative overflow-hidden bg-main px-6 py-20 md:px-20 md:py-28'>
      {/* Background Effects - Cleaned up to match new theme */}
      <div className='absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl'></div>

      <div className='absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl'></div>

      <div className='relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-16 md:flex-row'>
        {/* Left */}
        <motion.div
          className='flex w-full flex-col justify-center space-y-7 md:w-1/2'
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          {/* Status */}

          <div className='inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/50 bg-surface px-4 py-2 backdrop-blur'>
            <span className='h-2 w-2 rounded-full bg-accent-light animate-pulse'></span>

            <span className='text-xs font-semibold uppercase tracking-[0.2em] text-accent-main'>
              {heroContent.status}
            </span>
          </div>

          {/* Heading */}

          <div>
            <h1 className='font-outfit text-4xl font-extrabold leading-tight text-main hover-text-accent-light md:text-6xl lg:text-7xl'>
              {heroContent.greeting}
              <br />

              <span className='bg-gradient-to-r from-indigo-400 hover-text-accent-main to-sky-400 bg-clip-text text-transparent'>
                {heroContent.name}
              </span>
            </h1>
          </div>

          {/* Roles */}

          <h2 className='text-lg font-semibold text-accent-main md:text-2xl'>
            {heroContent.roles.map((role, index) => (
              <span key={role}>
                {role}

                {index !== heroContent.roles.length - 1 && (
                  <span className='px-2 text-indigo-400'>|</span>
                )}
              </span>
            ))}
          </h2>

          {/* Description */}

          <p className='max-w-xl text-base leading-8 text-main md:text-lg'>
            {heroContent.description}
          </p>

          <div className="text-accent-main">Let's Build Something Amazing Together!</div>

          {/* Buttons */}

          <div className='flex flex-wrap gap-4 pt-2'>
            {buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                download={button.download}
                className={`${button.className} text-center`}>
                {button.label}
              </a>
            ))}
          </div>

          {/* Socials */}

          <div className='flex items-center gap-6 pt-3'>
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
                  className='bg-accent-main text-primary rounded p-1 transition-all duration-300 hover:-translate-y-1'>
                  <Icon size={27} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          className='flex w-full justify-center md:w-1/2 md:justify-end'
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}>
          <div className='group relative'>
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-sky-500/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100'></div>

            <motion.img
              src={myprofile}
              alt='Kamalesh S'
              className='relative h-72 w-72 rounded-3xl border border-slate-800/80 object-cover shadow-2xl md:h-96 md:w-96'
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
