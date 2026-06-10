import { motion } from 'motion/react';
import { Landmark, Scale, BookOpen, ChevronRight } from 'lucide-react';
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
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-110px)] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1C35]">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src="/hero.png" 
            alt="Scales of justice and gavel" 
            className="w-full h-full object-cover mix-blend-luminosity"
          />
        </div>
        <div className="relative z-10 text-center w-full px-6 md:px-12 lg:px-24">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold text-white mb-8 leading-tight drop-shadow-xl text-balance"
          >
            Unwavering Dedication.<br/>Proven Results.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/90 font-cormorant max-w-4xl mx-auto mb-12 leading-relaxed text-balance"
          >
            Since 1998, our senior partners have provided exceptional legal counsel to businesses and individuals facing complex legal challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/contact">
              <button className="bg-[#B9975B] text-[#0A1C35] font-cinzel font-bold tracking-widest px-10 py-5 hover:bg-white transition border border-[#B9975B] text-sm shadow-2xl cursor-pointer hover:shadow-[#B9975B]/20">
                SCHEDULE A CONSULTATION
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro / Experience */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 min-h-[80vh] flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center bg-[#F5F2EA]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:w-1/2 max-w-3xl"
        >
          <motion.h3 variants={fadeInUp} className="font-cinzel text-[#B9975B] font-bold tracking-widest text-sm mb-4">OUR COMMITMENT</motion.h3>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-cormorant font-bold text-[#0A1C35] mb-8 leading-tight">
            Experience that commands respect in the courtroom.
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-1 bg-[#B9975B] mb-8"></motion.div>
          <motion.p variants={fadeInUp} className="text-[#0A1C35]/80 leading-relaxed mb-6 text-xl">
            When you retain Vadhera & Associates, you are not just hiring a lawyer; you are securing an institution. Our firm represents a legacy of meticulous preparation, aggressive advocacy, and unyielding ethical standards.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-[#0A1C35]/80 leading-relaxed text-xl">
            We handle disputes with the gravity they deserve, assuring our clients that their affairs are managed by seasoned professionals who have navigated the most intricate legal systems.
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2 w-full max-w-2xl"
        >
          <div className="relative group overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop" 
              alt="Professional handshake" 
              className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-[#0A1C35]/10 group-hover:bg-[#0A1C35]/0 transition-colors duration-500"></div>
          </div>
        </motion.div>
      </section>

      {/* Practice Areas */}
      <section className="bg-[#EBE6DA] py-24 border-y border-[#D6CFC0] min-h-[85vh] flex flex-col justify-center">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-[#0A1C35]">AREAS OF PRACTICE</h2>
            <div className="w-32 h-1 bg-[#B9975B] mx-auto mt-8"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-10"
          >
            {[
              { title: "Civil Litigation", icon: Scale, desc: "Robust representation in state and federal courts for high-stakes, multi-jurisdictional disputes." },
              { title: "Corporate Counsel", icon: Landmark, desc: "Authoritative advisory for enterprises concerning governance, mergers, and complex regulatory compliance." },
              { title: "Estate Planning", icon: BookOpen, desc: "Preserving generational wealth and legacies through meticulous trust, estate, and asset structuring." }
            ].map((area, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-[#F5F2EA] p-12 border-t-4 border-[#0A1C35] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-2"
              >
                <area.icon className="w-16 h-16 text-[#B9975B] mb-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                <h3 className="font-cinzel text-3xl font-bold text-[#0A1C35] mb-6">{area.title}</h3>
                <p className="text-[#0A1C35]/70 leading-relaxed text-xl flex-grow">{area.desc}</p>
                <Link to="/practice-areas" className="inline-flex items-center gap-2 mt-10 font-cinzel text-sm font-bold text-[#0A1C35] group-nav hover:text-[#B9975B] transition w-max">
                  LEARN MORE <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
