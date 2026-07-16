import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

function Experience({ setShowExperience }) {
  const experienceCards = [
    {
      company: "Aortem Inc.",
      title: "Frontend Intern",
      duration: "Jan 2026 – May 2026",
      items: [
        "Designed and shipped production frontend workflows using Nuxt and modern frontend architecture patterns.",
        "Architected frontend integration flows for Azure account connectivity, enabling secure onboarding into the DartCloudFunctions platform.",
        "Worked across frontend, backend, and product discussions to define system behavior and rapidly ship production-ready features.",
        "Contributed to product initiatives including free-trial onboarding systems and automated reminder workflows.",
        "Investigated and resolved production issues affecting critical user journeys.",
        "Improved platform responsiveness, maintainability, and frontend performance.",
      ],
      badges: ["Nuxt", "JavaScript", "REST APIs", "Azure", "Firebase", "Git", "GitLab"],
    },
    {
      company: "Aortem Inc.",
      title: "Frontend Lead",
      duration: "May 2026 – Present",
      current: true,
      items: [
        "Led frontend architecture and technical decision-making across five SaaS products: DartCodeAI, DartStream, TechniDox, IntelliToggle, and DartCloudFunctions.",
        "Defined frontend implementation strategies, component architecture, state management approaches, and UI/UX standards across products.",
        "Mentored and coordinated frontend interns, assigned work, resolved blockers, and tracked delivery.",
        "Collaborated directly with product leadership and engineering teams.",
        "Reviewed pull requests and maintained code quality.",
        "Led feature planning and implementation for deployment workflows, analytics dashboards, licensing systems, integrations, and administrative interfaces.",
      ],
      badges: ["React", "Vue", "Nuxt", "JavaScript", "Tailwind CSS", "Git", "GitLab", "Architecture", "Leadership", "Code Review"],
    },
    {
      company: "Release Quality",
      title: "QA & Release Verification",
      duration: "Production Validation",
      items: [
        "Verified production fixes across enterprise SaaS applications.",
        "Tested APIs using browser DevTools and cURL.",
        "Performed regression testing before production releases.",
        "Validated GitLab issues against implemented fixes.",
        "Prepared detailed QA verification comments for release approval.",
      ],
      badges: ["QA", "API Testing", "Regression Testing", "Postman", "cURL", "Chrome DevTools", "GitLab"],
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
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 12 } },
  };

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
        initial={{ scale: 0.8, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[95%] sm:w-[90%] md:w-[85%] lg:w-[86%] max-w-7xl
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
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100/80 rounded-full blur-3xl"
          />
        </div>

        {/* Close Button */}
        <motion.button
          onClick={() => setShowExperience(false)}
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
            Experience
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
            Professional experience and release validation work across enterprise SaaS products.
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible md:pb-0"
        >
          {experienceCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative min-w-[86%] snap-center p-5 bg-white border rounded-xl transition-all duration-300 flex flex-col justify-between md:min-w-0 ${
                card.current
                  ? "border-sky-300 shadow-xl shadow-sky-100 hover:border-sky-400"
                  : "border-slate-200 shadow-sm hover:shadow-lg hover:border-sky-300"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-sky-600">{card.company}</p>
                  {card.current && (
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-1 mb-4 text-sm font-medium text-slate-500">{card.duration}</p>
                <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs sm:text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default Experience;
