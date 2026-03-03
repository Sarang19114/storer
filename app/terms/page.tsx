import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Storer",
};

const LAST_UPDATED = "March 3, 2026";

export default function TermsPage() {
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
        <h1 className="text-4xl font-black text-slate-900 mb-3">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-10 text-sm leading-relaxed text-slate-600">

          <Section title="1. Acceptance of Terms">
            By creating a Storer account or using any part of the Storer service, you agree to be bound by these Terms of Service. If you do not agree, please do not use Storer.
          </Section>

          <Section title="2. The Service">
            Storer provides cloud file storage, organisation, and sharing tools. Features include:
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>2 GB of free cloud storage for every registered user.</li>
              <li>A Pro plan offering 50 GB of cloud storage and additional features.</li>
              <li>Optional physical SSD ordering for Pro users (subject to availability and delivery terms).</li>
            </ul>
          </Section>

          <Section title="3. Account Responsibilities">
            <ul className="list-disc pl-5 space-y-2">
              <li>You must provide a valid email address when registering.</li>
              <li>You are responsible for keeping your account credentials secure.</li>
              <li>You may not share your account with others or create accounts on behalf of third parties without permission.</li>
              <li>You must be at least 13 years old to use Storer.</li>
            </ul>
          </Section>

          <Section title="4. Acceptable Use">
            You agree not to use Storer to store, share, or distribute:
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Illegal content of any kind.</li>
              <li>Malware, viruses, or any harmful software.</li>
              <li>Content that infringes on the intellectual property rights of others.</li>
              <li>Content that harasses, threatens, or harms other individuals.</li>
            </ul>
            We reserve the right to suspend or terminate accounts that violate these rules without prior notice.
          </Section>

          <Section title="5. Storage Limits & Upgrades">
            Free accounts receive 2 GB of storage. If you require more, you must upgrade to the Pro plan. Storage upgrades are processed manually after payment confirmation via UPI. Activation typically occurs within 24 hours.
            <br /><br />
            Physical SSD orders are fulfilled on a best-effort basis. Delivery timelines and availability may vary. Refunds for SSD orders are handled on a case-by-case basis.
          </Section>

          <Section title="6. Payments">
            Pro plan payments are accepted via UPI. By submitting payment, you confirm that you are the authorised account holder for the payment method used. We do not store payment credentials. All plans are billed as described at the time of purchase. Refunds are not guaranteed but may be issued at our discretion within 7 days of payment.
          </Section>

          <Section title="7. Intellectual Property">
            You retain full ownership of all files you upload to Storer. By uploading, you grant Storer a limited licence to store and serve your files solely for the purpose of providing the service. We do not claim any ownership over your content.
          </Section>

          <Section title="8. Service Availability">
            We aim to keep Storer running smoothly but do not guarantee 100% uptime. We may occasionally perform maintenance, and the service may be temporarily unavailable. We are not liable for any loss caused by downtime.
          </Section>

          <Section title="9. Termination">
            You may delete your account at any time. We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, your files will be deleted from our servers within 30 days.
          </Section>

          <Section title="10. Limitation of Liability">
            Storer is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum extent permitted by law, Storer and its operators are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
          </Section>

          <Section title="11. Changes to These Terms">
            We may update these terms from time to time. We will notify you of significant changes via email. Continued use of Storer after changes constitutes acceptance of the updated terms.
          </Section>

          <Section title="12. Contact">
            Questions about these terms? Email us at{" "}
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
