import { motion } from 'motion/react';
import { Scale, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full min-h-[calc(100vh-110px)] bg-[#F5F2EA] text-[#0A1C35] flex items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <motion.div
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-24 h-24 rounded-full bg-[#B9975B]/10 flex items-center justify-center mx-auto mb-8 border border-[#B9975B]/25"
        >
          <Scale className="w-12 h-12 text-[#B9975B]" strokeWidth={1} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-6xl md:text-7xl font-bold tracking-tight mb-2"
        >
          404
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-cinzel text-2xl md:text-3xl font-semibold tracking-wider text-[#B9975B] uppercase mb-6"
        >
          Case Dismissed
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-1 bg-[#B9975B] mx-auto mb-8"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-lora text-base md:text-lg text-[#0A1C35]/75 leading-relaxed mb-10 text-balance"
        >
          The page you are looking for does not exist in our system, has been archived, or was moved to another jurisdiction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/">
            <button className="inline-flex items-center gap-2 bg-[#0A1C35] text-white px-8 py-4 hover:bg-[#B9975B] hover:text-[#0A1C35] transition font-cinzel text-xs font-bold tracking-widest cursor-pointer shadow-lg">
              <ChevronLeft className="w-4 h-4" /> BACK TO COURT (HOME)
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
