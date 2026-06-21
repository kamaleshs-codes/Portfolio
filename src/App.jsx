import "./App.css";
import { motion } from "framer-motion";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Project from "./components/Project.jsx";
import Internship from "./components/Internship.jsx";
import Resume from "./components/Resume.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";

function App() {
  return (
    <div className='App bg-white min-h-screen text-textMain selection:bg-accent selection:text-white'>
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}>
          <Hero />
          <About />
          <Skills />
          <Project />
          <Internship />
          <Education />
          <Certifications />
          <Resume />
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
