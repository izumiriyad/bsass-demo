import Link from "next/link";

const APP_FEATURES = [
  "Biometric login for instant access",
  "Intuitive interface, regularly updated",
  "Exclusive mobile-only promotions",
  "Push notifications for live events",
];

export function AppQRSection() {
  return (
    <section className="rounded-xl border border-[#2a2c30] bg-gradient-to-br from-[#1b1c1e] to-[#242628] p-6">
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-title-bar" />
            <span className="text-lg">📱</span>
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-base">Download the BSL App</h2>
          </div>
          <p className="text-sm text-[#9ca3af]">
            Experience the innovative biometrics login feature, intuitive interface and regularly updated content. Download the BSL Gaming app today!
          </p>
          <ul className="space-y-1.5">
            {APP_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-[#f0f0f0]">
                <span className="text-[#22c55e]">✓</span> {f}
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Link href="/app-download" className="btn-primary rounded-lg px-4 py-2 text-xs font-semibold">Download Now</Link>
            <Link href="/app-download" className="rounded-lg border border-[#2a2c30] bg-[#1b1c1e] px-4 py-2 text-xs font-semibold text-[#f0f0f0] transition hover:border-[#383b3f]">Learn More</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-xl border-2 border-[#ffdf19]/30 bg-white p-4">
            <div className="grid grid-cols-8 gap-0.5">
              {Array.from({ length: 64 }).map((_, i) => {
                const pattern = (i * 7 + 13) % 3 === 0 || (i % 8 === 0) || (i % 8 === 7) || (i < 8) || (i >= 56);
                return (
                  <div key={i} className={`h-3 w-3 ${pattern ? "bg-black" : "bg-white"}`} />
                );
              })}
            </div>
            <p className="mt-2 text-center text-[10px] font-bold text-black">Scan to Download</p>
          </div>
        </div>
      </div>
    </section>
  );
}
