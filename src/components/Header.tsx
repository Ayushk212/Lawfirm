import { NavLink } from 'react-router-dom';

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:text-[#B9975B] transition relative py-1 ${
      isActive ? 'text-[#B9975B] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B9975B]' : ''
    }`;

  return (
    <header className="bg-[#F5F2EA] py-3 lg:py-4 border-b border-[#B9975B]/30 sticky top-0 z-50">
      <div className="w-full pr-6 lg:pr-12 flex flex-col xl:flex-row justify-between items-center gap-4 xl:gap-8" style={{ paddingLeft: '48px', marginLeft: '0px', minHeight: '109.6px' }}>
        <NavLink to="/" className="shrink-0 flex items-center py-2">
          <img 
            src="/logo_dark.png" 
            alt="Vadhera & Associates Logo" 
            className="h-28 md:h-36 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
          />
        </NavLink>

        <nav className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 font-cinzel text-xs md:text-sm font-semibold text-[#0A1C35] whitespace-nowrap justify-center mt-2 xl:mt-0">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>Our Firm</NavLink>
          <NavLink to="/practice-areas" className={linkClass}>Practice Areas</NavLink>
          <NavLink to="/attorneys" className={linkClass}>Attorneys</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
