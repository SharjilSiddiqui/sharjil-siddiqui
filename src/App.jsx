import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import LightRays from "./components/reactbits/LightRays";

function App() {
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>

      <div style={{ width: "100%", height: "600px", position: "absolute", opacity: 0.18 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#0ea5e9"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        
        </div>

      <Navbar
        setShowExperience={setShowExperience}
        setShowSkills={setShowSkills}
        setShowContact={setShowContact}
        setShowProjects={setShowProjects}
      />

      {/* AnimatePresence enables exit animation */}
      <AnimatePresence>
        {showExperience && <Experience setShowExperience={setShowExperience} />}
        {showSkills && <Skills setShowSkills={setShowSkills} />}
        {showContact && <Contact setShowContact={setShowContact} />}
        {showProjects && <Projects setShowProjects={setShowProjects} />}
      </AnimatePresence>

      <About
        setShowProjects={setShowProjects}
        setShowContact={setShowContact}
      />

      
    </>
  );
}

export default App;
