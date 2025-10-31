import React from "react";

export default function Contact() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">
        Contact Us
      </h2>
      <form className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border dark:bg-gray-700" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border dark:bg-gray-700" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg border dark:bg-gray-700"></textarea>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
