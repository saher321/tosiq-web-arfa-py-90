import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="text-lg font-semibold tracking-tight text-slate-900">LMS</a>
        <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
          <Link to="/dashboard" className="transition hover:text-slate-900">Dashboard</Link>
          <Link to="/departments" className="transition hover:text-slate-900">Departments</Link>
          <Link to="/help" className="transition hover:text-slate-900">Help</Link>
        </nav>
        <a href="#signin" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">Sign in</a>
      </div>
    </header>
  );
}

export default Navbar;
