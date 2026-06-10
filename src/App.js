import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="App bg-white min-h-screen text-textMain selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
