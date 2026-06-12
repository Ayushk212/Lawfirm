import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1C35] pt-24 pb-12 text-[#F5F2EA] border-t-8 border-[#B9975B]">
      <div className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        <div className="lg:col-span-1">
          <Link to="/" className="shrink-0 mb-6 block w-max">
            <img 
              src="/logo_light.png" 
              alt="Vadhera & Associates Logo" 
              className="h-16 md:h-20 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
            />
          </Link>
          <p className="text-[#F5F2EA]/60 font-lora leading-relaxed text-sm mb-6">
            Providing uncompromising legal advocacy and advisory services with a legacy of excellence since 1998.
          </p>
          <div className="font-cinzel text-[#B9975B] font-bold tracking-widest text-sm">Est. 1998</div>
        </div>

        <div>
          <h4 className="font-cinzel font-bold text-lg mb-6 border-b border-[#B9975B]/30 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-4 font-sans text-sm tracking-wide text-[#F5F2EA]/80">
            <li><Link to="/" className="hover:text-[#B9975B] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#B9975B] transition">The Firm</Link></li>
            <li><Link to="/practice-areas" className="hover:text-[#B9975B] transition">Practice Areas</Link></li>
            <li><Link to="/attorneys" className="hover:text-[#B9975B] transition">Our Professionals</Link></li>
            <li><Link to="/contact" className="hover:text-[#B9975B] transition">Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel font-bold text-lg mb-6 border-b border-[#B9975B]/30 pb-2 inline-block">Practice Areas</h4>
          <ul className="space-y-4 font-sans text-sm tracking-wide text-[#F5F2EA]/80">
            <li><Link to="/practice-areas" className="hover:text-[#B9975B] transition">Civil Litigation</Link></li>
            <li><Link to="/practice-areas" className="hover:text-[#B9975B] transition">Corporate Counsel</Link></li>
            <li><Link to="/practice-areas" className="hover:text-[#B9975B] transition">Estate Planning</Link></li>
            <li><Link to="/practice-areas" className="hover:text-[#B9975B] transition">White Collar Defense</Link></li>
            <li><Link to="/practice-areas" className="hover:text-[#B9975B] transition">Appeals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel font-bold text-lg mb-6 border-b border-[#B9975B]/30 pb-2 inline-block">Contact</h4>
          <ul className="space-y-5 font-sans text-sm tracking-wide text-[#F5F2EA]/80">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#B9975B] shrink-0 mt-0.5" />
              <span className="leading-relaxed">123 Legal Avenue, Suite 400<br/>New Delhi, ND 110001</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#B9975B] shrink-0" />
              <span><a href="tel:+919876543210" className="hover:text-[#B9975B] transition">+91 98765 43210</a></span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#B9975B] shrink-0" />
              <span><a href="mailto:contact@vadheraassociates.com" className="hover:text-[#B9975B] transition">contact@vadheraassociates.com</a></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-[#F5F2EA]/50 tracking-wider">
          <p>© {new Date().getFullYear()} Vadhera & Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#B9975B] transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#B9975B] transition">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-[#B9975B] transition">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
