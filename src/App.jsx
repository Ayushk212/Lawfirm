import { motion } from "framer-motion";
import { Scale, Phone, Mail, MapPin, Shield, Gavel } from "lucide-react";

export default function App() {
  const services = [
    "[CIVIL LAW]",
    "[CRIMINAL DEFENSE]",
    "[FAMILY LAW]",
    "[CORPORATE LAW]",
    "[PROPERTY LAW]",
    "[LEGAL CONSULTATION]",
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* NAV */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur border-b"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-xl font-bold tracking-wide">
            [LAW FIRM NAME]
          </h1>

          <div className="hidden md:flex gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-black transition">
              About
            </a>
            <a href="#services" className="hover:text-black transition">
              Services
            </a>
            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center text-center px-6 text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl"
        >
          <Gavel className="mx-auto mb-4 text-yellow-400" size={40} />

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Trusted Legal Guidance You Can Rely On
          </h1>

          <p className="text-slate-200 mt-6 text-lg max-w-2xl mx-auto">
            [PROFESSIONAL LEGAL TAGLINE GOES HERE]
          </p>

          <button className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition">
            Book Consultation
          </button>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">About</h2>

          <p className="text-slate-600 leading-relaxed text-lg">
            [ABOUT LAWYER / FIRM DESCRIPTION — EXPERIENCE, VALUES, MISSION]
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Practice Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <Scale className="text-slate-800 mb-3" />

                <h3 className="font-semibold text-lg">{item}</h3>

                <p className="text-sm text-slate-500 mt-2">
                  [SERVICE DESCRIPTION]
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "[TRUST]",
              "[EXPERIENCE]",
              "[CONFIDENTIALITY]",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 border rounded-xl bg-slate-50"
              >
                <Shield className="mx-auto mb-3 text-slate-700" />
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 bg-slate-900 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In Touch
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto">
              Schedule a consultation or reach out for professional legal
              guidance. We are committed to providing clear advice and
              dedicated representation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-yellow-500 transition"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-5">
                <Phone className="text-black" size={24} />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Phone
              </h3>

              <p className="text-slate-300">
                [PHONE NUMBER]
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-yellow-500 transition"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-5">
                <Mail className="text-black" size={24} />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Email
              </h3>

              <p className="text-slate-300">
                [EMAIL ADDRESS]
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-yellow-500 transition"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-5">
                <MapPin className="text-black" size={24} />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Office Location
              </h3>

              <p className="text-slate-300">
                [OFFICE ADDRESS]
              </p>
            </motion.div>
          </div>

          <div className="mt-16 bg-yellow-500 from-yellow-500 to-yellow-400 rounded-3xl p-10 text-center text-black shadow-xl">
            <h3 className="text-3xl font-bold mb-3">
              Need Legal Assistance?
            </h3>

            <p className="mb-6">
              Book a confidential consultation and discuss your legal matter
              with confidence.
            </p>

            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-white font-semibold text-lg">
              [LAW FIRM NAME]
            </h3>

            <p className="text-sm mt-1">
              Trusted Legal Guidance
            </p>
          </div>

          <p className="text-sm mt-4 md:mt-0">
            © [YEAR] [LAW FIRM NAME]. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}