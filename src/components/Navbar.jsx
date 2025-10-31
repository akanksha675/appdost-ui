import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-5 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-md sticky top-0 z-50">
      <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
        <Link to="/">AppDost</Link>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 font-medium">
        <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
        <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
        <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-800" />
          )}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-indigo-600 dark:text-indigo-400">
          {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 text-center py-4 shadow-md md:hidden">
          <Link to="/" className="block py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
