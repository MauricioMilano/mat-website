import React from "react";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Calculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

const Index: React.FC = () => {
  return (
    <div className="font-sans">
      <Hero />
      <main>
        <section className="relative py-12 px-6 bg-amber-300 overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-100 rounded-full opacity-50 blur-3xl pointer-events-none hidden md:block" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-200 rounded-full opacity-40 blur-3xl pointer-events-none hidden md:block" />

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Quem Somos</h2>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
              <p className="text-slate-700">
                A <strong>Callseg</strong> nasceu com um propósito claro: democratizar o acesso ao patrimônio de forma inteligente, segura e livre de juros abusivos. Entendemos que o consórcio não é apenas um produto financeiro, mas uma ferramenta de planejamento estratégico.
              </p>
              <p className="text-slate-700 mt-4">
                Combinamos transparência total com as melhores taxas do mercado brasileiro. Na Callseg, você não é apenas um número de cota; você é um investidor que conta com nossa expertise para escolher o plano que se encaixa perfeitamente no seu fluxo de caixa.
              </p>
              <p className="text-slate-700 mt-4">
                Trabalhamos com o consórcio da <strong>Porto Seguro</strong>, garantindo segurança, tradição e solidez para sua aquisição.
              </p>
            </div>
          </div>
        </section>

        <HowItWorks />

        <Plans />

        <Calculator />

        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Por que escolher a Callseg?</h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li><strong>Zero Juros:</strong> Diferente do financiamento bancário, aqui você não paga juros. Existe apenas uma taxa de administração diluída em todo o período.</li>
              <li><strong>Prazos Flexíveis:</strong> Planos de até <strong>200 meses</strong> para imóveis, permitindo parcelas que cabem no seu orçamento mensal.</li>
              <li><strong>Poder de Compra à Vista:</strong> Com a carta de crédito em mãos, você negocia como se estivesse com o dinheiro vivo, conseguindo descontos agressivos.</li>
              <li><strong>Segurança Institucional:</strong> Operamos rigorosamente dentro das normas do Banco Central do Brasil, garantindo que seu investimento esteja protegido.</li>
              <li><strong>Consultoria Especializada:</strong> Não apenas vendemos cotas; ajudamos você a calcular o lance ideal e a estratégia de contemplação.</li>
            </ul>
          </div>
        </section>

      </main>

      <Footer />

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/5512982910109?text=${encodeURIComponent("Olá Callseg (Consórcio Porto Seguro), gostaria de saber mais.")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Whatsapp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.82L3 21l1.17-4.28A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </a>
    </div>
  );
};

export default Index;