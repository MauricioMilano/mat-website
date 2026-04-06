import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, Calculator, CheckCircle } from "lucide-react";

const Contato: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = () => {
    const text = `Olá Callseg, meu nome é ${form.name}. ${form.message} — Contato: ${form.phone || form.email}`;
    window.open(
      `https://wa.me/5512982910109?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f172a] to-[#081028] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Fale Conosco
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Estamos prontos para te ajudar a encontrar o melhor plano de consórcio. Entre em contato agora.
            </p>
          </div>
        </section>

        {/* Contact grid */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">

            {/* Info column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Informações de contato</h2>
                <p className="text-slate-600">
                  O atendimento da Callseg é feito de forma personalizada. Fale diretamente com o Matheus Carvalho, especialista em consórcios Porto Seguro.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0f172a]">WhatsApp</div>
                    <a
                      href={`https://wa.me/5512982910109`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-emerald-600 hover:underline"
                    >
                      (12) 98291-0109
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0f172a]">Telefone</div>
                    <span className="text-sm text-slate-600">(12) 98291-0109</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0f172a]">Horário de atendimento</div>
                    <span className="text-sm text-slate-600">Segunda a sexta: 8h – 18h</span>
                    <br />
                    <span className="text-sm text-slate-600">Sábado: 8h – 12h</span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <h3 className="text-base font-semibold text-[#0f172a] mb-2">Resposta rápida</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Para um retorno mais ágil, envie uma mensagem direta pelo WhatsApp. Respondemos em até 2 horas em horário comercial.
                </p>
                <a
                  href={`https://wa.me/5512982910109?text=${encodeURIComponent(
                    "Olá Callseg (Consórcio Porto Seguro), gostaria de mais informações."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar mensagem agora
                  </Button>
                </a>
              </div>
            </div>

            {/* Form column */}
            <div className="bg-slate-50 rounded-2xl p-8 shadow-sm">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle className="w-14 h-14 text-emerald-500" />
                  <h3 className="text-xl font-bold text-[#0f172a]">Mensagem enviada!</h3>
                  <p className="text-slate-600">
                    Você foi redirecionado para o WhatsApp. Nossa equipe responderá em breve.
                  </p>
                  <Button variant="outline" className="rounded-full mt-2" onClick={() => setSent(false)}>
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-[#0f172a] mb-6">Envie sua mensagem</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">Mensagem *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Conte sobre o que você precisa: tipo de bem, valor aproximado, prazo desejado..."
                        rows={4}
                        className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
                      />
                    </div>
                    <Button
                      onClick={handleWhatsAppSend}
                      disabled={!form.name || !form.message}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-full py-3 disabled:opacity-50"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enviar pelo WhatsApp
                    </Button>
                    <p className="text-xs text-slate-400 text-center">
                      Ao enviar, você será redirecionado ao WhatsApp com sua mensagem preenchida.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* CTA bottom */}
        <section className="py-14 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-3 text-[#0f172a]">
              Ainda não simulou seu consórcio?
            </h2>
            <p className="text-slate-600 mb-6">
              Use nossa calculadora para ver as parcelas estimadas com as taxas reais antes de falar com a gente.
            </p>
            <Link to="/calculadora">
              <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full px-8">
                <Calculator className="w-4 h-4 mr-2" />
                Ir para a Calculadora
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

export default Contato;
