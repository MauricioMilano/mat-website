import React from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight, Shield, TrendingDown, Truck, Star, CheckCircle } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />

      <main>
        {/* Quem Somos teaser */}
        <section className="py-16 px-6 bg-amber-300 overflow-hidden relative">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-100 rounded-full opacity-50 blur-3xl pointer-events-none hidden md:block" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-200 rounded-full opacity-40 blur-3xl pointer-events-none hidden md:block" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Quem Somos</h2>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
              <p className="text-slate-700">
                A <strong>Callseg</strong> nasceu com um propósito claro: democratizar o acesso ao patrimônio de forma inteligente, segura e livre de juros abusivos. Com o especialista <strong>Matheus Carvalho</strong> e o respaldo da <strong>Porto Seguro</strong>, você tem consultoria personalizada do início ao fim.
              </p>
              <div className="mt-5">
                <Link to="/quem-somos">
                  <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full px-6">
                    Conheça nossa história <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Planos teaser */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-[#0f172a] text-center">Planos para cada objetivo</h2>
            <p className="text-slate-600 text-center mb-8">Imóveis, veículos ou equipamentos pesados — temos o plano certo para você.</p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a]">Imóveis</h3>
                <p className="text-sm text-slate-600">Créditos de R$70.000 a R$900.000 com prazo de até 200 meses. Use FGTS como lance.</p>
                <Link to="/planos" className="text-emerald-600 text-sm font-semibold hover:underline mt-auto">
                  Ver detalhes →
                </Link>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a]">Auto</h3>
                <p className="text-sm text-slate-600">Créditos de R$25.000 a R$200.000 com prazos flexíveis de 50 a 90 meses.</p>
                <Link to="/planos" className="text-emerald-600 text-sm font-semibold hover:underline mt-auto">
                  Ver detalhes →
                </Link>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a]">Pesados</h3>
                <p className="text-sm text-slate-600">Créditos de R$180.000 a R$360.000 para frota, transporte e agronegócio.</p>
                <Link to="/planos" className="text-emerald-600 text-sm font-semibold hover:underline mt-auto">
                  Ver detalhes →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Por que escolher a Callseg */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-[#0f172a]">Por que escolher a Callseg?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Zero Juros", desc: "Diferente do financiamento bancário, aqui você não paga juros. Existe apenas uma taxa de administração diluída em todo o período." },
                { title: "Prazos Flexíveis", desc: "Planos de até 200 meses para imóveis, permitindo parcelas que cabem no seu orçamento mensal." },
                { title: "Poder de Compra à Vista", desc: "Com a carta de crédito em mãos, você negocia como se estivesse com o dinheiro vivo, conseguindo descontos agressivos." },
                { title: "Segurança Institucional", desc: "Operamos rigorosamente dentro das normas do Banco Central do Brasil, garantindo que seu investimento esteja protegido." },
                { title: "Consultoria Especializada", desc: "Não apenas vendemos cotas; ajudamos você a calcular o lance ideal e a estratégia de contemplação." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0f172a] text-sm">{item.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <Star className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#0f172a] text-sm">Porto Seguro</h4>
                  <p className="text-slate-600 text-sm mt-1">Trabalhamos com o consórcio da Porto Seguro, garantindo segurança, tradição e solidez para sua aquisição.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Calculadora */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#0f172a] to-[#081028] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Simule agora e veja quanto você pode economizar
            </h2>
            <p className="text-slate-200 max-w-2xl mx-auto mb-8">
              Use nossa calculadora com taxas reais da Callseg para comparar parcelas, lances e totais pagos.
            </p>
            <Link to="/calculadora">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 text-lg">
                <Calculator className="w-5 h-5 mr-2" />
                Abrir Calculadora
              </Button>
            </Link>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
