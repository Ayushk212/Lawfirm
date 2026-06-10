import { motion } from 'motion/react';
import { Shield, Award, Users, BookOpen } from 'lucide-react';

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

export default function About() {
  const milestones = [
    { year: "1998", title: "Inception", desc: "Vadhera & Associates was established with a singular focus on complex commercial disputes and civil litigation." },
    { year: "2005", title: "Practice Expansion", desc: "Opened our Corporate Advisory division, providing strategic legal guidance to Fortune 500 corporations and startups alike." },
    { year: "2012", title: "Generational Wealth & Trusts", desc: "Launched our specialized Estate Planning and Wealth Management practice, securing legacies for families across the nation." },
    { year: "2020", title: "Digital & Regulatory Transition", desc: "Recognized as a leading firm in navigating modern digital compliance, intellectual property, and high-stakes regulatory defense." }
  ];

  return (
    <div className="w-full bg-[#F5F2EA] text-[#0A1C35]">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center bg-[#0A1C35] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate skyscraper building" 
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
            OUR FIRM
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
            A Legacy of Uncompromising Advocacy
          </motion.p>
        </div>
      </section>

      {/* Overview / Narrative */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInUp} className="font-cinzel text-[#B9975B] font-bold tracking-widest text-sm mb-4">OUR STORY</motion.h3>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-cormorant font-bold mb-8 leading-tight">
            Built on trust, integrity, and relentless preparation.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#0A1C35]/80 leading-relaxed mb-6 text-lg">
            For over two decades, Vadhera & Associates has stood as a beacon of legal excellence. Founded on the principle that every client deserves individualized, rigorous representation, our firm has grown into a prestigious institution.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-[#0A1C35]/80 leading-relaxed text-lg">
            We operate with a philosophy where traditional values meet forward-thinking solutions. Our senior partners bring a combined experience of over half a century in solving high-stakes litigation, corporate advisory disputes, and estate wealth structures.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-8 border-white shadow-xl relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" 
            alt="Law firm meeting room table" 
            className="w-full h-[450px] object-cover"
          />
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-[#EBE6DA] py-24 border-y border-[#D6CFC0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-cinzel font-bold text-[#0A1C35]">OUR CORE VALUES</h2>
            <div className="w-24 h-1 bg-[#B9975B] mx-auto mt-6"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, title: "Integrity First", desc: "We adhere to the highest ethical and moral standards in representing our clients and executing the law." },
              { icon: Award, title: "Excellence", desc: "We strive to deliver legal representation that goes beyond standard expectations, crafting meticulous strategies." },
              { icon: Users, title: "Client Focused", desc: "We listen, customize, and deliver advisory plans aligned with the unique goals of our clients." },
              { icon: BookOpen, title: "Intellectual Rigor", desc: "Deep knowledge of statutes and continuous research ensures we stay steps ahead in the courtroom." }
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-[#F5F2EA] p-8 border-b-4 border-[#B9975B] shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5"
              >
                <val.icon className="w-12 h-12 text-[#B9975B] mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.2} />
                <h3 className="font-cinzel text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-[#0A1C35]/70 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-cinzel font-bold text-[#0A1C35]">FIRM MILESTONES</h2>
          <div className="w-24 h-1 bg-[#B9975B] mx-auto mt-6"></div>
        </div>

        <div className="relative border-l border-[#B9975B]/40 ml-4 md:ml-1/2 md:translate-x-[-0.5px]">
          {milestones.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative mb-16 md:w-[45%] md:ml-auto ${
                idx % 2 === 0 ? 'md:mr-auto md:ml-0 md:text-right' : 'md:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-25px] md:left-auto md:right-auto top-1.5 w-[10px] h-[10px] rounded-full bg-[#B9975B] border-4 border-[#F5F2EA] outline outline-1 outline-[#B9975B] md:translate-x-1/2" 
                style={
                  idx % 2 === 0 
                    ? { right: '-5.5px' } 
                    : { left: '-5.5px' }
                }
              />
              
              <div className="pl-6 md:pl-0 md:px-8">
                <span className="font-cinzel font-bold text-2xl text-[#B9975B]">{m.year}</span>
                <h4 className="font-cinzel font-semibold text-lg text-[#0A1C35] mt-1 mb-2">{m.title}</h4>
                <p className="text-[#0A1C35]/75 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
