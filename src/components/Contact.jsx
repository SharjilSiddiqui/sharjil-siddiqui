import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Github, Instagram, X } from "lucide-react";

function Contact({ setShowContact }) {
  const contactInfo = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sharjil-siddiqui-5b96982b1",
      link: "https://linkedin.com/in/sharjil-siddiqui-5b96982b1/",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sharjilsidd187@gmail.com",
      link: "mailto:sharjilsidd187@gmail.com",
      color: "from-cyan-400 to-sky-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9552190178",
      link: "tel:+919552190178",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SharjilSiddiqui",
      link: "https://github.com/SharjilSiddiqui",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@sharjil_473",
      link: "https://instagram.com/sharjil_473",
      color: "from-cyan-400 to-sky-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
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
        onClick={() => setShowContact(false)}
      />

      {/* Animated Modal */}
      <motion.section
        initial={{ scale: 0.8, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] max-w-3xl
                   bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95
                   backdrop-blur-xl border border-sky-500/30
                   py-10 px-6 sm:px-8 md:px-12
                   text-white rounded-2xl shadow-2xl shadow-sky-500/20 z-50
                   max-h-[90vh] overflow-y-auto"
      >
        {/* Background Orbs */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
          />
        </div>

        {/* Close Button */}
        <motion.button
          onClick={() => setShowContact(false)}
          className="absolute top-5 right-5 p-2 rounded-full 
                     bg-white/10 hover:bg-white/20 backdrop-blur-sm
                     border border-white/20 transition-all duration-300
                     group z-10"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6 text-white group-hover:text-sky-300 transition-colors" />
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8 relative"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold 
                         bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 
                         bg-clip-text text-transparent mb-3">
            Let's Connect 💬
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
            className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg"
          >
            I'd love to collaborate or just have a friendly chat!
          </motion.p>
        </motion.div>

        {/* Contact Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 relative"
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 sm:p-5 
                           bg-white/5 backdrop-blur-sm border border-white/10
                           rounded-xl hover:bg-white/10 hover:border-sky-500/50
                           transition-all duration-300 group cursor-pointer
                           relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${contact.color} 
                             shadow-lg group-hover:shadow-sky-500/50 transition-shadow`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors truncate">
                    {contact.value}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <motion.div
                  initial={{ x: -5, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="text-sky-400 text-xl"
                >
                  →
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
              />
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Contact;