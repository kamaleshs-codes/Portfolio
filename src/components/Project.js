import eCommerceProject from "../assets/ecommerce-websites.jpg";
import foodeCommerce from "../assets/food-ecommerce.jpg";
import webBlog from "../assets/website-blog.jpg";

export default function Project() {
  const projectsList = [
    {
      title: "To-Do List Web Application",
      description: "Engineered a fully responsive task management application with complete CRUD functionality — add, edit, and delete tasks.",
      image: webBlog,
      tech: ["HTML5", "CSS3", "JavaScript"],
      bullets: [
        "Implemented real-time dynamic DOM manipulation for instant UI updates without page reload.",
        "Applied mobile-first design principles ensuring seamless cross-device compatibility."
      ]
    },
    {
      title: "YouTube Clone",
      description: "Recreated the YouTube homepage UI with pixel-accurate layout replication, demonstrating strong visual attention to detail.",
      image: foodeCommerce,
      tech: ["HTML5", "CSS3", "Flexbox", "Grid"],
      bullets: [
        "Leveraged CSS Flexbox and Grid to build a modern, fully responsive multi-column page structure.",
        "Maintained clean semantic HTML markup and consistent cross-browser styling for accessibility."
      ]
    },
    {
      title: "E-Commerce Web Application",
      description: "Built a multi-page responsive e-commerce platform featuring product listings, interactive UI components, and a mobile-friendly layout.",
      image: eCommerceProject,
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      bullets: [
        "Utilized Bootstrap grid system alongside custom CSS to deliver a polished storefront experience.",
        "Incorporated interactive JavaScript components to enhance the user shopping experience."
      ]
    }
  ];

  return (
    <section className="bg-surface py-20 px-6 md:px-20 border-y border-slate-100" id="project">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-accent mt-2 rounded mx-auto md:mx-0"></div>
          <p className="pt-4 text-textMuted text-base max-w-xl font-light">
            Here are some of the key web applications I've developed, showcasing responsive design, DOM manipulation, and frontend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Accent Hover Gradient Overlay */}
              <div className="relative h-48 overflow-hidden group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={project.image} 
                  alt={`${project.title} Preview`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-outfit font-bold text-xl text-textMain mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-textMuted leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-textMuted flex items-start space-x-2">
                      <span className="text-accent mt-0.5 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Links */}
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:text-blue-700 flex items-center space-x-1"
                  >
                    <span>View Code</span>
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  <span className="text-slate-300">|</span>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-accent hover:text-teal-700 flex items-center space-x-1"
                  >
                    <span>Live Demo</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
                                                                                                                                 