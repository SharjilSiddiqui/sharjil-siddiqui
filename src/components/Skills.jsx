import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Wrench, Lightbulb, X } from "lucide-react";

function Skills({ setShowSkills }) {
  const skills = {
    frontend: {
      icon: Code2,
      color: "from-cyan-400 to-cyan-600",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design", "Next.js"]
    },
    backend: {
      icon: Server,
      color: "from-sky-400 to-blue-600",
      items: ["Node.js", "RESTful API", "Firebase", "MongoDB"]
    },
    tools: {
      icon: Wrench,
      color: "from-cyan-500 to-blue-500",
      items: ["Git", "GitHub", "Visual Studio Code", "Vite", "npm"]
    },
    concepts: {
      icon: Lightbulb,
      color: "from-teal-400 to-cyan-600",
      items: ["Component-Based Architecture", "Version Control"]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {/* Animated Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setShowSkills(false)}
      />

      {/* Animated Modal */}
      <motion.section
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl
                   bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95
                   backdrop-blur-xl border border-cyan-500/30
                   py-10 px-6 sm:px-8 md:px-12
                   text-white rounded-3xl shadow-2xl shadow-cyan-500/20 z-50
                   max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <motion.button
          onClick={() => setShowSkills(false)}
          className="absolute top-5 right-5 p-2 rounded-full 
                     bg-white/10 hover:bg-white/20 backdrop-blur-sm
                     border border-white/20 transition-all duration-300
                     group"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold 
                         bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 
                         bg-clip-text text-transparent mb-3">
            My Skills
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(skills).map(([category, { icon: Icon, color, items }]) => (
            <motion.div
              key={category}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 blur-xl rounded-2xl 
                              group-hover:opacity-40 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10
                              rounded-2xl p-6 shadow-lg
                              hover:bg-white/10 hover:border-white/20
                              transition-all duration-300">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold capitalize">
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <motion.ul
                  variants={containerVariants}
                  className="space-y-2.5"
                >
                  {items.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-center group/item"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} 
                                      mr-3 group-hover/item:scale-150 transition-transform`} />
                      <span className="text-sm md:text-base text-gray-200 
                                     group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              />
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Skills;