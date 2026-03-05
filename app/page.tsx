import type { Metadata } from "next";
import LandingNavbar from "@/components/LandingNavbar";
import BentoFeatures from "@/components/BentoFeatures";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Storer - Secure Cloud Storage for Teams",
};

export default function LandingPage() {
  return (
    <div className="bg-white font-display text-slate-900 selection:bg-primary/20">
      <LandingNavbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-slate-900">
            Your files. Everywhere. <br /><span className="text-primary">Always.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of secure cloud storage. Built for speed, end-to-end security, and seamless team collaboration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/sign-up" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/25 hover:scale-105 transition-transform text-center">
              Start for Free
            </a>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-5xl mx-auto mt-20 relative">
          <div className="glass p-4 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 min-h-[22rem] md:min-h-0 md:aspect-[16/9] flex flex-col md:flex-row">
              <aside className="w-48 border-r border-slate-200 p-4 hidden md:block">
                <div className="space-y-4">
                  <div className="h-2 w-24 bg-primary/20 rounded"></div>
                  <div className="h-8 w-full bg-primary/10 rounded-lg"></div>
                  <div className="h-8 w-full bg-white border border-slate-200 rounded-lg"></div>
                  <div className="h-8 w-full bg-white border border-slate-200 rounded-lg"></div>
                </div>
              </aside>
              <main className="flex-1 p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-4">folder</span>
                    <p className="font-bold text-slate-900">Documents</p>
                    <p className="text-xs text-slate-500">1,204 items</p>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-4">image</span>
                    <p className="font-bold text-slate-900">Images</p>
                    <p className="text-xs text-slate-500">458 items</p>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-4">video_library</span>
                    <p className="font-bold text-slate-900">Media</p>
                    <p className="text-xs text-slate-500">82 items</p>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 space-y-3">
                  <div className="h-10 sm:h-12 w-full bg-white border border-slate-200 rounded-lg flex items-center px-4 gap-4">
                    <span className="material-symbols-outlined text-primary text-sm">description</span>
                    <div className="h-2 w-32 bg-slate-200 rounded"></div>
                    <div className="h-2 w-20 bg-slate-100 rounded ml-auto"></div>
                  </div>
                  <div className="h-10 sm:h-12 w-full bg-white border border-slate-200 rounded-lg flex items-center px-4 gap-4 opacity-50">
                    <span className="material-symbols-outlined text-primary text-sm">description</span>
                    <div className="h-2 w-full max-w-48 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid Features */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="features">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart features for modern work</h2>
          <p className="text-slate-500">Everything you need to manage your files at scale.</p>
        </div>
        <BentoFeatures />
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Three steps to organized bliss</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connectors */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-primary/10 -z-10"></div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white border border-slate-200 card-shadow rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">1. Upload</h3>
              <p className="text-slate-500 text-sm">Drag and drop files to your secure vault with high-speed encryption.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white border border-slate-200 card-shadow rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">folder_managed</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">2. Organize</h3>
              <p className="text-slate-500 text-sm">Sort with tags, folders, and AI-powered smart collections.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white border border-slate-200 card-shadow rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">devices</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">3. Access</h3>
              <p className="text-slate-500 text-sm">Instantly sync and preview your files from any device, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Stats / Dashboard Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-slate-200 card-shadow rounded-[2rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-10 lg:p-20">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">2 GB free. Need more? We've got you.</h2>
                <p className="text-slate-500 mb-8">Every account starts with 2 GB at no cost. Running low? Upgrade to a paid plan — or place an order and we'll ship a physical SSD straight to your address.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-900 font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    2 GB free storage for every user
                  </li>
                  <li className="flex items-center gap-3 text-slate-900 font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Upgrade anytime for more cloud space
                  </li>
                  <li className="flex items-center gap-3 text-slate-900 font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Order a physical SSD — delivered to your door
                  </li>
                </ul>
                <a href="#pricing" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity text-sm">
                  <span className="material-symbols-outlined text-sm">storage</span>
                  See storage plans
                </a>
              </div>
              <div className="bg-slate-50 border-t border-slate-100 lg:border-t-0 lg:border-l p-6 sm:p-10 md:p-12">
                <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-start sm:items-center justify-between gap-3 mb-8">
                    <h4 className="font-bold text-slate-900">Usage Summary</h4>
                    <span className="text-amber-500 text-sm font-bold">90% Used</span>
                  </div>
                  <div className="flex items-center justify-center mb-10">
                    <div className="relative size-40 sm:size-48">
                      <svg className="size-full" viewBox="0 0 36 36">
                        <circle className="stroke-slate-100" cx="18" cy="18" fill="none" r="15.9" strokeWidth="3"></circle>
                        <circle className="stroke-primary" cx="18" cy="18" fill="none" r="15.9" strokeDasharray="90, 100" strokeLinecap="round" strokeWidth="3"></circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[2rem] sm:text-3xl font-black text-slate-900">1.8 GB</span>
                        <span className="text-xs sm:text-sm text-slate-500">of 2 GB free</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-slate-600">Images</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">820 MB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-slate-600">Documents</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">610 MB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-amber-500"></div>
                        <span className="text-sm text-slate-600">Videos</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">370 MB</span>
                    </div>
                    <div className="mt-4 p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                      <span className="material-symbols-outlined text-amber-500 text-lg shrink-0">warning</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-amber-700">Almost full!</p>
                        <p className="text-xs text-amber-600">Upgrade or order an SSD to keep going.</p>
                      </div>
                      <a href="#pricing" className="w-full sm:w-auto text-center shrink-0 text-xs font-bold text-white bg-primary px-3 py-2 rounded-lg hover:opacity-90 transition-opacity">Upgrade</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsMarquee />

      <PricingSection />

      <FAQSection />

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Start storing smarter today.</h2>
            <p className="text-slate-300 text-lg mb-12 max-w-xl mx-auto">Join 10+ users who have already upgraded their workflow with Storer.</p>
            <a href="/sign-up" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl shadow-primary/20">
              Get Started — It&apos;s Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">cloud_done</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">Storer</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">Simple, secure cloud storage — built for real people.</p>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#features">Features</a></li>
              <li><a className="hover:text-primary transition-colors" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-primary transition-colors" href="#faq">FAQ</a></li>
              <li><a className="hover:text-primary transition-colors" href="/sign-up">Sign Up</a></li>
              <li><a className="hover:text-primary transition-colors" href="/sign-in">Sign In</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-10 border-t border-slate-200 gap-6">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Storer. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">chat</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">share</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
