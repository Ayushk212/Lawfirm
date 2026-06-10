import { NavLink } from 'react-router-dom';
import { Scale } from 'lucide-react';

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:text-[#B9975B] transition relative py-1 ${
      isActive ? 'text-[#B9975B] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B9975B]' : ''
    }`;

  return (
    <header className="bg-[#F5F2EA] py-3 lg:py-4 border-b border-[#B9975B]/30 sticky top-0 z-50">
      <div className="w-full pr-6 lg:pr-12 flex flex-col xl:flex-row justify-between items-center gap-4 xl:gap-8" style={{ paddingLeft: '48px', marginLeft: '0px', height: '109.6px' }}>
        <NavLink to="/" className="text-center flex flex-col items-center shrink-0 group">
          <div className="relative flex justify-center w-max">
            <span className="text-4xl md:text-5xl font-cinzel text-[#0A1C35] font-bold leading-none select-none">V</span>
            <Scale className="w-6 h-6 md:w-8 md:h-8 text-[#0A1C35] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] group-hover:rotate-12 transition-transform duration-300" strokeWidth={1} />
          </div>
          <div className="border-t border-[#B9975B]/40 pt-1 mt-1.5 w-full">
            <h1 className="text-base md:text-xl font-cinzel font-bold text-[#0A1C35] tracking-wide text-center whitespace-nowrap">
              VADHERA & ASSOCIATES
            </h1>
          </div>
          <div className="border-b border-[#B9975B]/40 pb-1 mb-1 w-full text-center">
            <p className="text-[#B9975B] font-sans font-bold tracking-widest text-[6px] md:text-[8px] uppercase inline-flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-[#B9975B]"></span>
              ADVOCATES • SOLICITORS • LEGAL COUNSEL
              <span className="w-1 h-1 rounded-full bg-[#B9975B]"></span>
            </p>
          </div>
        </NavLink>

        <nav className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 font-cinzel text-xs md:text-sm font-semibold text-[#0A1C35] whitespace-nowrap justify-center mt-2 xl:mt-0">
          <NavLink to="/" className={linkClass}>HOME</NavLink>
          <NavLink to="/about" className={linkClass}>OUR FIRM</NavLink>
          <NavLink to="/practice-areas" className={linkClass}>PRACTICE AREAS</NavLink>
          <NavLink to="/attorneys" className={linkClass}>ATTORNEYS</NavLink>
          <NavLink to="/contact" className={linkClass}>CONTACT</NavLink>
        </nav>
      </div>
    </header>
  );
}
