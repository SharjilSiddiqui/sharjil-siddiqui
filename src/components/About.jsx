import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Rocket } from "lucide-react";

function About({ setShowProjects, setShowContact }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8FAFC] py-20 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/70 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-blue-200/60 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-cyan-100/70 rounded-full blur-3xl"
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:96px_96px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Glow Ring Animation */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-200 via-white to-blue-200 blur-lg opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Image Container */}
            <div className="relative">
              <motion.img
                src="/me.JPG"
                alt="Sharjil Siddiqui"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 
                           rounded-full object-cover border-4 border-white 
                           shadow-2xl shadow-slate-300/70 z-10"
              />

              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-sky-300/40 border-dashed"
                style={{ padding: "1rem" }}
              />
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-3xl text-center md:text-left"
          >
            {/* Content */}
            <div className="relative space-y-6">
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
                           bg-gradient-to-r from-slate-950 via-sky-600 to-blue-700 
                           bg-clip-text text-transparent cursor-default
                           drop-shadow-[0_12px_32px_rgba(14,165,233,0.16)]"
              >
                Hi, I'm Sharjil Siddiqui!
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 font-medium"
              >
                Software Engineer
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed"
              >
                Software Engineer with experience building and testing
                production SaaS applications. I work with React, Vue/Nuxt,
                JavaScript, Tailwind CSS, REST APIs, and modern development
                workflows while collaborating with distributed engineering
                teams.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed"
              >
                I am pursuing a B.Tech in AI & Data Science and currently work
                as a Frontend Engineer Lead at Aortem Inc. My focus is building
                scalable web applications with clean UI, thoughtful user
                experience, and reliable release validation in remote
                engineering environments.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start"
              >
                <motion.button
                  type="button"
                  onClick={() => setShowProjects(true)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg shadow-sky-200 hover:shadow-sky-300 transition-all duration-300"
                >
                  <Rocket className="w-4 h-4" />
                  View Projects
                </motion.button>
                <motion.a
                  href="/Sharjil_Siddiqui_Resume.txt"
                  download
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-sky-200 text-sky-700 font-semibold shadow-sm hover:bg-sky-50 hover:border-sky-300 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
                <motion.button
                  type="button"
                  onClick={() => setShowContact(true)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.button>
              </motion.div>

              {/* Floating Particles on Hover */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-sky-400 rounded-full blur-sm animate-pulse opacity-40" />
              <div
                className="absolute bottom-10 left-10 w-1 h-1 bg-cyan-400 rounded-full blur-sm animate-pulse opacity-40"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-20 right-20 w-1.5 h-1.5 bg-sky-300 rounded-full blur-sm animate-pulse opacity-40"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Wave Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 h-px"
        >
          <div className="h-full bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
        </motion.div>
      </div>

      {/* Ambient Light Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none" />
    </section>
  );
}

export default About;
