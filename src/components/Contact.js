export default function Contact() {
  const contactDetails = [
    {
      label: "Email",
      value: "skamalesh0204@outlook.com",
      href: "mailto:skamalesh0204@outlook.com",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: "Phone",
      value: "+91 63699 16750",
      href: "tel:+916369916750",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      label: "Location",
      value: "Kanchipuram, Tamil Nadu",
      href: null,
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-secondary text-white py-20 px-6 md:px-20 relative overflow-hidden" id="contact">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-accent mt-2 rounded mx-auto"></div>
          <p className="pt-4 text-slate-400 text-base max-w-lg mx-auto font-light">
            If you want to discuss a project, query code, or chat about frontend opportunities, feel free to reach out. I will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {contactDetails.map((detail, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="bg-slate-800/80 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-slate-750">
                {detail.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {detail.label}
              </h3>
              {detail.href ? (
                <a 
                  href={detail.href} 
                  className="text-base font-bold text-white hover:text-accent transition-colors break-words font-outfit"
                >
                  {detail.value}
                </a>
              ) : (
                <span className="text-base font-bold text-white font-outfit">
                  {detail.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
