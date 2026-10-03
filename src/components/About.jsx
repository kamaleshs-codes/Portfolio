import { motion } from "framer-motion";
import ProfileImg from "../assets/about.png";
import {
  FaUser,
  FaGraduationCap,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLanguage,
} from "react-icons/fa";
import { Card } from "./Card";

export default function About() {
  const aboutContent = {
    title: "About Me",

    subtitle: "GET TO KNOW ME BETTER:",

    paragraphs: [
      "I'm a Computer Science postgraduate and MERN Stack Developer with hands-on experience building scalable web applications.",

      "I enjoy transforming ideas into real-world solutions using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Through multiple projects, I've gained practical experience in RESTful APIs, JWT authentication, CRUD operations, deployment, and real-time communication using Socket.IO.",

      "I'm passionate about continuously improving my development skills, exploring AI-assisted software development, and building clean, responsive, and user-focused applications.",
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
      value: "skamalesh0204@outlook.com",
      icon: FaEnvelope,
    },
    {
      label: "Languages",
      value: "English, Tamil",
      icon: FaLanguage,
    },
  ];

  const technicalHighlights = [
    "HTML5, CSS3, JavaScript (ES6+)",
    "React.js, Tailwind CSS, Bootstrap",
    "Node.js, Express.js, RESTful APIs",
    "JWT Authentication",
    "CRUD Operations",
    "MongoDB",
    "Socket.IO",
    "Git & GitHub",
    "Postman & Thunder Client",
    "Problem Solving & Team Collaboration",
  ];

  return (
    <section id='about' className='py-20 px-6 md:px-20 bg-primary'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start'>
        {/* Left Column */}
        {/* Left Column */}
        <motion.div
          className='col-span-1 flex flex-col items-center md:items-start space-y-6'
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          {/* Profile Image */}
          <img
            src={ProfileImg}
            alt='Kamalesh S'
            className='w-44 h-44 md:w-full md:h-56 rounded-2xl object-cover'
          />

          {/* Personal Information Card */}
          <Card>
            {personalInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <div
                  key={info.label}
                  className={`flex items-start gap-4 py-4 ${
                    index !== personalInfo.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}>
                  <div className='mt-1 text-accent-main-main'>
                    <Icon size={18} />
                  </div>

                  <div className='flex-1 min-w-0'>
                    <p className='text-sm text-accent-main-main font-medium'>
                      {info.label}
                    </p>

                    <p className='mt-1 font-semibold text-white/90 break-words'>
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}>
          {/* Section Heading */}
          <h2 className='font-outfit font-extrabold text-3xl text-primary'>
            {aboutContent.title}
          </h2>

          <div className='h-1 w-16 bg-surface rounded mt-3 mb-6'></div>

          <h3 className='text-2xl font-semibold mb-3 text-accent-main-secondary'>
            {aboutContent.subtitle}
          </h3>

          {/* About Description */}
          <div className='space-y-5 text-sub-main leading-relaxed mb-6'>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {index === 0 ? (
                  <>
                    <span className='text-primary font-semibold'>
                      I'm Kamalesh S
                    </span>
                    {paragraph.replace("I'm", ",")}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          {/* Technical Highlights */}
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {technicalHighlights.map((skill) => (
              <li
                key={skill}
                className='flex items-start font-semibold gap-2 text-accent-main-secondary'>
                <span className='text-primary font-bold mt-0.5'>✔</span>

                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
