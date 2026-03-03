import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Storer",
};

const LAST_UPDATED = "March 3, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <header className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">cloud_done</span>
            </div>
            <span className="font-bold text-slate-900 tracking-tight">Storer</span>
          </Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-3">Legal</p>
        <h1 className="text-4xl font-black text-slate-900 mb-3">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: {LAST_UPDATED}</p>

        <div className="prose prose-slate max-w-none space-y-10 text-sm leading-relaxed text-slate-600">

          <Section title="1. Who We Are">
            Storer is a cloud storage platform that lets you upload, store, organise, and share files. When we say "Storer", "we", "us", or "our" in this policy we mean the Storer service and its operators.
          </Section>

          <Section title="2. What Information We Collect">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-slate-800">Account data</strong> — your name and email address when you sign up.</li>
              <li><strong className="text-slate-800">Files you upload</strong> — stored securely on our servers solely to provide the service.</li>
              <li><strong className="text-slate-800">Usage data</strong> — pages visited, features used, and basic device/browser information to help us improve Storer.</li>
              <li><strong className="text-slate-800">Payment info</strong> — for Pro upgrades we collect your name, email, and billing cycle. Payment is handled manually via UPI; we do not store any card or bank credentials.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-2">
              <li>To create and maintain your Storer account.</li>
              <li>To store and serve your files back to you.</li>
              <li>To process Pro plan upgrades and activate your account.</li>
              <li>To send you transactional emails (account activation, upgrade confirmations).</li>
              <li>To improve and debug the service.</li>
            </ul>
            We will never sell your data to third parties or use it for advertising.
          </Section>

          <Section title="4. File Storage & Security">
            All files are stored using Appwrite&apos;s managed infrastructure. Access is controlled via Appwrite&apos;s permission system — only you (and users you explicitly share with) can access your files. We strongly recommend not uploading sensitive personal documents unless you understand the sharing settings.
          </Section>

          <Section title="5. Sharing Your Data">
            We do not share your personal information with third parties except:
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Appwrite (infrastructure provider) — to store files and authenticate users.</li>
              <li>When required by law or a valid legal process.</li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            Your account data and files are retained as long as your account is active. You can request deletion of your account and all associated data at any time by contacting us. We will fulfil deletion requests within 7 days.
          </Section>

          <Section title="7. Cookies">
            Storer uses minimal session cookies required for authentication. We do not use tracking or advertising cookies.
          </Section>

          <Section title="8. Your Rights">
            You have the right to access, correct, or delete your personal data at any time. To exercise these rights, reach out to us via email.
          </Section>

          <Section title="9. Changes to This Policy">
            We may update this policy occasionally. Significant changes will be notified via email. Continued use of Storer after changes means you accept the updated policy.
          </Section>

          <Section title="10. Contact">
            Questions about this policy? Email us at{" "}
            <a href="mailto:rastogi.sarang19@gmail.com" className="text-primary hover:underline">
              rastogi.sarang19@gmail.com
            </a>.
          </Section>

        </div>
      </main>

      <footer className="border-t border-slate-200 py-8 px-6 mt-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Storer. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 card-shadow">
      <h2 className="text-base font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
