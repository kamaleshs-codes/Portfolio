import HeroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 md:py-28 bg-secondary overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="w-full md:w-1/2 flex flex-col justify-center text-white z-10 space-y-6">
        <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Available for Opportunities</span>
        </div>

        <h1 className="font-outfit font-extrabold text-4xl md:text-6xl tracking-tight leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Kamalesh S</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-bold text-slate-200">
          Web Developer <span className="text-accent">|</span> Computer Science Postgraduate
        </h2>

        <p className="text-slate-400 max-w-xl text-base md:text-lg leading-relaxed font-light">
          Motivated Computer Science postgraduate with hands-on experience in Front-End Web Development using HTML5, CSS3, JavaScript (ES6+), Bootstrap, and React.js. Passionate about creating modern, user-friendly web solutions.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#project" className="btn-accent text-center shadow-lg shadow-accent/20">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary text-center text-white hover:text-secondary border-slate-700 hover:bg-white transition-all">
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-5 pt-4">
          <a 
            href="https://github.com/kamaleshs-codes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/kamalesh-s2004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Hero Image with stylish visual accents */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 z-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-30 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
          <img 
            className="w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover border-2 border-slate-700/50 relative shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300" 
            src={HeroImg} 
            alt="Kamalesh S - Developer Avatar" 
          />
        </div>
      </div>
    </section>
  );
}
