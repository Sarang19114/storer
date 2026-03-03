"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  const proMonthly = 999;
  const proYearly = 799; // ₹799/mo billed yearly

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Simple, transparent pricing</h2>
        <div className="inline-flex items-center glass p-1 rounded-full">
          <button
            onClick={() => setYearly(false)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              !yearly ? "bg-primary text-white shadow" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              yearly ? "bg-primary text-white shadow" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            Yearly{" "}
            <span className={`text-[10px] font-black tracking-wide ${yearly ? "text-emerald-200" : "text-emerald-500"}`}>
              SAVE 20%
            </span>
          </button>
        </div>
        {yearly && (
          <p className="mt-3 text-sm text-emerald-600 font-medium animate-fade-in">
            Billed as ₹{proYearly * 12}/year — you save ₹{(proMonthly - proYearly) * 12}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Starter */}
        <div className="bg-white border border-slate-200 card-shadow p-8 rounded-3xl flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-slate-900">Starter</h3>
          <p className="text-slate-500 text-sm mb-6">Perfect for individuals</p>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-black text-slate-900">₹0</span>
            <span className="text-slate-500">/mo</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-600 text-sm">
              <span className="material-symbols-outlined text-primary text-sm">check</span>
              2 GB Cloud Storage
            </li>
            <li className="flex items-center gap-3 text-slate-600 text-sm">
              <span className="material-symbols-outlined text-primary text-sm">check</span>
              Basic Sharing
            </li>
            <li className="flex items-center gap-3 text-slate-600 text-sm">
              <span className="material-symbols-outlined text-primary text-sm">check</span>
              Mobile App
            </li>
          </ul>
          <Link
            href="/sign-up"
            className="w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors text-center"
          >
            Get Started
          </Link>
        </div>

        {/* Pro */}
        <div className="bg-white border-2 border-primary card-shadow p-8 rounded-3xl flex flex-col relative">
          <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase text-white tracking-widest">
            {yearly ? "Best Value" : "Most Popular"}
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Pro</h3>
          <p className="text-slate-500 text-sm mb-6">For power users &amp; freelancers</p>

          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-black text-slate-900">
              ₹{yearly ? proYearly : proMonthly}
            </span>
            <span className="text-slate-500">/mo</span>
          </div>
          {yearly && (
            <p className="text-xs text-emerald-600 font-semibold mb-6 line-through-wrapper">
              <span className="text-slate-400 line-through">₹{proMonthly}/mo</span>
              <span className="ml-2 text-emerald-600">billed yearly</span>
            </p>
          )}
          {!yearly && <div className="mb-6" />}

          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-900 text-sm font-medium">
              <span className="material-symbols-outlined text-primary text-sm">check</span>
              50 GB Cloud Storage
            </li>
            <li className="flex items-center gap-3 text-slate-900 text-sm font-medium">
              <span className="material-symbols-outlined text-primary text-sm">check</span>
              Advanced Security
            </li>
            <li className="flex items-center gap-3 text-slate-900 text-sm font-medium">
              <span className="material-symbols-outlined text-primary text-sm">check</span>
              Password-Protected Links
            </li>
            <li className="flex items-center gap-3 text-slate-900 text-sm font-medium">
              <span className="material-symbols-outlined text-primary text-sm">check</span>
              Priority Support
            </li>
            <li className="flex items-center gap-3 text-slate-900 text-sm font-medium">
              <span className="material-symbols-outlined text-amber-500 text-sm">hard_drive</span>
              Order a physical SSD to your door
            </li>
          </ul>

          <Link
            href={`/pay?billing=${yearly ? "yearly" : "monthly"}`}
            className="w-full py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity text-center"
          >
            Go Pro — ₹{yearly ? `${proYearly}/mo` : `${proMonthly}/mo`}
          </Link>
        </div>
      </div>
    </section>
  );
}
