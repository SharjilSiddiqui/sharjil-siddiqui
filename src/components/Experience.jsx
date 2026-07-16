import React from "react";
import { motion } from "framer-motion";
import { X, Briefcase } from "lucide-react";

function Experience({ setShowExperience }) {
  const experiences = [
    {
      company: "Aortem Inc. • Remote",
      role: "Frontend Intern",
      duration: "Jan 2026 – May 2026",
      current: false,
      points: [
        "Designed and shipped production frontend workflows using Nuxt and modern frontend architecture patterns.",
        "Architected frontend integration flows for Azure account connectivity, enabling secure onboarding into the DartCloudFunctions platform.",
        "Worked across frontend, backend, and product discussions to define system behavior and rapidly ship production-ready features.",
        "Contributed to product initiatives including free-trial onboarding systems and automated reminder workflows.",
        "Investigated and resolved production issues affecting critical user journeys.",
        "Improved platform responsiveness, maintainability, and frontend performance.",
      ],
      badges: [
        "Nuxt",
        "JavaScript",
        "REST APIs",
        "Azure",
        "Firebase",
        "Git",
        "GitLab",
      ],
    },
    {
      company: "Aortem Inc. • Remote",
      role: "Frontend Lead",
      duration: "May 2026 – Present",
      current: true,
      points: [
        "Led frontend architecture and technical decision-making across DartCodeAI, DartStream, TechniDox, IntelliToggle, and DartCloudFunctions.",
        "Defined frontend implementation strategies, reusable component architecture, state management, and UI standards across products.",
        "Mentored frontend interns, assigned work, reviewed progress, and resolved engineering blockers.",
        "Collaborated directly with product leadership and engineering teams to translate business requirements into scalable frontend solutions.",
        "Reviewed pull requests, maintained code quality, and improved engineering standards.",
        "Led implementation of deployment workflows, analytics dashboards, licensing systems, integrations, and enterprise administrative interfaces.",
      ],
      badges: [
        "Vue",
        "Nuxt",
        "JavaScript",
        "Tailwind CSS",
        "Git",
        "GitLab",
        "Architecture",
        "Leadership",
        "Code Review",
        "cURL",
        "REST APIs",
        "Azure",
        "Firebase",
      ],
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-md z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowExperience(false)}
      />

      {/* Modal */}
      <motion.section
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[95%] lg:w-[90%] max-w-7xl
        bg-white/90 backdrop-blur-xl border border-slate-200
        rounded-3xl shadow-2xl shadow-slate-300/40
        p-8 lg:p-12 z-50
        max-h-[90vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          onClick={() => setShowExperience(false)}
          className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 hover:bg-slate-100 transition"
        >
          <X className="w-6 h-6 text-slate-700" />
        </button>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-sky-600 to-blue-700 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="w-40 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />

          <p className="mt-5 text-slate-600 text-lg">
            Professional experience building and leading enterprise SaaS
            products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className={`relative rounded-2xl border p-8 transition-all
              ${
                exp.current
                  ? "border-sky-500 shadow-xl shadow-sky-100"
                  : "border-slate-200 shadow-lg"
              }
              bg-white`}
            >
              {exp.current && (
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold">
                    Current
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600">
                  <Briefcase className="text-white w-6 h-6" />
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-sky-600 text-sm font-semibold">
                    {exp.company}
                  </p>

                  <h3 className="text-3xl font-bold text-slate-900">
                    {exp.role}
                  </h3>

                  <p className="text-slate-500 mt-1">{exp.duration}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 leading-7">
                    <span className="mt-2 w-2 h-2 rounded-full bg-sky-500 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-8">
                {exp.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default Experience;
