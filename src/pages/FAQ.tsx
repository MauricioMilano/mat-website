import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Calculator } from "lucide-react";

const faqs = [
  {
    category: "Sobre Consórcios",
    color: "text-emerald-600",
    items: [
      {
        q: "O que é consórcio?",
        a: "Consórcio é uma modalidade de compra coletiva em que um grupo de pessoas se reúne para adquirir bens ou serviços. Cada membro paga parcelas mensais e, ao longo do prazo, todos são contemplados com uma carta de crédito — por sorteio ou por lance.",
      },
      {
        q: "Qual a diferença entre consórcio e financiamento?",
        a: "No financiamento, você paga juros altíssimos ao banco — que podem dobrar o valor do bem. No consórcio, você paga apenas uma taxa de administração diluída no prazo, sem juros. A diferença pode representar dezenas de milhares de reais de economia.",
      },
      {
        q: "Como funciona a contemplação?",
        a: "A contemplação acontece mensalmente nas assembleias. Você pode ser contemplado por sorteio (aleatório) ou por lance (oferta antecipada de valor). Quem oferece o maior lance percentual sobre o crédito tem prioridade na contemplação.",
      },
      {
        q: "Posso usar FGTS no consórcio de imóveis?",
        a: "Sim! No consórcio de imóveis da Porto Seguro, você pode utilizar o FGTS tanto como lance para antecipar a contemplação quanto para amortizar parcelas após ser contemplado, desde que atenda às regras da Caixa Econômica Federal.",
      },
      {
        q: "Posso comprar qualquer imóvel ou veículo com a carta de crédito?",
        a: "Sim, a carta de crédito é aceita em todo o território nacional. Para imóveis, pode ser usada em residências, terrenos e imóveis comerciais. Para veículos, em carros novos e seminovos de até 5 anos.",
      },
    ],
  },
  {
    category: "Sobre a Callseg",
    color: "text-sky-600",
    items: [
      {
        q: "A Callseg é regulamentada?",
        a: "Sim. A Callseg opera como representante autorizada da Porto Seguro Consórcio, que é regulamentada e fiscalizada pelo Banco Central do Brasil. Seu investimento está protegido dentro das normas vigentes.",
      },
      {
        q: "Com qual administradora de consórcio a Callseg trabalha?",
        a: "Trabalhamos exclusivamente com a Porto Seguro, uma das instituições financeiras mais sólidas e respeitadas do Brasil, com décadas de história e tradição.",
      },
      {
        q: "Quais documentos preciso para contratar?",
        a: "Para pessoa física: RG ou CNH, CPF, comprovante de renda e comprovante de residência. Para pessoa jurídica: CNPJ, contrato social, documentos dos sócios e demonstrativos financeiros. Nossa equipe orienta você em cada etapa.",
      },
      {
        q: "Como entro em contato com a Callseg?",
        a: "O canal principal é o WhatsApp: (12) 98291-0109. Você também pode usar o formulário de contato no nosso site. Nossa equipe retorna em até 2 horas em horário comercial.",
      },
    ],
  },
  {
    category: "Sobre Pagamentos",
    color: "text-amber-600",
    items: [
      {
        q: "Como são calculadas as parcelas?",
        a: "A parcela é calculada sobre o valor do crédito considerando: taxa de administração + fundo de reserva + taxa de adesão (quando aplicável) + seguro. Tudo diluído no prazo escolhido. Use nossa calculadora para simular com precisão.",
      },
      {
        q: "O que é o lance e como funciona?",
        a: "O lance é uma oferta voluntária feita na assembleia para antecipar a contemplação. Você oferece um percentual do valor do crédito — quem oferece mais, contempla primeiro. O valor do lance pode ser descontado das parcelas finais.",
      },
      {
        q: "Posso antecipar parcelas ou quitar o consórcio?",
        a: "Sim. Você pode oferecer lances para reduzir o saldo devedor e até quitar antecipadamente. Consulte as condições específicas do seu plano com nossa equipe.",
      },
      {
        q: "O que acontece se eu atrasar uma parcela?",
        a: "Atrasos geram multa e juros moratórios conforme contrato. Além disso, membros com parcelas em atraso ficam impedidos de participar das assembleias até regularização. É importante manter o pagamento em dia para não perder contemplações.",
      },
    ],
  },
  {
    category: "Sobre Contemplação",
    color: "text-purple-600",
    items: [
      {
        q: "Quanto tempo demora para ser contemplado?",
        a: "Pode variar de 1 mês (se você oferecer o maior lance na primeira assembleia) até o prazo total do plano. Em média, clientes com estratégia de lance são contemplados entre 12 e 36 meses. Nossa consultoria ajuda a definir a melhor estratégia.",
      },
      {
        q: "Como posso aumentar minhas chances de contemplação?",
        a: "A principal estratégia é o lance: quanto maior o percentual oferecido, maior a chance. Você pode também monitorar o histórico de lances do seu grupo para calibrar a oferta ideal. Nossa equipe te orienta sobre o lance mínimo competitivo para cada grupo.",
      },
      {
        q: "O que é assembleia e como funciona?",
        a: "Assembleia é a reunião mensal do grupo de consórcio onde ocorrem os sorteios e a análise dos lances. Todas as assembleias são supervisionadas e seguem regulamento aprovado pelo Banco Central. Você recebe notificações do resultado.",
      },
      {
        q: "Depois de contemplado, sou obrigado a usar o crédito imediatamente?",
        a: "Não necessariamente. Após a contemplação, a carta de crédito passa por uma análise de crédito. Uma vez liberada, você tem prazo para indicar o bem a ser adquirido. Consulte as condições do seu grupo com nossa equipe.",
      },
    ],
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f172a] to-[#081028] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Tire suas dúvidas sobre consórcio, planos, pagamentos e contemplação.
            </p>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className={`text-lg font-bold mb-4 ${section.color}`}>
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${section.category}-${i}`}
                      className="border border-slate-200 rounded-xl px-4 data-[state=open]:shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-sm font-semibold text-[#0f172a] hover:no-underline py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-slate-600 pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-3 text-[#0f172a]">
              Não encontrou o que procurava?
            </h2>
            <p className="text-slate-600 mb-6">
              Nossa equipe está pronta para responder qualquer dúvida sobre consórcios, planos ou estratégias de contemplação.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                  "Olá Callseg, tenho uma dúvida que não encontrei no FAQ."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Perguntar pelo WhatsApp
                </Button>
              </a>
              <Link to="/calculadora">
                <Button variant="outline" className="rounded-full px-8">
                  <Calculator className="w-4 h-4 mr-2" />
                  Simular agora
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

export default FAQ;
