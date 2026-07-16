import React from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

function Projects({ setShowProjects }) {
  const projects = [
    {
      title: "Pawthway – Pet Adoption Platform",
      tech: "React, Tailwind, Firebase, Framer Motion",
      badge: "Personal Project",
      description:
        "Developed a responsive web app using React.js, Tailwind CSS, and Firebase that connects users with animal shelters. Implemented role-based authentication, allowing users and admins to upload, edit, and delete pet listings. Integrated Firebase Firestore and Storage for real-time data and image handling. Focused on clean UX with animations using Framer Motion and responsive layouts via Tailwind CSS.",
      link: "https://pawthway-iota.vercel.app/",
    },
    {
      title: "Crypto Dashboard",
      tech: "Next.js, React, Tailwind, Chart.js, Web3.js",
      badge: "Personal Project",
      description:
        "Developed a responsive cryptocurrency dashboard with real-time market data from the CoinGecko API. Implemented SSR, coin detail pages with 7-day price charts, and integrated MetaMask wallet connect using Web3.js for blockchain interaction.",
      link: "https://crypto-dashboard-tau-seven.vercel.app/",
    },
    {
      title: "AI Notes Summarizer",
      tech: "Python, Streamlit, NLP, Sumy",
      badge: "Personal Project",
      description:
        "Developed a web app to extract and summarize content from uploaded PDF notes using NLP techniques. Used PyPDF2 to extract text and Sumy (LSA) for concise summaries. Built an interactive Streamlit UI to preview extracted text and adjust summary length.",
      link: null,
    },
    {
      title: "DartCloudFunctions",
      tech: "Vue.js/Nuxt, Tailwind CSS, REST APIs, Firebase",
      badge: "Proprietary Project",
      description:
        "Enterprise serverless cloud platform where I contributed to frontend features, authentication flows, deployment interfaces, project management, and runtime configuration.",
      link: null,
    },
    {
      title: "DartCodeAI",
      tech: "Vue/Nuxt, JavaScript, REST APIs, QA",
      badge: "Proprietary Project",
      description:
        "AI platform where I contributed to frontend functionality, QA validation, and feature verification for enterprise AI workflows.",
      link: null,
    },
    {
      title: "IntelliToggle",
      tech: "Vue.js/Nuxt, Tailwind CSS, RBAC, REST APIs",
      badge: "Proprietary Project",
      description:
        "Feature flag management platform with work involving admin dashboards, RBAC, and API integration.",
      link: null,
    },
    {
      title: "DartStream",
      tech: "JavaScript, Dashboard UI, API Testing, GitLab",
      badge: "Proprietary Project",
      description:
        "Worked on dashboard improvements, frontend implementation, QA verification, and issue validation.",
      link: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-md z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowProjects(false)}
      />

      {/* Modal */}
      <motion.section
        initial={{ scale: 0.8, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] max-w-4xl
                   bg-white/90
                   backdrop-blur-xl border border-slate-200
                   py-10 px-6 sm:px-8 md:px-12
                   text-slate-900 rounded-2xl shadow-2xl shadow-slate-300/60 z-50
                   max-h-[90vh] overflow-y-auto"
      >
        {/* Background Orbs */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-sky-200/70 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100/80 rounded-full blur-3xl"
          />
        </div>

        {/* Close Button */}
        <motion.button
          onClick={() => setShowProjects(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-sky-50 backdrop-blur-sm border border-slate-200 transition-all duration-300 group z-10 shadow-sm"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6 text-slate-600 group-hover:text-sky-600 transition-colors" />
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8 relative"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-950 via-sky-600 to-blue-700 bg-clip-text text-transparent mb-3">
            Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg"
          >
            Selected personal builds and production SaaS contributions
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-5 bg-white backdrop-blur-sm border border-slate-200 rounded-xl hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col gap-3 mb-3">
                  <span
                    className={`self-start px-3 py-1 rounded-full text-xs font-semibold border ${
                      project.badge === "Proprietary Project"
                        ? "bg-sky-50 border-sky-200 text-sky-700"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}
                  >
                    {project.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-950">
                    {project.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base mb-2">
                  {project.tech}
                </p>
                <p className="text-slate-500 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg font-semibold shadow-md shadow-sky-200 hover:shadow-sky-300 transition-all duration-300"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default Projects;
