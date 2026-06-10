import { motion } from 'motion/react';
import { Mail, ShieldCheck, Award, GraduationCap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Attorneys() {
  const attorneys = [
    {
      name: "Devendra Vadhera",
      role: "Senior Managing Partner",
      specialty: "Civil Litigation & Appellate Practice",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      bio: "With over 30 years of legal experience, Devendra leads the litigation wing of the firm. He represents corporations and high-profile individuals in landmark high court trials and appellate courts.",
      education: ["LL.M., Harvard Law School", "LL.B. (Hons), Faculty of Law, University of Delhi"],
      accolades: ["Appointed Senior Counsel, 2012", "Ex-President, High Court Bar Association"]
    },
    {
      name: "Aishwarya Vadhera",
      role: "Senior Partner",
      specialty: "Corporate Law & Regulatory Compliance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      bio: "Aishwarya oversees the corporate advisory and advisory services sector, advising boards on governance, mergers and acquisitions, cross-border compliance, and complex labor regulations.",
      education: ["M.B.A., INSEAD", "LL.B., National Law School of India University (NLSIU)"],
      accolades: ["Legal 500 Corporate Counsel Advisor of the Year", "Recognized among top 10 corporate attorneys"]
    },
    {
      name: "Siddharth Sen",
      role: "Of Counsel",
      specialty: "Estate Planning & Generational Wealth",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      bio: "Siddharth specializes in organizing complex family wealth assets, private family trust structures, and wealth transfer vehicles. He advises families on long-term wealth protection and asset structuring.",
      education: ["LL.B., ILS Law College, Pune", "Post Graduate Diploma in Tax Law"],
      accolades: ["Chambers & Partners Tier 1 Private Client advisor", "Member of Society of Trust and Estate Practitioners"]
    }
  ];

  return (
    <div className="w-full bg-[#F5F2EA] text-[#0A1C35]">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center bg-[#0A1C35] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2000&auto=format&fit=crop" 
            alt="Law firm team board room" 
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
            OUR PROFESSIONAL ADVOCATES
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
            A Collective of Experienced and Formidable Minds
          </motion.p>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-20"
        >
          {attorneys.map((attorney, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-[#EBE6DA] shadow-xl p-8 lg:p-12 border-t-8 border-[#0A1C35] flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/3 shrink-0">
                <div className="border-4 border-white shadow-lg overflow-hidden group">
                  <img 
                    src={attorney.image} 
                    alt={attorney.name} 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Details Column */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-[#B9975B]/30 pb-4 mb-6 gap-2">
                    <div>
                      <h2 className="text-3xl font-cinzel font-bold text-[#0A1C35]">{attorney.name}</h2>
                      <p className="text-sm font-sans font-bold text-[#B9975B] tracking-wider uppercase mt-1">{attorney.role}</p>
                    </div>
                    <span className="text-base md:text-lg font-cormorant italic font-semibold text-[#0A1C35]/70">{attorney.specialty}</span>
                  </div>

                  <p className="text-[#0A1C35]/80 font-lora leading-relaxed text-lg mb-8">
                    {attorney.bio}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    {/* Education */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="w-5 h-5 text-[#B9975B]" />
                        <h4 className="font-cinzel text-xs font-bold tracking-wider text-[#0A1C35] uppercase">Education</h4>
                      </div>
                      <ul className="space-y-2">
                        {attorney.education.map((edu, eIdx) => (
                          <li key={eIdx} className="text-sm text-[#0A1C35]/70 font-sans leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#B9975B] mt-2 shrink-0"></span>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accolades */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-[#B9975B]" />
                        <h4 className="font-cinzel text-xs font-bold tracking-wider text-[#0A1C35] uppercase">Credentials</h4>
                      </div>
                      <ul className="space-y-2">
                        {attorney.accolades.map((acc, aIdx) => (
                          <li key={aIdx} className="text-sm text-[#0A1C35]/70 font-sans leading-relaxed flex items-start gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#B9975B] shrink-0 mt-0.5" />
                            {acc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#B9975B]/20 flex justify-end">
                  <a 
                    href={`mailto:contact@vadheraassociates.com?subject=Consultation with ${attorney.name}`}
                    className="inline-flex items-center gap-2 bg-[#0A1C35] text-white px-6 py-3 hover:bg-[#B9975B] hover:text-[#0A1C35] transition font-cinzel text-xs font-semibold tracking-wider cursor-pointer shadow-md"
                  >
                    <Mail className="w-4 h-4" /> CONTACT COUNSEL
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
