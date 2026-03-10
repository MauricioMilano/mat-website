import React, { useEffect, useState } from "react";
import { Home, Calculator, Users, CreditCard, MessageSquare } from "lucide-react";

const Step: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-[#0f172a]">{title}</h4>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="como-funciona"
      className="py-12 px-6 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={
            "mb-8 transform transition-all duration-700 ease-out " +
            (mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
          }
        >
          <h2 className="text-2xl font-bold mb-2 text-[#0f172a]">Como funciona?</h2>
          <p className="text-slate-600">
            Entenda em passos simples como adquirir sua cota, contratar nosso serviço e ser contemplado com a carta de crédito.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div
            className={
              "transform transition-all duration-700 ease-out " +
              (mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
            }
          >
            <Step
              icon={<Home className="w-5 h-5" />}
              title="1. Escolha o plano"
            >
              Selecione a categoria (Imóvel, Auto, Pesados) e o valor do crédito que mais se adequa ao seu objetivo.
            </Step>
          </div>

          <div
            className={
              "transform transition-all duration-800 ease-out delay-75 " +
              (mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
            }
          >
            <Step
              icon={<Calculator className="w-5 h-5" />}
              title="2. Simule e defina o lance"
            >
              Use a calculadora para ver parcelas estimadas, informe um lance (valor ou %) e escolha os meses até contemplação.
            </Step>
          </div>

          {/* Nova etapa: contratar pelo WhatsApp */}
          <div
            className={
              "transform transition-all duration-850 ease-out delay-125 " +
              (mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
            }
          >
            <Step
              icon={<MessageSquare className="w-5 h-5" />}
              title="3. Contrate pelo WhatsApp"
            >
              Entre em contato com nossa equipe pelo WhatsApp para formalizar a contratação, enviar documentos e receber orientação personalizada.
            </Step>
          </div>

          <div
            className={
              "transform transition-all duration-900 ease-out delay-150 " +
              (mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
            }
          >
            <Step icon={<Users className="w-5 h-5" />} title="4. Participe das assembleias">
              Acompanhe as assembleias mensais; se o seu lance for contemplado, você recebe prioridade para a carta de crédito.
            </Step>
          </div>

          <div
            className={
              "transform transition-all duration-1000 ease-out delay-200 " +
              (mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
            }
          >
            <Step icon={<CreditCard className="w-5 h-5" />} title="5. Receba a carta de crédito">
              Ao ser contemplado, você recebe a carta de crédito para negociar como pagamento à vista e conquistar seu bem.
            </Step>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#calculadora"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow"
          >
            Simule agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;