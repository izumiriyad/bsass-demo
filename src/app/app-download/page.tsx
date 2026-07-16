import type { Metadata } from "next";
import { AppDownloadBanner } from "@/components/bj88/app-download-banner";

export const metadata: Metadata = { title: "Download App" };

const FEATURES = [
  { emoji: "🔐", title: "Biometric Auth", desc: "Login securely with fingerprint or face recognition." },
  { emoji: "👆", title: "One-Tap Betting", desc: "Place bets instantly with a single tap. No multi-step forms." },
  { emoji: "📺", title: "Live Streaming", desc: "Watch cricket and casino games live right in the app." },
  { emoji: "⚡", title: "Instant Deposits", desc: "Deposit via bKash, Nagad, or Rocket in seconds." },
  { emoji: "🔔", title: "Push Notifications", desc: "Get instant alerts for wins, promos, and live matches." },
  { emoji: "📴", title: "Offline Mode", desc: "Browse game catalog and check results even offline." },
];

const ANDROID_STEPS = [
  "Tap the Android download button above or scan the QR code with your phone camera.",
  "Once the APK file is downloaded, open it from your notifications or Downloads folder.",
  "If prompted, enable 'Install from unknown sources' in your security settings, then tap Install.",
  "After installation completes, open the BSL Gaming app, log in or register, and start playing.",
];

const IOS_STEPS = [
  "Tap the iOS download button above or scan the QR code with your iPhone camera.",
  "When prompted, tap 'Install' to add the BSL Gaming app to your home screen.",
  "After installation, open the app, log in or register, and start playing immediately.",
];

const REQUIREMENTS = [
  { platform: "Android", version: "Android 7.0 (Nougat) or higher", size: "45 MB", ram: "2 GB RAM minimum" },
  { platform: "iOS", version: "iOS 13.0 or higher", size: "52 MB", ram: "2 GB RAM minimum" },
];

const FAQS = [
  {
    q: "Is the BSL Gaming app free to download?",
    a: "Yes, the BSL Gaming app is completely free to download for both Android and iOS devices. There are no charges for installation or updates.",
  },
  {
    q: "Is the app safe and secure?",
    a: "Absolutely. The app uses 256-bit SSL encryption, biometric authentication, and the same security standards as our website. Your data and funds are fully protected.",
  },
  {
    q: "Can I use bKash and Nagad in the app?",
    a: "Yes, the app supports all local payment methods including bKash, Nagad, Rocket, bank transfer, and crypto. Deposits and withdrawals are instant.",
  },
  {
    q: "Do I need a separate account for the app?",
    a: "No. Your BSL Gaming account works across the website and the app. Simply log in with the same credentials on any device.",
  },
];

export default function AppDownloadPage() {
  return (
    <div className="space-y-6 px-3 py-4 sm:px-5 sm:py-6">
      <AppDownloadBanner />

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">✨</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            App Features
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4 transition hover:border-[#383b3f]"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{f.emoji}</span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#f0f0f0]">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af]">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">📲</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Installation Guide
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <h3 className="text-base font-bold text-[#f0f0f0]">Android</h3>
            </div>
            <ol className="space-y-3">
              {ANDROID_STEPS.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#008d5b] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-xs leading-relaxed text-[#9ca3af]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl">🍎</span>
              <h3 className="text-base font-bold text-[#f0f0f0]">iOS</h3>
            </div>
            <ol className="space-y-3">
              {IOS_STEPS.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#008d5b] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-xs leading-relaxed text-[#9ca3af]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">⚙️</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            System Requirements
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#2a2c30] bg-[#1b1c1e]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#2a2c30] bg-[#242628] text-[10px] uppercase tracking-wider text-[#6b7280]">
                <th className="px-4 py-3 font-semibold">Platform</th>
                <th className="px-4 py-3 font-semibold">OS Version</th>
                <th className="px-4 py-3 font-semibold">App Size</th>
                <th className="px-4 py-3 font-semibold">RAM</th>
              </tr>
            </thead>
            <tbody>
              {REQUIREMENTS.map((r) => (
                <tr
                  key={r.platform}
                  className="border-b border-[#2a2c30]/60 bg-[#1b1c1e]"
                >
                  <td className="px-4 py-3 font-bold text-[#f0f0f0]">
                    {r.platform}
                  </td>
                  <td className="px-4 py-3 text-[#9ca3af]">{r.version}</td>
                  <td className="px-4 py-3 text-[#9ca3af]">{r.size}</td>
                  <td className="px-4 py-3 text-[#9ca3af]">{r.ram}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="section-title-bar" />
          <span className="text-lg">❓</span>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-2">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-4"
            >
              <h3 className="text-sm font-bold text-[#f0f0f0]">{faq.q}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#9ca3af]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
