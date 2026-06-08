import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/90 backdrop-blur shadow-sm py-2"
          : "bg-white/70 backdrop-blur py-3"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-gray-900"
        >
          Law Firm
        </Link>

        <div className="hidden md:flex gap-8">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                relative text-gray-700 hover:text-black transition

                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-[#C8A24A]
                hover:after:w-full after:transition-all
              "
            >
              {item.name}
            </Link>
          ))}

        </div>

        <Link
          to="/contact"
          className="
            bg-[#C8A24A] text-black px-5 py-2 rounded-full
            hover:bg-[#E2C46B] transition font-semibold
          "
        >
          Book Consultation
        </Link>

      </div>
    </nav>
  );
}