import React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Cliente - Imóvel",
    text: "A Callseg me explicou tudo com clareza e a simulação me ajudou a planejar o lance com segurança. Atendimento excelente.",
  },
  {
    name: "Ricardo T.",
    role: "Cliente - Auto",
    text: "Gostei da transparência nas taxas e da forma simples de comparar cenários. Consegui escolher um plano que cabe no meu orçamento.",
  },
  {
    name: "Fernanda M.",
    role: "Cliente - Imóvel",
    text: "O suporte foi muito rápido e o time passou confiança em cada etapa. Me senti segura para seguir com a proposta.",
  },
  {
    name: "Carlos A.",
    role: "Cliente - Pesados",
    text: "Precisei de um plano para expansão da operação e encontrei uma solução clara, com bom custo-benefício e orientação personalizada.",
  },
  {
    name: "Juliana P.",
    role: "Cliente - Imóvel",
    text: "A calculadora e a consultoria fizeram toda a diferença. Entendi exatamente quanto pagaria e qual lance faria mais sentido.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0f172a]">Depoimentos de clientes</h2>
          <p className="text-slate-600 mt-2">
            Veja como a consultoria da Callseg tem ajudado clientes a escolher o melhor caminho no consórcio.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Quote className="w-5 h-5" />
                    </div>
                    <div className="flex items-center text-amber-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">“{item.text}”</p>

                  <div className="mt-auto pt-2 border-t border-slate-100">
                    <div className="font-semibold text-[#0f172a]">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-4 bg-white border-slate-200 shadow-sm hover:bg-slate-50" />
          <CarouselNext className="hidden md:flex -right-4 bg-white border-slate-200 shadow-sm hover:bg-slate-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
