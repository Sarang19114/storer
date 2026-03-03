"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PAYMENT_UPI = "rastogi.sarang2004@oksbi";
const QR_IMAGE = "/assets/images/payment-qr.jpeg";

function PaymentForm() {
  const searchParams = useSearchParams();
  const billing = searchParams.get("billing") === "yearly" ? "yearly" : "monthly";

  const proMonthly = 999;
  const proYearly = 799;
  const price = billing === "yearly" ? proYearly : proMonthly;
  const billedAmount = billing === "yearly" ? proYearly * 12 : proMonthly;
  const currency = "₹";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setLoading(true);
    // Simulate a brief delay then show success
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 grid-bg flex items-center justify-center px-6">
        <div className="bg-white border border-slate-200 card-shadow rounded-3xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-emerald-500 text-3xl">check_circle</span>
          </div>
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">🙏 Jai Guru Ji</p>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Payment Received!</h2>
          <p className="text-slate-500 text-sm mb-6">
            Thanks, <span className="font-semibold text-slate-700">{name}</span>! We&apos;ve noted your payment for the{" "}
            <span className="font-semibold text-primary">Pro ({billing})</span> plan.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-left mb-8">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-500 text-lg mt-0.5">schedule</span>
              <div>
                <p className="text-sm font-semibold text-amber-700">Manual activation in progress</p>
                <p className="text-xs text-amber-600 mt-1">
                  Your account will be upgraded within <strong>24 hours</strong>. We&apos;ll send a confirmation to{" "}
                  <strong>{email}</strong>.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Storer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 grid-bg flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-sm mb-8 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Storer
          </Link>
          <h1 className="text-3xl font-black text-slate-900">Complete your upgrade</h1>
          <p className="text-slate-500 mt-2 text-sm">Scan the QR, fill your details, and we&apos;ll activate your account.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Plan summary + QR */}
          <div className="bg-white border border-slate-200 card-shadow rounded-3xl p-8 flex flex-col gap-6">
            {/* Plan badge */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-black text-primary">Pro Plan</span>
                <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                  {currency}{price}
                  <span className="text-base font-normal text-slate-400">/mo</span>
                </h3>
                {billing === "yearly" && (
                  <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                    Billed as {currency}{billedAmount}/year · Save 20%
                  </p>
                )}
              </div>
              <div className="bg-primary/10 p-3 rounded-xl">
                <span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm border-t border-slate-100 pt-4">
              {[
                "50 GB Cloud Storage",
                "Advanced Security",
                "Password-Protected Links",
                "Priority Support",
                "Order a physical SSD to your door",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-600">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* QR Code */}
            <div className="border-t border-slate-100 pt-4 flex flex-col items-center gap-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Scan to Pay</p>
              <div className="p-3 bg-white border-2 border-slate-200 rounded-2xl shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={QR_IMAGE}
                  alt="Payment QR Code"
                  width={220}
                  height={220}
                  className="rounded-lg"
                />
              </div>
              <p className="text-[11px] text-slate-500 text-center font-medium">
                UPI: <strong className="text-slate-700">{PAYMENT_UPI}</strong>
              </p>
              <p className="text-[11px] text-slate-400 text-center">
                Amount: <strong className="text-slate-600">{currency}{billedAmount}{billing === "yearly" ? "/year" : "/month"}</strong>
              </p>
              <p className="text-xs text-primary font-semibold tracking-wide mt-1">🙏 Jai Guru Ji</p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 card-shadow rounded-3xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-black text-slate-900">Your details</h3>
              <p className="text-slate-500 text-sm mt-1">We&apos;ll activate your account after verifying payment.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Virat Kohli"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-1.5 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="virat.kohli@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <p className="text-[11px] text-slate-400 mt-1.5">Must match your Storer account email.</p>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-1.5 block">
                  Billing Cycle
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 bg-slate-50">
                  <span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
                  <span className="text-sm text-slate-700 font-medium capitalize">{billing}</span>
                  <span className="ml-auto text-sm font-black text-slate-900">
                    {currency}{billedAmount}{billing === "yearly" ? "/yr" : "/mo"}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3">
              {/* Notice */}
              <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
                <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">info</span>
                <p className="text-[11px] text-blue-700 leading-relaxed">
                  After paying via the QR, click <strong>Confirm Payment</strong>. Your account will be manually activated within <strong>24 hours</strong>.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing…
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm">payment</span>
                    I&apos;ve Paid — Confirm
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function PayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      }
    >
      <PaymentForm />
    </Suspense>
  );
}
