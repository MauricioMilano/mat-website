import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StepsSection from "@/components/StepsSection";
import { Button } from "@/components/ui/button";
import { Home, Calculator, Users, CreditCard, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Home className="w-5 h-5" />,
    title: "1. Escolha o plano",
    description:
      "Selecione a categoria (Imóvel, Auto, Pesados) e o valor do crédito que mais se adequa ao seu objetivo.",
    detail:
      "Cada categoria possui faixas de crédito e prazos específicos. Imóveis oferecem até 200 meses, Auto de 50 a 90 meses, e Pesados até 120 meses.",
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    title: "2. Simule e defina o lance",
    description:
      "Use a calculadora para ver parcelas estimadas, informe um lance (valor ou %) e escolha os meses até contemplação.",
    detail:
      "O lance é uma oferta antecipada que aumenta suas chances de contemplação. Você pode usar até 50% do valor da carta de crédito como lance, e no caso de imóveis, o FGTS também pode ser utilizado.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "3. Contrate pelo WhatsApp",
    description:
      "Entre em contato com nossa equipe pelo WhatsApp para formalizar a contratação, enviar documentos e receber orientação personalizada.",
    detail:
      "Nosso time vai te guiar por todo o processo, desde a análise de perfil até a escolha do grupo e assembleia ideais para seu objetivo.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "4. Participe das assembleias",
    description:
      "Acompanhe as assembleias mensais; se o seu lance for contemplado, você recebe prioridade para a carta de crédito.",
    detail:
      "As assembleias acontecem mensalmente e são o momento em que os contemplados são definidos por sorteio ou por lance. Você pode acompanhar tudo de forma transparente.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "5. Receba a carta de crédito",
    description:
      "Ao ser contemplado, você recebe a carta de crédito para negociar como pagamento à vista e conquistar seu bem.",
    detail:
      "Com a carta de crédito em mãos, você tem poder de compra à vista — o que garante descontos significativos na negociação do seu imóvel, veículo ou equipamento.",
  },
];

const ComoFunciona: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f172a] to-[#081028] text-white py-16 sm:py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
              Passo a passo
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Como Funciona
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Do primeiro contato à carta de crédito na mão — em 5 passos simples.
            </p>
          </div>
        </section>

        {/* Steps */}
        <StepsSection steps={steps} />

        {/* Why consortium */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-[#0f172a] text-center">
              Por que consórcio e não financiamento?
            </h2>
            <div className="bg-white rounded-2xl shadow p-6 space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f172a]">Zero Juros</h4>
                  <p className="text-sm text-slate-600">
                    Diferente do financiamento bancário, aqui você não paga juros. Existe apenas uma taxa de administração diluída em todo o período.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f172a]">Parcelas que cabem no bolso</h4>
                  <p className="text-sm text-slate-600">
                    Prazos de até 200 meses para imóveis permitem parcelas significativamente menores que as de um financiamento.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f172a]">Poder de compra à vista</h4>
                  <p className="text-sm text-slate-600">
                    Com a carta de crédito em mãos, você negocia como se estivesse com o dinheiro vivo, conseguindo descontos agressivos.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f172a]">Segurança institucional</h4>
                  <p className="text-sm text-slate-600">
                    Operamos rigorosamente dentro das normas do Banco Central do Brasil, garantindo que seu investimento esteja protegido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">
              Quer ver na prática quanto você pagaria?
            </h2>
            <p className="text-slate-600 mb-6">
              Use nossa calculadora para simular diferentes cenários e encontrar o plano ideal.
            </p>
            <Link to="/calculadora">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
                <Calculator className="w-4 h-4 mr-2" />
                Ir para a Calculadora <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ComoFunciona;
