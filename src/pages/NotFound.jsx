import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="text-center py-20 px-8">
      <h1 className="text-7xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">404</h1>
      <p className="text-lg mb-6">Page not found</p>
      <Link to="/" className="text-indigo-600 dark:text-indigo-400 underline">
        Go back home
      </Link>
    </section>
  );
}
