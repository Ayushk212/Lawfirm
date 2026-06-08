import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-2xl font-bold font-serif">
            Law Firm
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Trusted legal guidance with integrity, professionalism, and results-driven advocacy.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* PRACTICE AREAS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Practice Areas</h3>

          <ul className="space-y-2 text-sm">
            <li>Civil Law</li>
            <li>Criminal Defense</li>
            <li>Family Law</li>
            <li>Corporate Law</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-500" />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-500" />
              <span>contact@lawfirm.com</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-yellow-500 mt-1" />
              <span>Ghaziabad, Uttar Pradesh, India</span>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">

          <p>© {new Date().getFullYear()} Law Firm. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-yellow-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-yellow-400 cursor-pointer">Terms</span>
          </div>

        </div>
      </div>

    </footer>
  );
}