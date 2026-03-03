"use client";

import { useState } from "react";
import Image from "next/image";

export default function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
        <div className="max-w-7xl w-full glass rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/assets/icons/blogo.png" alt="Storer Logo" width={100} height={100} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#pricing">Pricing</a>
            <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#faq">FAQs</a>
            <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#about">About</a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/sign-in" className="text-sm font-medium text-slate-600 hover:text-primary">Log in</a>
            <a href="/sign-up" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20">
              Get Started Free
            </a>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-5 bg-slate-700 rounded transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-5 bg-slate-700 rounded transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-5 bg-slate-700 rounded transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-40 px-6 transition-all duration-300 md:hidden ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="glass rounded-2xl px-6 py-6 flex flex-col gap-5 shadow-xl">
          <a
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            href="#features"
            onClick={() => setOpen(false)}
          >
            Features
          </a>
          <a
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            href="#pricing"
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>
          <a
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            href="#faq"
            onClick={() => setOpen(false)}
          >
            FAQs
          </a>
          <a
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            href="#about"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <hr className="border-slate-200" />
          <a href="/sign-in" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">
            Log in
          </a>
          <a
            href="/sign-up"
            className="w-full text-center bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
          >
            Get Started Free
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
