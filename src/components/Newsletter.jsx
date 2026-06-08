import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#111A2E] py-16 px-6 border-t border-[#C8A24A]/20">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold">
          Stay Updated
        </h2>

        <p className="text-slate-400 mt-3">
          Legal insights delivered to your inbox.
        </p>

        <form className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            className="px-5 py-3 rounded-full bg-[#0B1220] border border-slate-700 focus:ring-2 focus:ring-[#C8A24A] outline-none"
          />

          <button className="bg-[#C8A24A] text-black px-8 py-3 rounded-full hover:bg-[#E2C46B] transition">
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}