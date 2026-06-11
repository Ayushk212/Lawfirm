import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Scale } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', category: '', message: '' });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-[#F5F2EA] text-[#0A1C35]">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center bg-[#0A1C35] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/contact_hero.png" 
            alt="Law scales and consultation desk" 
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
            Contact & Consultation
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
            className="text-lg md:text-xl text-[#B9975B] font-cormorant font-medium mt-3 tracking-widest"
          >
            Confidential Consultation Scheduling
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-[#EBE6DA] p-8 md:p-12 shadow-xl border-t-8 border-[#0A1C35]"
        >
          <h2 className="font-cinzel text-3xl font-bold mb-4">Case Evaluation Request</h2>
          <p className="text-sm text-[#0A1C35]/70 mb-8 font-lora">
            Please fill out this form with details about your inquiry. All messages sent through this form are kept strictly confidential under attorney-client privilege guidelines.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit} 
                className="space-y-6"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-sans font-bold tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#F5F2EA] border border-[#B9975B]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#B9975B] focus:ring-1 focus:ring-[#B9975B] transition font-sans text-[#0A1C35]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-sans font-bold tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#F5F2EA] border border-[#B9975B]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#B9975B] focus:ring-1 focus:ring-[#B9975B] transition font-sans text-[#0A1C35]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-sans font-bold tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#F5F2EA] border border-[#B9975B]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#B9975B] focus:ring-1 focus:ring-[#B9975B] transition font-sans text-[#0A1C35]"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-xs font-sans font-bold tracking-wider mb-2">Practice Area</label>
                    <select 
                      id="category" 
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-[#F5F2EA] border border-[#B9975B]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#B9975B] focus:ring-1 focus:ring-[#B9975B] transition font-sans text-[#0A1C35]"
                    >
                      <option value="">Select an area...</option>
                      <option value="civil">Civil Litigation</option>
                      <option value="corporate">Corporate Counsel</option>
                      <option value="estate">Estate Planning</option>
                      <option value="defense">White Collar Defense</option>
                      <option value="appeals">Appeals</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-sans font-bold tracking-wider mb-2">Description of Matter</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F2EA] border border-[#B9975B]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#B9975B] focus:ring-1 focus:ring-[#B9975B] transition font-sans text-[#0A1C35] resize-none"
                    placeholder="Provide a brief, general outline of your legal requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#0A1C35] text-[#F5F2EA] hover:bg-[#B9975B] hover:text-[#0A1C35] border border-[#0A1C35] hover:border-[#B9975B] px-8 py-4 font-cinzel font-bold tracking-widest text-xs flex items-center justify-center gap-2 transition w-full md:w-max cursor-pointer shadow-lg disabled:opacity-55"
                >
                  {isSubmitting ? (
                    <>
                      <Scale className="w-4 h-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Request
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#F5F2EA] p-8 border border-[#B9975B]/30 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#B9975B]/10 flex items-center justify-center mx-auto mb-6">
                  <Scale className="w-8 h-8 text-[#B9975B]" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold mb-4">Request Submitted Successfully</h3>
                <p className="text-sm font-lora text-[#0A1C35]/70 max-w-md mx-auto mb-8">
                  Your case inquiry has been securely sent. A senior client coordinator will review the details and contact you within 24 business hours to arrange a formal consultation.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#0A1C35] text-white px-6 py-3 hover:bg-[#B9975B] hover:text-[#0A1C35] transition font-cinzel text-xs font-semibold tracking-wider cursor-pointer shadow-md"
                >
                  New Submission
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Details Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="space-y-10">
            <div>
              <h3 className="font-cinzel text-xl font-bold mb-6 border-b border-[#B9975B]/30 pb-2">Firm Chambers</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#B9975B] shrink-0 mt-0.5" />
                  <span className="font-sans text-[#0A1C35]/80 text-sm leading-relaxed">
                    <strong>Vadhera & Associates</strong><br/>
                    123 Legal Avenue, Suite 400<br/>
                    Connaught Place, New Delhi, ND 110001
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#B9975B] shrink-0" />
                  <span className="font-sans text-[#0A1C35]/80 text-sm">
                    +91 98765 43210 (Main Line)<br/>
                    +91 11 2345 6789 (Fax)
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#B9975B] shrink-0" />
                  <span className="font-sans text-[#0A1C35]/80 text-sm">
                    contact@vadheraassociates.com<br/>
                    intake@vadheraassociates.com
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-cinzel text-xl font-bold mb-6 border-b border-[#B9975B]/30 pb-2">Hours of Operation</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 justify-between text-sm font-sans text-[#0A1C35]/80 border-b border-[#B9975B]/10 pb-2">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B9975B]" /> Monday - Friday
                  </span>
                  <span>09:00 AM - 06:00 PM</span>
                </li>
                <li className="flex items-start gap-4 justify-between text-sm font-sans text-[#0A1C35]/80 border-b border-[#B9975B]/10 pb-2">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B9975B]" /> Saturday
                  </span>
                  <span>10:00 AM - 02:00 PM (By Appt Only)</span>
                </li>
                <li className="flex items-start gap-4 justify-between text-sm font-sans text-red-800 pb-2">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B9975B]" /> Sunday
                  </span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Styled placeholder for Map */}
          <div className="mt-10 border border-[#B9975B]/30 bg-[#EBE6DA] p-4 shadow-md flex flex-col justify-center items-center h-[200px] relative overflow-hidden group">
            <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-repeat" style={{ backgroundImage: 'radial-gradient(circle, #000 10%, transparent 11%)', backgroundSize: '10px 10px' }}></div>
            <div className="absolute inset-0 bg-[#0A1C35]/5 group-hover:bg-transparent transition-colors duration-500"></div>
            <MapPin className="w-10 h-10 text-[#B9975B] mb-2 group-hover:bounce transition-all duration-300" />
            <h4 className="font-cinzel font-bold text-xs text-[#0A1C35] tracking-widest">Map View (Connaught Place)</h4>
            <p className="text-[10px] font-sans text-[#0A1C35]/65 mt-1">Delhi metro parking access available</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
