const FEATURES = [
  { emoji: "🔒", title: "Unmatched Privacy & Security", desc: "Your peace of mind is our top priority. We ensure your gameplay is shielded with the highest level of security." },
  { emoji: "🎁", title: "Play for Free, Win Big", desc: "Join the excitement with a chance to share in our massive monthly prize pool, starting at ৳8,888." },
  { emoji: "💬", title: "24/7 Five-Star Support", desc: "Our dedicated team is here for you around the clock. Live Chat is just a click away, 24/7." },
  { emoji: "⚡", title: "Swift & Secure Transactions", desc: "We've partnered with bKash, Nagad, and Rocket for fast, safe, and hassle-free deposits and withdrawals." },
  { emoji: "🎮", title: "Latest Gaming Trends", desc: "We constantly collaborate with international vendors to bring you the latest and most thrilling games." },
  { emoji: "🌏", title: "Global Footprint, Local Experience", desc: "BSL Gaming is your trusted gaming destination, serving enthusiasts across Bangladesh with local BDT support." },
];

export function WhyChoose() {
  return (
    <section className="space-y-3">
      <div className="text-center space-y-1">
        <h2 className="text-lg font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-xl">Why Choose BSL?</h2>
        <p className="text-xs text-[#9ca3af] sm:text-sm">Discover the thrill of BSL Gaming: Where security meets excitement</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="card-glow hover-lift rounded-xl border border-[#2a2c30] bg-[#1b1c1e] p-5 space-y-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#242628] text-xl">{f.emoji}</span>
            <h3 className="text-sm font-bold text-[#f0f0f0]">{f.title}</h3>
            <p className="text-xs leading-relaxed text-[#9ca3af]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
