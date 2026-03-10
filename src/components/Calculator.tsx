import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type Category = "Imóvel" | "Auto" | "Pesados";

const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

type RateOption = {
  id: string;
  adm: number;
  fundo: number;
  adesao: number;
  seguro: number; // monthly rate (e.g., 0.00038)
  prazo: number;
  label?: string;
};

const Calculator: React.FC = () => {
  const [category, setCategory] = useState<Category>("Imóvel");
  const [value, setValue] = useState<number>(140000);

  // Lance fields (value in R$ or percent 0-100)
  const [lanceValue, setLanceValue] = useState<number | "">("");
  const [lancePercent, setLancePercent] = useState<number | "">("");
  const [mesesContemplacao, setMesesContemplacao] = useState<number>(12);

  // Redutor pré (ex: 75 -> 75%)
  const [redutorPrePercent, setRedutorPrePercent] = useState<number>(75);

  const ranges = useMemo(() => {
    return {
      Imóvel: { min: 70000, max: 900000, step: 1000, default: 140000 },
      Auto: { min: 25000, max: 200000, step: 500, default: 50000 },
      Pesados: { min: 180000, max: 360000, step: 1000, default: 180000 },
    } as const;
  }, []);

  React.useEffect(() => {
    const r = ranges[category];
    setValue((current) => Math.min(Math.max(current, r.min), r.max));
    // Reset lance when category/value changes to avoid inconsistent percentages
    setLanceValue("");
    setLancePercent("");
  }, [category, ranges]);

  // retorna as opções de taxa/prazo conforme categoria/valor
  const getRateOptions = (cat: Category, val: number): RateOption[] => {
    const seguro = 0.00038;
    const fundo = 0.02;

    if (cat === "Imóvel") {
      const prazo = 200;
      const opts: RateOption[] = [];
      if (val >= 70000 && val <= 140000) {
        opts.push({ id: "im-1", adm: 0.25, fundo, adesao: 0.02, seguro, prazo });
      }
      if (val > 140000 && val <= 280000) {
        opts.push({ id: "im-2", adm: 0.23, fundo, adesao: 0.02, seguro, prazo });
      }
      if (val > 280000 && val <= 560000) {
        opts.push({ id: "im-3", adm: 0.21, fundo, adesao: 0.02, seguro, prazo });
      }
      if (val >= 600000 && val <= 900000) {
        opts.push({ id: "im-4", adm: 0.19, fundo, adesao: 0.02, seguro, prazo });
      }
      return opts;
    }

    if (cat === "Auto") {
      const opts: RateOption[] = [];
      if (val >= 25000 && val <= 50000) {
        opts.push({ id: "auto-50", adm: 0.18, fundo, adesao: 0, seguro, prazo: 50, label: "50 meses" });
      }
      if (val >= 34000 && val <= 65000) {
        opts.push({ id: "auto-72", adm: 0.18, fundo, adesao: 0, seguro, prazo: 72, label: "72 meses" });
      }
      if (val >= 62500 && val <= 125000) {
        opts.push({ id: "auto-80", adm: 0.16, fundo, adesao: 0, seguro, prazo: 80, label: "80 meses" });
      }
      if (val >= 125000 && val <= 200000) {
        opts.push({ id: "auto-90", adm: 0.15, fundo, adesao: 0, seguro, prazo: 90, label: "90 meses" });
      }
      return opts;
    }

    if (cat === "Pesados") {
      const opts: RateOption[] = [];
      if (val >= 180000 && val <= 360000) {
        opts.push({ id: "pes-1", adm: 0.14, fundo: 0.02, adesao: 0, seguro: 0.00038, prazo: 120 });
      }
      return opts;
    }

    return [];
  };

  const rateOptions = useMemo(() => getRateOptions(category, value), [category, value]);

  // Helper: parse lance atual (em R$)
  const computeLanceValor = (val: number, lanceV: number | "", lanceP: number | ""): number => {
    if (lanceV !== "") return Number(lanceV);
    if (lanceP !== "") return (Number(lanceP) / 100) * val;
    return 0;
  };

  // Sincronização dos campos de lance (percent <-> valor)
  const onLancePercentChange = (pRaw: string) => {
    const p = pRaw === "" ? "" : Number(pRaw);
    setLancePercent(p);
    if (p === "") {
      setLanceValue("");
      return;
    }
    const amount = (Number(p) / 100) * value;
    setLanceValue(Number(amount.toFixed(2)));
  };

  const onLanceValueChange = (vRaw: string) => {
    const v = vRaw === "" ? "" : Number(vRaw);
    setLanceValue(v);
    if (v === "" || value === 0) {
      setLancePercent("");
      return;
    }
    const percent = (Number(v) / value) * 100;
    setLancePercent(Number(percent.toFixed(2)));
  };

  const whatsappHref = (cat: string, val: number) =>
    `https://wa.me/5512982910109?text=${encodeURIComponent(`Olá SmartCon, gostaria de saber mais sobre o consórcio de ${cat} no valor de R$ ${val}`)}`;

  // constante mensal de adm (conforme seu exemplo)
  const TAXA_MENSAL_ADM = 0.0074;

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

          {/* Lance and Redutor inputs */}
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-sm text-slate-500 mb-2">Lance (opcional)</div>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="flex-1">
                <label className="text-xs text-slate-600">Valor do lance (R$)</label>
                <input
                  type="number"
                  min={0}
                  value={lanceValue === "" ? "" : String(lanceValue)}
                  onChange={(e) => onLanceValueChange(e.target.value)}
                  placeholder="Ex: 10000"
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>

              <div className="w-40">
                <label className="text-xs text-slate-600">Lance (%)</label>
                <input
                  type="number"
                  min={0}
                  value={lancePercent === "" ? "" : String(lancePercent)}
                  onChange={(e) => onLancePercentChange(e.target.value)}
                  placeholder="Ex: 10"
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>

              <div className="w-40">
                <label className="text-xs text-slate-600">Meses até contemplação</label>
                <input
                  type="number"
                  min={0}
                  value={mesesContemplacao}
                  onChange={(e) => setMesesContemplacao(Math.max(0, Number(e.target.value)))}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-600">Redutor pré (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={redutorPrePercent}
                  onChange={(e) => setRedutorPrePercent(Math.max(0, Math.min(100, Number(e.target.value))))}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
                <div className="text-xs text-slate-500 mt-1">Ex: 75 = 75% (recomendado em muitos cenários)</div>
              </div>

              <div>
                <label className="text-xs text-slate-600">Observação seguro / notas</label>
                <div className="text-xs text-slate-500 mt-1">Seguro de vida mensal é calculado como crédito × taxa de seguro (ex.: 0.00038).</div>
              </div>
            </div>

            <div className="text-xs text-slate-500 mt-2">
              Digite um valor ou porcentagem de lance; os campos serão sincronizados automaticamente.
            </div>
          </div>

          {/* Results area */}
          <div className="grid gap-4">
            {rateOptions.length === 0 ? (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800">
                <strong>Valor fora das faixas definidas para a categoria selecionada.</strong>
                <div className="text-sm">Ajuste o valor para ver as opções de taxa disponíveis.</div>
              </div>
            ) : (
              rateOptions.map((opt) => {
                // seguro de vida mensal (valor fixo mensal derivado da taxa)
                const seguroVida = value * opt.seguro;

                // calculos conforme a lógica fornecida
                const taxaMensalAdm = TAXA_MENSAL_ADM; // constante de exemplo

                const primeiraParcela = (value * taxaMensalAdm) + seguroVida;

                const custoTotalBase = value + (value * (opt.adm + opt.fundo));
                const redutorPre = redutorPrePercent / 100;
                const parcelaPre = (redutorPre * (custoTotalBase / opt.prazo)) + (custoTotalBase * 0.00045);

                const valorLance = computeLanceValor(value, lanceValue, lancePercent);

                const valorTotalComTaxas = value + (value * (opt.adm + opt.fundo + opt.adesao));
                const prazoRestante = Math.max(1, opt.prazo - 1);
                const parcelaPos = ((valorTotalComTaxas - valorLance) / prazoRestante) + seguroVida;

                // Para compatibilidade visual, também calculamos a parcela estimada simples
                const parcelaEstimadaSimples = (() => {
                  const taxaTotal = opt.adm + opt.fundo + opt.adesao;
                  const parcelaBase = (value * (1 + taxaTotal)) / opt.prazo;
                  const seguro = value * opt.seguro;
                  return parcelaBase + seguro;
                })();

                const meses = Math.min(mesesContemplacao, opt.prazo);
                const totalPaidToContempl = parcelaPre * meses + valorLance;
                const totalPaidFull = parcelaPos * opt.prazo; // aproximação pós-cont.
                return (
                  <div key={opt.id} className="bg-slate-50 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-xs text-slate-500">Opção</div>
                      <div className="text-lg font-semibold text-[#0f172a]">{opt.label ?? `${opt.prazo} meses`}</div>
                      <div className="text-sm text-slate-600 mt-1">
                        Adm: {(opt.adm * 100).toFixed(2)}% • Fundo: {(opt.fundo * 100).toFixed(2)}% {opt.adesao ? `• Adesão: ${(opt.adesao * 100).toFixed(2)}%` : ""}
                      </div>

                      <div className="text-sm text-slate-600 mt-2">Seguro (mensal): {formatBRL(seguroVida)}</div>

                      <div className="text-sm text-slate-600 mt-2">1ª Parcela (fórmula nova): <strong>{formatBRL(primeiraParcela)}</strong></div>

                      <div className="text-sm text-slate-600 mt-2">Parcela até contemplar (com redutor): <strong>{formatBRL(parcelaPre)}</strong></div>

                      <div className="text-sm text-slate-600 mt-2">Lance ofertado: <strong>{formatBRL(valorLance)}</strong> {valorLance > 0 ? `(${((valorLance / value) * 100).toFixed(2)}%)` : ""}</div>

                      <div className="text-sm text-slate-600 mt-1">Meses considerados até contemplação: {meses}</div>
                    </div>

                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-xs text-slate-500">Parcela estimada (referência)</div>
                      <div className="text-2xl font-bold text-[#0f172a]">{formatBRL(parcelaEstimadaSimples)}</div>

                      <div className="mt-3 text-sm text-slate-700">
                        <div>Total pago até contemplação (parc. pré + lance): <strong>{formatBRL(totalPaidToContempl)}</strong></div>
                        <div className="mt-1">Estimativa de parcela pós-contemplação: <strong>{formatBRL(parcelaPos)}</strong></div>
                        <div className="mt-1">Estimativa pago ao final (aprox.): <strong>{formatBRL(totalPaidFull)}</strong></div>
                      </div>

                      <div className="mt-3 flex justify-end">
                        <a href={whatsappHref(category, value)} target="_blank" rel="noreferrer">
                          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-4">Solicitar Proposta</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;