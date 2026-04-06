import React from "react";
import { Link } from "react-router-dom";
import { Lock, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h4 className="text-lg font-semibold">Callseg</h4>
          <p className="text-sm text-slate-200 mt-2">Inteligência financeira para quem planeja o futuro.</p>
          <p className="text-xs text-slate-400 mt-2">Operamos com o consórcio da Porto Seguro, oferecendo segurança e tradição.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold mb-3">Navegação</h5>
          <ul className="text-sm text-slate-200 space-y-2">
            <li><Link to="/" className="hover:text-emerald-400 transition-colors">Início</Link></li>
            <li><Link to="/quem-somos" className="hover:text-emerald-400 transition-colors">Quem Somos</Link></li>
            <li><Link to="/como-funciona" className="hover:text-emerald-400 transition-colors">Como Funciona</Link></li>
            <li><Link to="/planos" className="hover:text-emerald-400 transition-colors">Planos</Link></li>
            <li><Link to="/calculadora" className="hover:text-emerald-400 transition-colors">Calculadora</Link></li>
            <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
            <li><Link to="/contato" className="hover:text-emerald-400 transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Diferenciais */}
        <div>
          <h5 className="font-semibold mb-3">Diferenciais</h5>
          <ul className="text-sm text-slate-200 space-y-1">
            <li>Zero Juros</li>
            <li>Prazos de até 200 meses</li>
            <li>Menores taxas do mercado</li>
            <li>Segurança Porto Seguro</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold mb-3">Contato</h5>
          <p className="text-sm text-slate-200 mb-3">
            Operamos conforme as normas do Banco Central do Brasil e somos assegurados pelo Consórcio da Porto Seguro.
          </p>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm shadow-black/20 backdrop-blur-sm">
            <Lock className="w-3.5 h-3.5 text-amber-300" />
            <span>Site seguro</span>
          </div>
            <a
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#0f172a] px-4 py-2 rounded-full font-semibold transition-colors"
            href={`https://wa.me/5512982910109?text=${encodeURIComponent("Olá Callseg (Consórcio Porto Seguro), gostaria de uma consultoria")}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar proposta
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-300 text-sm">
        © {new Date().getFullYear()} Callseg. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
