import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold">Callseg</h4>
          <p className="text-sm text-slate-200 mt-2">Inteligência financeira para quem planeja o futuro.</p>
          <p className="text-xs text-slate-400 mt-2">Operamos com o consórcio da Porto Seguro, oferecendo segurança e tradição.</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Diferenciais</h5>
          <ul className="text-sm text-slate-200 space-y-1">
            <li>Zero Juros</li>
            <li>Prazos de até 200 meses</li>
            <li>Menores taxas do mercado</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Contato</h5>
          <div className="text-sm text-slate-200">Operamos conforme as normas do Banco Central do Brasil.</div>
          <a
            className="mt-3 inline-flex justify-center items-center text-center bg-amber-400 text-[#0f172a] px-4 py-2 rounded-full font-semibold"
            href={`https://wa.me/5512982910109?text=${encodeURIComponent("Olá Callseg (Consórcio Porto Seguro), gostaria de uma consultoria")}`}
            target="_blank"
            rel="noreferrer"
          >
            QUERO UMA CONSULTORIA GRATUITA
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-slate-300 text-sm">© {new Date().getFullYear()} Callseg. Todos os direitos reservados.</div>
    </footer>
  );
};

export default Footer;