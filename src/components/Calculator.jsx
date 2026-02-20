"use client";

import { useState } from "react";
import {
  calcularCuota,
  calcularRendimientoNeto,
  COTIZACION_TYPES_2026,
} from "@/data/taxTables";

export default function Calculator() {
  const [ingresos, setIngresos] = useState("");
  const [gastos, setGastos] = useState("");
  const [esSocietario, setEsSocietario] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const ing = parseFloat(ingresos) || 0;
    const gas = parseFloat(gastos) || 0;

    if (ing <= 0) return;

    const rn = calcularRendimientoNeto(ing, gas, esSocietario);
    const cuota = calcularCuota(rn.rendimientoNetoMensual, 2026);

    setResult({ ...rn, ...cuota });
  };

  const fmt = (n) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(n);

  return (
    <div className="calculator" id="calculadora">
      <form className="calculator__form" onSubmit={handleCalculate}>
        <div className="calculator__row">
          <div className="calculator__field">
            <label htmlFor="ingresos">Ingresos brutos anuales (€)</label>
            <input
              id="ingresos"
              type="number"
              placeholder="ej: 36000"
              value={ingresos}
              onChange={(e) => setIngresos(e.target.value)}
              min="0"
              step="100"
              required
            />
          </div>
          <div className="calculator__field">
            <label htmlFor="gastos">Gastos deducibles anuales (€)</label>
            <input
              id="gastos"
              type="number"
              placeholder="ej: 6000"
              value={gastos}
              onChange={(e) => setGastos(e.target.value)}
              min="0"
              step="100"
            />
          </div>
        </div>

        <div className="calculator__toggle-row">
          <button
            type="button"
            className={`calculator__toggle ${esSocietario ? "active" : ""}`}
            onClick={() => setEsSocietario(!esSocietario)}
            aria-label="Toggle autónomo societario"
          />
          <span className="calculator__toggle-label">
            Soy autónomo societario{" "}
            <span style={{ color: "var(--cc-text-muted)", fontSize: "0.82rem" }}>
              (deducción 3% en lugar de 7%)
            </span>
          </span>
        </div>

        <button type="submit" className="btn btn--primary btn--large calculator__btn">
          Calcular mi cuota 2026
        </button>
      </form>

      {result && (
        <div className={`calculator__results ${result ? "visible" : ""}`}>
          <div className="results__header">
            <h3>Tu cuota estimada 2026</h3>
            <span className="results__tramo-badge">
              {result.tramo.tabla === "reducida" ? "Tabla reducida" : "Tabla general"} · Tramo{" "}
              {result.tramo.id}
            </span>
          </div>

          <div className="results__grid">
            <div className="results__item">
              <div className="results__label">Cuota mínima/mes</div>
              <div className="results__value results__value--accent">
                {fmt(result.cuotaMinima)}
              </div>
            </div>
            <div className="results__item">
              <div className="results__label">Cuota anual estimada</div>
              <div className="results__value">{fmt(result.cuotaMinima * 12)}</div>
            </div>
            <div className="results__item">
              <div className="results__label">Rendimiento neto/mes</div>
              <div className="results__value">{fmt(result.rendimientoNetoMensual)}</div>
            </div>
          </div>

          <hr className="results__divider" />

          <div className="results__breakdown">
            <div className="results__breakdown-item">
              <span>Ingresos brutos anuales</span>
              <span>{fmt(result.ingresosAnuales)}</span>
            </div>
            <div className="results__breakdown-item">
              <span>Gastos deducibles</span>
              <span>−{fmt(result.gastosAnuales)}</span>
            </div>
            <div className="results__breakdown-item">
              <span>Deducción gastos genéricos ({Math.round(result.porcentajeDeduccion)}%)</span>
              <span>−{fmt(result.deduccionGastosGenericos)}</span>
            </div>
            <div className="results__breakdown-item">
              <span>Rendimiento neto anual</span>
              <span>{fmt(result.rendimientoNetoAnual)}</span>
            </div>
            <div className="results__breakdown-item">
              <span>Base cotización mínima</span>
              <span>{fmt(result.baseMinima)}/mes</span>
            </div>
            <div className="results__breakdown-item">
              <span>Tipo de cotización total</span>
              <span>{result.tipoTotal}%</span>
            </div>
          </div>

          <div className="results__disclaimer">
            Cálculo orientativo basado en la tabla de cotización 2025/2026 (RDL 16/2025). Incluye
            MEI 0,9%. Las cuotas reales se regularizarán según tus rendimientos definitivos. Esta
            herramienta no sustituye al asesoramiento profesional.
          </div>
        </div>
      )}
    </div>
  );
}
