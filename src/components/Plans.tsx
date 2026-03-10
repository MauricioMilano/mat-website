import React from "react";
import { Home, Car, Truck } from "lucide-react";

type PlanCardProps = {
  title: string;
  range: string;
  details: string;
  icon: React.ReactNode;
  bgColor?: string;
  iconColor?: string;
};

const PlanCard: React.FC<PlanCardProps> = ({ title, range, details, icon, bgColor = "bg-emerald-50", iconColor = "text-emerald-600" }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${bgColor} shadow-sm`}>
          <div className={`${iconColor} w-6 h-6`}>
            {icon}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-0 text-[#0f172a]">{title}</h3>
          <div className="text-sm text-slate-500 mt-1">{range}</div>
        </div>
      </div>

      <div className="text-sm text-slate-700 mt-2">{details}</div>
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
            icon={<Home className="w-full h-full" />}
            bgColor="bg-emerald-50"
            iconColor="text-emerald-600"
          />

          <PlanCard
            title="Auto"
            range="R$25.000 — R$200.000 | Prazos: 50–90 meses"
            details="Opções para carros novos e seminovos. Planos flexíveis para sua necessidade."
            icon={<Car className="w-full h-full" />}
            bgColor="bg-sky-50"
            iconColor="text-sky-600"
          />

          <PlanCard
            title="Pesados"
            range="R$180.000 — R$360.000 | Prazo: 120 meses"
            details="Soluções para frota, transporte e agronegócio com taxa administrativa reduzida."
            icon={<Truck className="w-full h-full" />}
            bgColor="bg-amber-50"
            iconColor="text-amber-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Plans;