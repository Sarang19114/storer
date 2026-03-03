"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How secure is my data on Storer?",
    a: "We use AES-256 end-to-end encryption for all files. Your data is encrypted before it leaves your device and only you hold the keys.",
  },
  {
    q: "Can I share files with non-users?",
    a: "Yes! You can generate a shareable link for any file. Recipients don't need a Storer account to view or download it. Pro users can also add password protection and expiry dates.",
  },
  {
    q: "What happens if I exceed my 2 GB limit?",
    a: "You'll get a warning when you're close to your limit. You can upgrade to Pro for 50 GB of cloud storage, or place an order for a physical SSD delivered straight to your address.",
  },
  {
    q: "Do you offer a student discount?",
    a: "Yes! Students with a valid .edu email get 30% off the Pro plan. Reach out to us and we'll manually apply the discount to your account.",
  },
  {
    q: "How does the physical SSD ordering work?",
    a: "Pro users can place an order through the dashboard. Just provide your shipping address and we'll source and deliver an SSD to you. Delivery times depend on your location.",
  },
  {
    q: "How long does manual Pro activation take?",
    a: "After we confirm your payment via UPI QR, your account is typically upgraded within 24 hours. You'll receive a confirmation on your registered email.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto" id="faq">
      <h2 className="text-3xl font-bold text-center mb-16">Common Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className={`bg-white border card-shadow rounded-xl overflow-hidden cursor-pointer transition-colors ${
                isOpen ? "border-primary/30" : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="flex justify-between items-center p-5 gap-4">
                <h4 className={`font-bold text-sm md:text-base ${isOpen ? "text-primary" : "text-slate-900"}`}>
                  {faq.q}
                </h4>
                <span
                  className={`material-symbols-outlined shrink-0 transition-transform duration-300 ${
                    isOpen ? "text-primary rotate-180" : "text-slate-400"
                  }`}
                >
                  expand_more
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
