import eCommerceProject from "../assets/ecommerce-websites.jpg";
import jobTracker from "../assets/job-tracker.png";
import chatApp from "../assets/chat-app.png";
import instagramClone from "../assets/instagram-clone.png";
import { motion } from "framer-motion";

export default function Project() {
  const projectsList = [
    {
      title: "Job Tracker",
      description:
        "Built a MERN job tracker for logging applications and managing a resume profile.",
      image: jobTracker,
      tech: ["React.js", "Express.js", "MongoDB", "Node.js"],
      bullets: [
        "Responsive job application tracking platform with dashboard and status management features.",
        "Visualized application status and company trends using dynamic charts.",
      ],
      githublink: "",
      livelink: "",
    },
    {
      title: "Real-time Chat Web App",
      description:
        "Developed a full-stack real-time chat application using the MERN stack with secure user authentication and authorization.",
      image: chatApp,
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
      ],
      bullets: [
        "Implemented JWT-based authentication, password hashing with bcrypt, and protected routes for secure user access.",
        "Built real-time one-to-one messaging functionality using Socket.IO, enabling instant communication between users.",
      ],
      githublink: "",
      livelink: "",
    },
    {
      title: "E-Commerce Website",
      description:
        "Built a full-stack MERN e-commerce app with secure user authentication using JWT.",
      image: eCommerceProject,
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "JWT",
        "MongoDB",
        "RESTful API",
      ],
      bullets: [
        "Implemented a dynamic product catalog/cart and end-to-end order processing.",
        "Multi-page responsive e-commerce site featuring product listings and interactive UI.",
      ],
      githublink: "",
      livelink: "",
    },
    {
      title: "Instagram Clone",
      description:
        "Developed a responsive Instagram-inspired social media interface using React.js.",
      image: instagramClone,
      tech: ["HTML", "CSS", "Bootstrap", "React.js"],
      bullets: [
        "Implemented component-based architecture and reusable UI components.",
        "Created dynamic post feeds and modern responsive layouts.",
        "Applied React state management and routing concepts.",
      ],
      githublink: "https://github.com/kamaleshs-codes/Instagram-clone/",
      livelink: "",
    },
  ];

  return (
    <section
      className='bg-surface py-20 px-6 md:px-20 border-y border-slate-100'
      id='project'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center md:text-left mb-12'>
          <h2 className='font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight'>
            Featured Projects
          </h2>
          <div className='h-1 w-20 bg-accent mt-2 rounded mx-auto md:mx-0'></div>
          <p className='pt-4 text-textMuted text-base max-w-xl font-light'>
            Here are some of the key web applications I've developed, showcasing
            responsive design, DOM manipulation, and frontend architecture.
          </p>
        </div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}>
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              className='bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col'
              whileHover={{ y: -6 }}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}>
              {/* Image Container with Accent Hover Gradient Overlay */}
              <div className='relative h-48 overflow-hidden group'>
                <motion.img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className='w-full h-full object-cover'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent'></div>
              </div>

              {/* Card Details */}
              <div className='p-6 flex flex-col flex-grow'>
                {/* Tech Badges */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/50'>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='font-outfit font-bold text-xl text-textMain mb-2'>
                  {project.title}
                </h3>

                <p className='text-sm text-textMuted leading-relaxed mb-4 flex-grow'>
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className='space-y-2 mb-6 border-t border-slate-100 pt-4'>
                  {project.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className='text-xs text-textMuted flex items-start space-x-2'>
                      <span className='text-accent mt-0.5 font-bold'>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Links */}
                <div className='flex flex-wrap gap-3 items-center'>
                  {project.githublink ? (
                    <a
                      href={project.githublink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary/10'>
                      View Code
                    </a>
                  ) : (
                    <span className='rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400'>
                      Code Coming Soon
                    </span>
                  )}

                  {project.livelink ? (
                    <a
                      href={project.livelink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='rounded-full border border-accent/20 bg-accent/5 px-3 py-2 text-xs font-semibold text-accent transition-all hover:bg-accent/10'>
                      Live Demo
                    </a>
                  ) : (
                    <span className='rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400'>
                      Live Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
