import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <section className="bg-white py-20 px-6 md:px-20" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* About Image Container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-2xl rotate-3"></div>
            <img 
              src={AboutImg} 
              alt="Kamalesh S - Developer Portfolio Illustration" 
              className="relative w-full max-w-md h-auto rounded-2xl shadow-xl object-cover hover:scale-[1.01] transition-transform duration-300 border border-slate-100" 
            />
          </div>
        </div>

        {/* About Details */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <div>
            <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-textMain tracking-tight">
              About Me
            </h2>
            <div className="h-1 w-20 bg-accent mt-2 rounded"></div>
          </div>

          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Hello! I'm <strong className="text-textMain font-semibold">Kamalesh S</strong>, a passionate Frontend Web Developer and Computer Science postgraduate with a strong foundation in building responsive, accessible, and performant web applications. 
          </p>
          
          <p className="text-textMuted text-base leading-relaxed font-light">
            I specialize in component-driven UI architectures, React.js state management, DOM manipulation, and building pixel-perfect responsive layouts using Tailwind CSS and Bootstrap. My post-graduate study has equipped me with advanced knowledge of computer science paradigms, programming structures, and databases like MongoDB.
          </p>

          <p className="text-textMuted text-base leading-relaxed font-light">
            I enjoy bridging the gap between design and clean code, ensuring that everything I build is optimized, maintainable, and provides a delightful user experience.
          </p>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-surface p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-outfit font-bold text-textMain text-lg mb-1 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-primary mr-2"></span>
                Education
              </h3>
              <p className="text-sm text-textMuted">M.Sc. & B.Sc. in Computer Science (Sri Sankara Arts & Science College)</p>
            </div>
            
            <div className="bg-surface p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-outfit font-bold text-textMain text-lg mb-1 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent mr-2"></span>
                Tech Focus
              </h3>
              <p className="text-sm text-textMuted">React.js, ES6+ JavaScript, UI Components, CSS Grid & Flexbox</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
