import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import LightRays from "./components/reactbits/LightRays";

function App() {
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>

      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
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

      <Navbar setShowSkills={setShowSkills} setShowContact={setShowContact} setShowProjects={setShowProjects}/>

      {/* AnimatePresence enables exit animation */}
      <AnimatePresence>
        {showSkills && <Skills setShowSkills={setShowSkills} />}
        {showContact && <Contact setShowContact={setShowContact} />}
        {showProjects && <Projects setShowProjects={setShowProjects} />}
      </AnimatePresence>

      <About />

      
    </>
  );
}

export default App;
