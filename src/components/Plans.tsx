import React from "react";

const PlanCard: React.FC<{ title: string; range: string; details: string }> = ({
  title,
  range,
  details,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex-1">
      <h3 className="text-lg font-semibold mb-2 text-[#0f172a]">{title}</h3>
      <div className="text-sm text-slate-600 mb-4">{range}</div>
      <div className="text-sm text-slate-700">{details}</div>
    </div>
  );
};

const Plans: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#0f172a]">Detalhamento dos Planos</h2>
        <p className="text-slate-600 mb-8">Escolha a categoria que mais combina com seu objetivo.</p>

        <div className="grid gap-6 lg:grid-cols-3">
          <PlanCard
            title="Imóveis"
            range="R$70.000 — R$900.000 | Prazo: 200 meses"
            details="Taxas escalonadas conforme o valor do crédito. Use FGTS como lance ou amortização."
          />

          <PlanCard
            title="Auto"
            range="R$25.000 — R$200.000 | Prazos: 50–90 meses"
            details="Opções para carros novos e seminovos. Planos flexíveis para sua necessidade."
          />

          <PlanCard
            title="Pesados"
            range="R$180.000 — R$360.000 | Prazo: 120 meses"
            details="Soluções para frota, transporte e agronegócio com taxa administrativa reduzida."
          />
        </div>
      </div>
    </section>
  );
};

export default Plans;
