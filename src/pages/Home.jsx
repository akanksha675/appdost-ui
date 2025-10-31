import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    { icon: "⚡", title: "Fast Performance", desc: "Optimized for speed and reliability." },
    { icon: "🎨", title: "Beautiful Design", desc: "Modern and elegant layouts." },
    { icon: "🔒", title: "Secure Platform", desc: "Privacy and security you can trust." },
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">
          Empower Your Digital Journey
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
          Build, design, and deploy faster with AppDost — your tech companion for smarter solutions.
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>
      </motion.section>

      <section className="grid md:grid-cols-3 gap-8 px-10 py-16 bg-white/60 dark:bg-gray-900/50">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-5xl mb-3">{f.icon}</div>
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </section>
    </>
  );
}
