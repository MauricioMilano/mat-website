import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Calculator from "@/components/Calculator";
import { MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Calculadora: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f172a] to-[#081028] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Calculadora de Consórcio
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Simule com as taxas reais da Callseg e descubra quanto você pagaria por mês — sem surpresas.
            </p>
          </div>
        </section>

        {/* Helper tips */}
        <section className="py-8 px-6 bg-amber-50 border-b border-amber-100">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Dica:</strong> Experimente inserir um valor de lance para ver como ele reduz seu total pago até a contemplação.
              Para imóveis, você pode usar o FGTS como lance. Ajuste os meses até contemplação para simular diferentes cenários.
            </p>
          </div>
        </section>

        {/* Calculator component */}
        <Calculator />

        {/* CTA — personalized help */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-3 text-[#0f172a]">
              Prefere uma simulação personalizada?
            </h2>
            <p className="text-slate-600 mb-6">
              Nosso especialista pode te ajudar a calcular o lance ideal, estimar o tempo de contemplação e escolher o plano certo para o seu perfil.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                  "Olá Callseg, gostaria de uma simulação personalizada do consórcio."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com especialista
                </Button>
              </a>
              <Link to="/faq">
                <Button variant="outline" className="rounded-full px-8">
                  Tirar dúvidas no FAQ
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

export default Calculadora;
