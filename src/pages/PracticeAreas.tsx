import { motion } from 'motion/react';
import { Scale, Landmark, BookOpen, Shield, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function PracticeAreas() {
  const practices = [
    {
      title: "Civil Litigation",
      icon: Scale,
      desc: "Robust representation in state and federal courts for high-stakes, multi-jurisdictional disputes. Our trial lawyers prepare every case with the expectation of going to trial.",
      services: ["Contract Disputes", "Commercial Arbitration", "Property & Real Estate Disputes", "Torts & Liability Claims"]
    },
    {
      title: "Corporate Counsel",
      icon: Landmark,
      desc: "Authoritative legal advising for corporations and partnerships concerning board governance, strategic mergers, acquisitions, risk management, and regulatory compliance.",
      services: ["Mergers & Acquisitions", "Corporate Governance", "Regulatory Compliance", "Employment Contracts & Policy"]
    },
    {
      title: "Estate Planning",
      icon: BookOpen,
      desc: "Meticulous trust, estate, and asset structuring designed to preserve generational wealth and ensure client legacies are fully carried out without friction.",
      services: ["Wills & Revocable Trusts", "Power of Attorney", "Asset Protection Structuring", "Estate Administration & Probate"]
    },
    {
      title: "White Collar Defense",
      icon: Shield,
      desc: "Strategic defense and representation of corporations and individuals facing investigations, financial fraud, corruption, or regulatory enforcement actions.",
      services: ["Internal Investigations", "FCPA Compliance", "Financial Fraud Defense", "Government Subpoena Response"]
    },
    {
      title: "Appeals & Writ Petitions",
      icon: FileText,
      desc: "Exhaustive legal analysis and brief writing for challenging trial court judgments. We represent clients before high courts and appellate tribunals.",
      services: ["Appellate Briefing", "Writ Petitions", "Supreme Court Advocacy", "Judgment Auditing & Post-trial Motions"]
    }
  ];

  return (
    <div className="w-full bg-[#F5F2EA] text-[#0A1C35]">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center bg-[#0A1C35] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1453728280008-090199616d57?q=80&w=2000&auto=format&fit=crop" 
            alt="Law library books" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-cinzel font-bold text-white tracking-wide"
          >
            PRACTICE AREAS
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-[#B9975B] mx-auto mt-4 origin-center"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-[#B9975B] font-cormorant font-medium mt-3 uppercase tracking-widest"
          >
            Expert Representation Across Key Disciplines
          </motion.p>
        </div>
      </section>

      {/* Main Practices Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12"
        >
          {practices.map((p, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className={`bg-[#EBE6DA] p-10 border-l-8 border-[#0A1C35] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                idx === practices.length - 1 && practices.length % 2 !== 0 ? 'lg:col-span-2 max-w-[600px] lg:max-w-none lg:mx-auto lg:w-1/2' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <p.icon className="w-12 h-12 text-[#B9975B]" strokeWidth={1} />
                  <h3 className="font-cinzel text-2xl font-bold text-[#0A1C35]">{p.title}</h3>
                </div>
                <p className="text-[#0A1C35]/80 font-lora leading-relaxed mb-8 text-base md:text-lg">
                  {p.desc}
                </p>
                <div className="border-t border-[#B9975B]/20 pt-6">
                  <h4 className="font-cinzel text-[#0A1C35] text-xs font-bold tracking-wider mb-4 uppercase">Key Services</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {p.services.map((srv, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-[#0A1C35]/70 text-sm font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B9975B]"></span>
                        {srv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#B9975B]/20 flex justify-end">
                <Link to="/contact" className="inline-flex items-center gap-1.5 font-cinzel text-xs font-bold text-[#0A1C35] hover:text-[#B9975B] transition">
                  REQUEST CONSULTATION <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA section */}
      <section className="bg-[#0A1C35] text-white py-20 border-t border-[#B9975B]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-6">Discuss Your Case with Our Legal Team</h2>
          <p className="text-lg md:text-xl text-white/80 font-cormorant mb-10 max-w-2xl mx-auto">
            Our experienced partners are ready to counsel you on your complex legal objectives. Reach out to schedule an initial confidential evaluation.
          </p>
          <Link to="/contact">
            <button className="bg-[#B9975B] text-[#0A1C35] font-cinzel font-bold tracking-widest px-8 py-4 hover:bg-white hover:text-[#0A1C35] transition border border-[#B9975B] text-xs shadow-2xl cursor-pointer">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
