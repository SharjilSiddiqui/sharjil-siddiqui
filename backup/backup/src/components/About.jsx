import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-4">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-cyan-500/15 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl"
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
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
              className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Image Container */}
            <div className="relative">
              <motion.img
                src="/me.JPG"
                alt="Sharjil Siddiqui"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 
                           rounded-full object-cover border-4 border-sky-500/50 
                           shadow-2xl shadow-sky-500/30 z-10"
              />
              
              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-sky-500/20 border-dashed"
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
                           bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 
                           bg-clip-text text-transparent cursor-default
                           drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              >
                Hi, I'm Sharjil Siddiqui!
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium"
              >
                A passionate Web Developer building beautiful and functional web applications.
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
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/80 leading-relaxed"
              >
                Hello! I'm Sharjil Siddiqui, a dedicated web developer with a keen eye for detail and a passion for creating engaging and user-friendly digital experiences. My journey into web development began with a fascination for how interactive websites are built leading me to dive deep into HTML, CSS, and JavaScript. Over time, I honed my skills and embraced modern frameworks, with React.js becoming my tool of choice for building dynamic single-page applications. I love solving complex problems and transforming ideas into real-world solutions.
              </motion.p>

              {/* Floating Particles on Hover */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-sky-400 rounded-full blur-sm animate-pulse opacity-50" />
              <div className="absolute bottom-10 left-10 w-1 h-1 bg-cyan-400 rounded-full blur-sm animate-pulse opacity-50" style={{ animationDelay: "1s" }} />
              <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-sky-300 rounded-full blur-sm animate-pulse opacity-50" style={{ animationDelay: "2s" }} />
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.03),transparent_70%)] pointer-events-none" />
    </section>
  );
}

export default About;