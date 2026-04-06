import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Shield, Users, Heart, ArrowRight, MessageCircle } from "lucide-react";

const QuemSomos: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-[#0f172a] to-[#081028] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Quem Somos
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Conheça a Callseg e o especialista por trás da sua jornada patrimonial.
            </p>
          </div>
        </section>

        {/* Matheus Carvalho bio */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
            <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/placeholder-photo.jpg"
                alt="Matheus Carvalho - Especialista em Consórcios"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-[#0f172a]">
                Matheus Carvalho
              </h2>
              <p className="text-emerald-600 font-semibold mb-4">
                Especialista em Consórcios — Porto Seguro
              </p>
              <div className="text-slate-700 space-y-4">
                <p>
                  Com anos de experiência no mercado financeiro e de seguros, Matheus Carvalho dedicou sua carreira a ajudar brasileiros a construírem patrimônio de forma inteligente e sem a carga dos juros abusivos do financiamento tradicional.
                </p>
                <p>
                  Como representante autorizado da <strong>Porto Seguro</strong>, uma das instituições mais sólidas e respeitadas do Brasil, Matheus oferece acesso exclusivo aos melhores planos de consórcio do mercado, com taxas competitivas e atendimento personalizado.
                </p>
                <p>
                  Sua missão é clara: <strong>democratizar o acesso ao patrimônio</strong>, garantindo que cada cliente tenha a consultoria necessária para tomar a melhor decisão financeira — seja para adquirir um imóvel, um veículo ou renovar a frota da empresa.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                    "Olá Matheus, vi o site e gostaria de uma consultoria personalizada."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Fale com o Matheus
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-[#0f172a] text-center">
              Nossos Valores
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Transparência</h3>
                <p className="text-sm text-slate-600">
                  Sem letras miúdas. Cada taxa, cada condição é explicada com clareza antes de qualquer compromisso.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Ética</h3>
                <p className="text-sm text-slate-600">
                  Atuamos com integridade e responsabilidade, sempre priorizando o melhor interesse do cliente.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Compromisso</h3>
                <p className="text-sm text-slate-600">
                  Acompanhamos você do planejamento até a contemplação, garantindo suporte em cada etapa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-slate-600 mb-6">
              Descubra como o consórcio pode ser a melhor opção para o seu planejamento financeiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/planos">
                <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full px-6">
                  Ver Planos <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                  "Olá Callseg, gostaria de saber mais sobre os consórcios."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="rounded-full px-6">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fale Conosco
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuemSomos;
