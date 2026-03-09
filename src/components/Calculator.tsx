import React, { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

type Category = "Imóvel" | "Auto" | "Pesados";

const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const Calculator: React.FC = () => {
  const [category, setCategory] = useState<Category>("Imóvel");
  const [value, setValue] = useState<number>(140000);

  const ranges = useMemo(() => {
    return {
      Imóvel: { min: 70000, max: 900000, step: 1000, default: 140000, prazo: 200 },
      Auto: { min: 25000, max: 200000, step: 500, default: 50000, prazo: 72 },
      Pesados: { min: 180000, max: 360000, step: 1000, default: 180000, prazo: 120 },
    } as const;
  }, []);

  // adjust value when category changes
  React.useEffect(() => {
    const r = ranges[category];
    setValue(Math.min(Math.max(value, r.min), r.max));
  }, [category]);

  const getRates = (cat: Category, val: number) => {
    // returns: {adm, fundo, adesao, seguroMonthlyRate, prazo}
    if (cat === "Imóvel") {
      const seguro = 0.00038; // monthly
      const fundo = 0.02;
      const adesao = 0.02;
      const prazo = 200;
      if (val >= 70000 && val < 140000) return { adm: 0.25, fundo, adesao, seguro, prazo };
      if (val >= 140000 && val < 280000) return { adm: 0.23, fundo, adesao, seguro, prazo };
      if (val >= 280000 && val < 560000) return { adm: 0.21, fundo, adesao, seguro, prazo };
      if (val >= 600000 && val <= 900000) return { adm: 0.19, fundo, adesao, seguro, prazo };
      // fallback
      return { adm: 0.23, fundo, adesao, seguro, prazo };
    }

    if (cat === "Auto") {
      const seguro = 0.00038;
      const fundo = 0.02;
      const adesao = 0; // no adesão for auto per spec
      // ranges with different prazos
      if ((val >= 25000 && val <= 50000) || (val >= 34000 && val <= 65000)) return { adm: 0.18, fundo, adesao, seguro, prazo: 50 };
      if (val >= 62500 && val <= 125000) return { adm: 0.16, fundo, adesao, seguro, prazo: 80 };
      if (val >= 125000 && val <= 200000) return { adm: 0.15, fundo, adesao, seguro, prazo: 90 };
      return { adm: 0.18, fundo, adesao, seguro, prazo: 72 };
    }

    // Pesados
    if (cat === "Pesados") {
      const seguro = 0.00038;
      const fundo = 0.02;
      const adesao = 0;
      const prazo = 120;
      if (val >= 180000 && val <= 360000) return { adm: 0.14, fundo, adesao, seguro, prazo };
      return { adm: 0.14, fundo, adesao, seguro, prazo };
    }

    return { adm: 0.2, fundo: 0.02, adesao: 0, seguro: 0.00038, prazo: 60 };
  };

  const rates = getRates(category, value);

  const parcela = useMemo(() => {
    const credito = value;
    const taxaTotal = (rates.adm || 0) + (rates.fundo || 0) + (rates.adesao || 0);
    const parcelaBase = (credito * (1 + taxaTotal)) / (rates.prazo || 1);
    const seguro = credito * (rates.seguro || 0);
    return parcelaBase + seguro;
  }, [value, rates]);

  const whatsappHref = `https://wa.me/552199999000?text=${encodeURIComponent(
    `Olá SmartCon, gostaria de saber mais sobre o consórcio de ${category} no valor de R$ ${value}`
  )}`;

  return (
    <section id="calculadora" className="py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Simule agora e surpreenda-se.</h3>
        <p className="text-slate-600 mb-6">Use a calculadora com as taxas reais da SmartCon.</p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <button
              onClick={() => setCategory("Imóvel")}
              className={`rounded-full px-4 py-2 ${category === "Imóvel" ? "bg-[#0f172a] text-white" : "bg-slate-100 text-slate-700"}`}
            >
              Imóvel
            </button>
            <button
              onClick={() => setCategory("Auto")}
              className={`rounded-full px-4 py-2 ${category === "Auto" ? "bg-[#0f172a] text-white" : "bg-slate-100 text-slate-700"}`}
            >
              Auto
            </button>
            <button
              onClick={() => setCategory("Pesados")}
              className={`rounded-full px-4 py-2 ${category === "Pesados" ? "bg-[#0f172a] text-white" : "bg-slate-100 text-slate-700"}`}
            >
              Pesados
            </button>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <div className="text-sm text-slate-600">Valor do Crédito</div>
              <div className="text-lg font-semibold text-[#0f172a]">{formatBRL(value)}</div>
            </div>

            <input
              type="range"
              min={ranges[category].min}
              max={ranges[category].max}
              step={ranges[category].step}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none accent-emerald-500"
            />

            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>{formatBRL(ranges[category].min)}</span>
              <span>{formatBRL(ranges[category].max)}</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-xs text-slate-500">Prazo</div>
              <div className="text-lg font-semibold">{rates.prazo} meses</div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-xs text-slate-500">Parcela estimada</div>
              <div className="text-lg font-semibold">{formatBRL(parcela)}</div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-xs text-slate-500">Taxas aplicadas</div>
              <div className="text-sm font-medium text-[#0f172a]">
                Adm: {(rates.adm * 100).toFixed(2)}% • Fundo: {(rates.fundo * 100).toFixed(2)}% {rates.adesao ? `• Adesão: ${(rates.adesao * 100).toFixed(2)}%` : ""}
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-xs text-slate-500">Seguro Vida (mensal)</div>
              <div className="text-lg font-semibold">{formatBRL(value * (rates.seguro || 0))}</div>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6">Solicitar Proposta</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
