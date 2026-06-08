export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-white">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0B1220]/80 to-[#0B1220]" />

        <div className="relative z-10 text-center max-w-4xl px-6">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Justice. Integrity. Results.
          </h1>

          <p className="mt-8 text-slate-300 text-lg md:text-xl leading-relaxed">
            Trusted legal representation built on experience, discipline, and results.
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">

            <button className="bg-[#C8A24A] text-black px-10 py-4 rounded-full hover:bg-[#E2C46B] transition">
              Book Consultation
            </button>

            <button className="border border-[#C8A24A] px-10 py-4 rounded-full hover:bg-[#C8A24A] hover:text-black transition">
              Practice Areas
            </button>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-32 bg-[#0B1220]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-16 px-6">

          <div>
            <h3 className="text-5xl font-bold text-[#C8A24A]">10+</h3>
            <p className="text-slate-400 mt-4">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#C8A24A]">500+</h3>
            <p className="text-slate-400 mt-4">Cases Handled</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#C8A24A]">98%</h3>
            <p className="text-slate-400 mt-4">Success Rate</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 px-6 bg-[#111A2E]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-20">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {["Strategy", "Trust", "Results"].map((item, i) => (
              <div
                key={i}
                className="p-10 bg-[#0B1220] rounded-2xl border border-slate-800 hover:border-[#C8A24A] transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  High-quality legal representation with precision and care.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-[#0B1220] px-6">

        <h2 className="text-5xl font-bold">
          Need Legal Assistance?
        </h2>

        <p className="text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed">
          Speak with an experienced attorney today and get clarity on your legal situation.
        </p>

        <button className="mt-12 bg-[#C8A24A] text-black px-12 py-4 rounded-full hover:bg-[#E2C46B] transition">
          Schedule Consultation
        </button>

      </section>
    </>
  );
}