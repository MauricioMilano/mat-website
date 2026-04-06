import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Home, Car, Truck, Calculator, MessageCircle, CheckCircle } from "lucide-react";

const plans = [
  {
    icon: <Home className="w-7 h-7" />,
    title: "Imóveis",
    subtitle: "R$70.000 — R$900.000 | Prazo: até 200 meses",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    highlight: "Mais escolhido",
    features: [
      "Crédito de R$70.000 a R$900.000",
      "Prazo de até 200 meses",
      "Taxa de administração escalonada (19% a 25%)",
      "Fundo de reserva: 2%",
      "Taxa de adesão: 2%",
      "Use FGTS como lance ou amortização",
      "Negociação à vista com a carta de crédito",
    ],
    rates: [
      { range: "R$70.000 – R$140.000", adm: "25%" },
      { range: "R$140.001 – R$280.000", adm: "23%" },
      { range: "R$280.001 – R$560.000", adm: "21%" },
      { range: "R$600.000 – R$900.000", adm: "19%" },
    ],
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: "Auto",
    subtitle: "R$25.000 — R$200.000 | Prazos: 50 a 90 meses",
    bgColor: "bg-sky-50",
    iconColor: "text-sky-600",
    borderColor: "border-sky-200",
    highlight: null,
    features: [
      "Crédito de R$25.000 a R$200.000",
      "Prazos flexíveis: 50, 72, 80 ou 90 meses",
      "Taxa de administração de 15% a 18%",
      "Fundo de reserva: 2%",
      "Sem taxa de adesão",
      "Veículos novos e seminovos",
      "Carta de crédito aceita em qualquer concessionária",
    ],
    rates: [
      { range: "R$25.000 – R$50.000 (50 meses)", adm: "18%" },
      { range: "R$34.000 – R$65.000 (72 meses)", adm: "18%" },
      { range: "R$62.500 – R$125.000 (80 meses)", adm: "16%" },
      { range: "R$125.000 – R$200.000 (90 meses)", adm: "15%" },
    ],
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Pesados",
    subtitle: "R$180.000 — R$360.000 | Prazo: 120 meses",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    highlight: null,
    features: [
      "Crédito de R$180.000 a R$360.000",
      "Prazo de até 120 meses",
      "Taxa de administração: 14%",
      "Fundo de reserva: 2%",
      "Sem taxa de adesão",
      "Ideal para frota e agronegócio",
      "Caminhões, ônibus, máquinas agrícolas",
    ],
    rates: [
      { range: "R$180.000 – R$360.000 (120 meses)", adm: "14%" },
    ],
  },
];

const Planos: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f172a] to-[#081028] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Nossos Planos
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Escolha a categoria que mais combina com seu objetivo e conheça todas as condições em detalhe.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`relative rounded-2xl border ${plan.borderColor} shadow-sm p-6 flex flex-col gap-5 hover:shadow-lg transition-shadow`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {plan.highlight}
                  </span>
                )}

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${plan.bgColor} ${plan.iconColor}`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#0f172a]">{plan.title}</h2>
                    <p className="text-xs text-slate-500 mt-1">{plan.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-2">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Taxas por faixa</h4>
                  <div className="space-y-1">
                    {plan.rates.map((r) => (
                      <div key={r.range} className="flex justify-between text-xs text-slate-600 bg-slate-50 rounded px-3 py-1.5">
                        <span>{r.range}</span>
                        <span className="font-semibold">Adm: {r.adm}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 flex flex-col gap-2">
                  <Link to="/calculadora">
                    <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full">
                      <Calculator className="w-4 h-4 mr-2" />
                      Simular este plano
                    </Button>
                  </Link>
                  <a
                    href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                      `Olá Callseg, tenho interesse no plano de ${plan.title}. Gostaria de mais informações.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" className="w-full rounded-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Falar com especialista
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-14 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3 text-[#0f172a]">Ainda com dúvidas sobre qual plano escolher?</h2>
            <p className="text-slate-600 mb-6">
              Nossa equipe pode te ajudar a encontrar o plano perfeito para seu perfil e objetivo financeiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                  "Olá Callseg, gostaria de ajuda para escolher o melhor plano de consórcio para mim."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Consultar gratuitamente
                </Button>
              </a>
              <Link to="/faq">
                <Button variant="outline" className="rounded-full px-8">
                  Ver perguntas frequentes
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Planos;
