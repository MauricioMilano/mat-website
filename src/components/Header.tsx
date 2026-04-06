import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Planos", href: "/planos" },
  { label: "Calculadora", href: "/calculadora" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/brand/porto-seguro-logo.svg"
              alt="Porto Seguro"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  isActive(link.href)
                    ? "text-emerald-600"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                "Olá Callseg (Consórcio Porto Seguro), gostaria de uma consultoria"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-100 pt-3">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors hover:bg-slate-50 ${
                    isActive(link.href)
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                  "Olá Callseg (Consórcio Porto Seguro), gostaria de uma consultoria"
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
