import React from "react";
import { Button } from "@/components/ui/button";
import { Home, Truck, Car } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#081028] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 font-sans">
            SmartCon: O caminho inteligente para conquistar seu patrimônio sem juros abusivos.
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl mb-6">
            Democratizamos o acesso ao patrimônio com planos flexíveis, transparência e as melhores taxas do mercado. Simule agora e surpreenda-se.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                "Olá SmartCon, vi o site e gostaria de uma simulação personalizada"
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 py-3 shadow-lg">
                QUERO UMA CONSULTORIA GRATUITA
              </Button>
            </a>

            <a href="#calculadora" className="ml-0 sm:ml-3">
              <Button className="bg-transparent border border-slate-400 text-slate-200 rounded-full px-6 py-3 hover:bg-white/5">
                Simular Agora
              </Button>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-200 font-semibold">Imóveis</div>
                <div className="text-xs text-slate-300">Até 200 meses</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-200 font-semibold">Auto</div>
                <div className="text-xs text-slate-300">Prazos 50–90 meses</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-200 font-semibold">Pesados</div>
                <div className="text-xs text-slate-300">Até 120 meses</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <img
            src="/hero.jpg"
            alt="Família feliz na casa nova"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[36rem] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;