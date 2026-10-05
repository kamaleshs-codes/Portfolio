import { motion } from "framer-motion";
import ProfileImg from "../assets/about.png";
import {
  FaUser,
  FaGraduationCap,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLanguage,
  FaUserCircle,
} from "react-icons/fa";
import { Card } from "./Card";
import { FaAddressCard, FaCommentDots } from "react-icons/fa6";
import SectionSubtitle from "./ui/SectionSubtitle";
import TypingText from "./animations/TypingText";
import TextReveal from "./animations/TextReveal";

export default function About() {
  const aboutContent = {
    title: "ABOUT ME",

    subtitle: "GET TO KNOW ME BETTER",

    paragraphs: [
      "I'm ",

      "I work primarily with React.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, and Bootstrap, with working knowledge of Node.js, Express.js, MongoDB, REST APIs, JWT authentication, CRUD operations, and Socket.IO.",

      "Through academic, personal, and internship projects, I've gained practical experience in building reusable React components, implementing responsive interfaces, integrating APIs, managing application state, and deploying web applications.",

      "I'm continuously improving my frontend development skills while exploring modern web technologies and AI-assisted software development, with the goal of building clean, scalable, and practical web solutions.",
    ],
  };

  const personalInfo = [
    {
      label: "Name",
      value: "Kamalesh S",
      icon: FaUser,
    },
    {
      label: "Education",
      value: "M.Sc Computer Science",
      icon: FaGraduationCap,
    },
    {
      label: "Phone",
      value: "+91 63699 16750",
      icon: FaPhoneAlt,
    },
    {
      label: "Location",
      value: "Kanchipuram, Tamil Nadu",
      icon: FaMapMarkerAlt,
    },
    {
      label: "Email",
      value: "kamalesh.s.tech@gmail.com",
      icon: FaEnvelope,
    },
    {
      label: "Languages",
      value: "English, Tamil",
      icon: FaLanguage,
    },
  ];

  const technicalHighlights = [
    "HTML5, CSS3, JavaScript (ES6+), TypeScript",
    "React.js, React Hooks, Context API, React Router",
    "Tailwind CSS, Bootstrap, Responsive UI",
    "REST APIs, Axios, JSON, CRUD Operations",
    "Node.js, Express.js, JWT Authentication",
    "MongoDB, Mongoose, JSON Server",
    "Socket.IO & Real-Time Communication",
    "Git & GitHub, Deployment & API Testing",
    "Postman, Thunder Client & Chrome DevTools",
    "AI-Assisted Development & Problem Solving",
  ];

  const listContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const listItem = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id='about' className='bg-secondary px-6 py-20 md:px-20'>
      <div className='mx-auto max-w-6xl'>
        {/* Section Heading */}
        <motion.h2
          className='mb-6 flex items-center justify-center gap-3 font-outfit text-3xl font-extrabold text-heading-secondary'
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}>
          <FaCommentDots className='text-accent-dark' size={30} />
          {aboutContent.title}
        </motion.h2>

        {/* Content */}
        <div className='grid grid-cols-1 items-start gap-12 md:grid-cols-3'>
          {/* Left Column */}
          <motion.div
            className='mt-8 col-span-1 flex flex-col items-center space-y-6 md:items-start'
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}>
            {/* Profile Image */}
            <img
              src={ProfileImg}
              alt='Kamalesh S'
              className='h-44 w-44 rounded-2xl object-cover md:h-56 md:w-full'
            />

            {/* Personal Information Card */}
            <Card>
              <h3 className='mb-2 flex items-center gap-2 border-b border-secondary pb-3 font-outfit text-xl font-semibold text-accent'>
                <FaAddressCard size={20} />
                PERSONAL INFORMATION
              </h3>

              {personalInfo.map((info, index) => {
                const Icon = info.icon;

                return (
                  <div
                    key={info.label}
                    className={`flex items-center gap-4 py-4 ${
                      index !== personalInfo.length - 1
                        ? "border-b border-secondary"
                        : ""
                    }`}>
                    <div className='mt-1 text-accent'>
                      <Icon size={18} />
                    </div>

                    <div className='min-w-0 flex-1'>
                      <p className='text-sm font-medium text-accent-light'>
                        {info.label}
                      </p>

                      <p className='mt-1 break-words font-semibold text-neutral'>
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Card>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className='col-span-2'
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}>
            <SectionSubtitle>{aboutContent.subtitle}</SectionSubtitle>

            {/* About Description */}
            <div className='mb-6 space-y-3 text-lg leading-relaxed text-body-secondary'>
              <TextReveal>
                <p className='font-bold'>
                  I'm Kamalesh S, a Computer Science postgraduate and FRONTEND
                  WEB and MERN STACK DEVELOPER with hands-on experience building
                  responsive and user-focused web applications.
                </p>
              </TextReveal>

              {aboutContent.paragraphs.slice(1).map((paragraph, index) => (
                <TextReveal key={index} delay={0.1 * (index + 1)}>
                  <p>{paragraph}</p>
                </TextReveal>
              ))}
            </div>

            {/* Technical Highlights */}
            <motion.ul
              className='grid grid-cols-1 gap-3 sm:grid-cols-2'
              variants={listContainer}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}>
              {technicalHighlights.map((skill) => (
                <motion.li
                  key={skill}
                  className='flex items-start gap-2 bg-surface px-3 py-2 text-neutral'
                  variants={listItem}
                  style={{
                    borderRadius: "24px",
                    borderBottomRightRadius: "9999px",
                  }}>
                  <span className='shrink-0 font-bold text-accent'>✔</span>

                  <span>{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
