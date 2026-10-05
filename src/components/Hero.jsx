import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import myprofile from "../assets/myprofile.png";
import TextReveal from "./animations/TextReveal";
import Button from "./ui/Button";

export default function Hero() {
  const heroContent = {
    status: "Available for Opportunities",
    greeting: "Hello, Welcome to my Portfolio, I am",
    name: "Kamalesh S",
    roles: ["Frontend Developer", "Web Developer", "MERN Stack Developer"],
    description:
      "Frontend & Web Developer experienced in building responsive web applications using React.js, JavaScript, TypeScript, and modern web technologies. Skilled in reusable React components, routing, state management, REST APIs, and MERN Stack development.",
    cta: "Let’s Build Something Great Together!",
  };

  const [displayedName, setDisplayedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [displayedRole, setDisplayedRole] = useState(0);
  const [statusStyle, setStatusStyle] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedName(heroContent.name.slice(0, index + 1));
      index++;

      if (index === heroContent.name.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setDisplayedRole((prev) => (prev + 1) % heroContent.roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusStyle((prev) => !prev);
    }, 5000);

    return () => clearInterval(statusInterval);
  }, []);

  const buttons = [
    {
      label: "View Projects",
      href: "#project",
    },
    {
      label: "Download Resume",
      href: "#resume",
    },
    {
      label: "Contact Me",
      href: "#contact",
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
      className='relative overflow-hidden bg-primary px-6 py-20 md:px-20 md:py-28'>
      {/* Background setup */}
      <div className='absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl' />

      <div className='absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent-light/10 blur-3xl' />

      {/* Greeting section */}
      <div>
        <h1 className='font-outfit text-3xl font-extrabold leading-tight text-heading md:text-3xl lg:text-4xl'>
          {heroContent.greeting}{" "}
          <motion.span
            className='bg-gradient-to-r from-accent-light to-accent bg-clip-text text-5xl text-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}>
            {displayedName}

            {isTyping && (
              <motion.span
                className='ml-1 inline-block text-accent'
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                |
              </motion.span>
            )}
          </motion.span>
        </h1>
      </div>

      {/* My Profile section */}
      <div className='relative z-10 mx-auto mt-7 flex max-w-7xl flex-col-reverse items-center justify-between gap-16 md:flex-row'>
        {/* Left side */}
        <motion.div
          className='flex w-full flex-col justify-center md:w-1/2'
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          {/* Status */}
          <motion.div
            className='inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 px-4 py-2 backdrop-blur'
            animate={{
              backgroundColor: statusStyle ? "#003e3b" : "#002864",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}>
            {/* Status Dot */}
            <motion.span
              className='h-2 w-2 animate-pulse rounded-full'
              animate={{
                backgroundColor: statusStyle ? "#00ffe1" : "#00d527",
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            />

            {/* Status Text */}
            <motion.span
              className='text-xs font-semibold uppercase tracking-[0.2em]'
              animate={{
                color: statusStyle ? "#00d527" : "#00ffe1",
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}>
              {heroContent.status}
            </motion.span>
          </motion.div>

          {/* Roles */}
          <div className='relative mt-4'>
            <AnimatePresence mode='wait'>
              <motion.h2
                key={heroContent.roles[displayedRole]}
                className='text-lg font-semibold text-accent-light md:text-2xl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}>
                {heroContent.roles[displayedRole]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description */}
          <TextReveal delay={0.2}>
            <p className='mt-4 max-w-xl text-base leading-8 text-body md:text-lg'>
              {heroContent.description}
            </p>

            {/* CTA */}
            <div className='mt-4 text-accent-light'>{heroContent.cta}</div>
          </TextReveal>

          {/* Buttons */}
          <div className='mt-5 flex flex-wrap gap-4'>
            {buttons.map((button) => (
              <Button
                key={button.label}
                href={button.href}
                download={button.download}>
                {button.label}
              </Button>
            ))}
          </div>

          {/* Socials */}
          <div className='mt-6 flex items-center gap-6'>
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
                  className='rounded-full bg-accent p-2 text-primary transition-all duration-300 hover:-translate-y-1'>
                  <Icon size={27} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          className='flex w-full justify-center md:w-1/2 md:justify-center'
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}>
          <div className='group relative'>
            <div className='absolute inset-0 rounded-3xl bg-accent/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100' />

            <motion.img
              src={myprofile}
              alt='Kamalesh S'
              className='relative h-72 w-72 rounded-3xl border-2 border-muted object-cover shadow-2xl md:h-96 md:w-96'
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
