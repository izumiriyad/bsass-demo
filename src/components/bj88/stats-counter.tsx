const STATS = [
  { value: "2000+", label: "Games Selection" },
  { value: "9998+", label: "Daily Active Players" },
  { value: "24/7", label: "Customer Support" },
  { value: "98.8%", label: "Satisfied Members" },
];

export function StatsCounter() {
  return (
    <section className="rounded-xl border border-[#2a2c30] bg-gradient-to-r from-[#1b1c1e] to-[#242628] p-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-extrabold text-[#ffdf19] sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs text-[#9ca3af] sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
