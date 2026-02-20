/**
 * CuotaClara - Tax Tables 2025/2026
 * 
 * Source: Seguridad Social oficial - Orden PCJ/178/2025 (BOE 26/02/2025)
 * 2026 status: Cuotas CONGELADAS respecto a 2025 (Real Decreto-ley 16/2025)
 * Only change: MEI sube de 0.80% a 0.90% (+0.1%)
 * 
 * Last verified: February 2026
 */

// Cotización types breakdown (2025 = same for 2026 base rates)
// Contingencias comunes: 28.30%
// Contingencias profesionales: 1.30%
// Cese de actividad: 0.90%
// Formación profesional: 0.10%
// MEI 2025: 0.80% | MEI 2026: 0.90%
// TOTAL 2025: 31.40% | TOTAL 2026: 31.50%

export const COTIZACION_TYPES_2025 = {
  contingenciasComunes: 28.30,
  contingenciasProfesionales: 1.30,
  ceseActividad: 0.90,
  formacionProfesional: 0.10,
  mei: 0.80,
  total: 31.40,
};

export const COTIZACION_TYPES_2026 = {
  contingenciasComunes: 28.30,
  contingenciasProfesionales: 1.30,
  ceseActividad: 0.90,
  formacionProfesional: 0.10,
  mei: 0.90,
  total: 31.50,
};

// Deducción gastos genéricos
export const DEDUCCION_GASTOS = {
  personaFisica: 0.07, // 7%
  societario: 0.03,    // 3%
};

// Tarifa plana
export const TARIFA_PLANA = {
  cuotaMensual: 80,
  duracionMeses: 12,
  duracionMaximaMeses: 24, // si rendimientos < SMI
};

/**
 * Official 2025 tramos (= 2026 tramos, frozen by RDL 16/2025)
 * Bases from Seg Social official PDF
 * 
 * The cuotaMinima is calculated as: baseMinima * totalType%
 * For 2026: baseMinima * 31.50%
 * For 2025: baseMinima * 31.40%
 */
export const TRAMOS_2025_2026 = [
  // TABLA REDUCIDA (Tramos 1-3)
  {
    id: 1,
    tabla: "reducida",
    tramo: 1,
    label: "≤ 670 €",
    minRendimiento: 0,
    maxRendimiento: 670,
    baseMinima: 653.59,
    baseMaxima: 718.94,
  },
  {
    id: 2,
    tabla: "reducida",
    tramo: 2,
    label: "> 670 y ≤ 900 €",
    minRendimiento: 670.01,
    maxRendimiento: 900,
    baseMinima: 718.95,
    baseMaxima: 900.00,
  },
  {
    id: 3,
    tabla: "reducida",
    tramo: 3,
    label: "> 900 y < 1.166,70 €",
    minRendimiento: 900.01,
    maxRendimiento: 1166.69,
    baseMinima: 849.67,
    baseMaxima: 1166.70,
  },
  // TABLA GENERAL (Tramos 4-15... mapped as 1-12 in general)
  {
    id: 4,
    tabla: "general",
    tramo: 1,
    label: "≥ 1.166,70 y ≤ 1.300 €",
    minRendimiento: 1166.70,
    maxRendimiento: 1300,
    baseMinima: 950.98,
    baseMaxima: 1300.00,
  },
  {
    id: 5,
    tabla: "general",
    tramo: 2,
    label: "> 1.300 y ≤ 1.500 €",
    minRendimiento: 1300.01,
    maxRendimiento: 1500,
    baseMinima: 960.78,
    baseMaxima: 1500.00,
  },
  {
    id: 6,
    tabla: "general",
    tramo: 3,
    label: "> 1.500 y ≤ 1.700 €",
    minRendimiento: 1500.01,
    maxRendimiento: 1700,
    baseMinima: 960.78,
    baseMaxima: 1700.00,
  },
  {
    id: 7,
    tabla: "general",
    tramo: 4,
    label: "> 1.700 y ≤ 1.850 €",
    minRendimiento: 1700.01,
    maxRendimiento: 1850,
    baseMinima: 1143.79,
    baseMaxima: 1850.00,
  },
  {
    id: 8,
    tabla: "general",
    tramo: 5,
    label: "> 1.850 y ≤ 2.030 €",
    minRendimiento: 1850.01,
    maxRendimiento: 2030,
    baseMinima: 1209.15,
    baseMaxima: 2030.00,
  },
  {
    id: 9,
    tabla: "general",
    tramo: 6,
    label: "> 2.030 y ≤ 2.330 €",
    minRendimiento: 2030.01,
    maxRendimiento: 2330,
    baseMinima: 1274.51,
    baseMaxima: 2330.00,
  },
  {
    id: 10,
    tabla: "general",
    tramo: 7,
    label: "> 2.330 y ≤ 2.760 €",
    minRendimiento: 2330.01,
    maxRendimiento: 2760,
    baseMinima: 1356.21,
    baseMaxima: 2760.00,
  },
  {
    id: 11,
    tabla: "general",
    tramo: 8,
    label: "> 2.760 y ≤ 3.190 €",
    minRendimiento: 2760.01,
    maxRendimiento: 3190,
    baseMinima: 1437.91,
    baseMaxima: 3190.00,
  },
  {
    id: 12,
    tabla: "general",
    tramo: 9,
    label: "> 3.190 y ≤ 3.620 €",
    minRendimiento: 3190.01,
    maxRendimiento: 3620,
    baseMinima: 1519.61,
    baseMaxima: 3620.00,
  },
  {
    id: 13,
    tabla: "general",
    tramo: 10,
    label: "> 3.620 y ≤ 4.050 €",
    minRendimiento: 3620.01,
    maxRendimiento: 4050,
    baseMinima: 1601.31,
    baseMaxima: 4050.00,
  },
  {
    id: 14,
    tabla: "general",
    tramo: 11,
    label: "> 4.050 y ≤ 6.000 €",
    minRendimiento: 4050.01,
    maxRendimiento: 6000,
    baseMinima: 1732.03,
    baseMaxima: 4909.50,
  },
  {
    id: 15,
    tabla: "general",
    tramo: 12,
    label: "> 6.000 €",
    minRendimiento: 6000.01,
    maxRendimiento: Infinity,
    baseMinima: 1928.10,
    baseMaxima: 4909.50,
  },
];

/**
 * Calculate the cuota for a given monthly net income
 * @param {number} rendimientoNetoMensual - Monthly net income in euros
 * @param {number} year - 2025 or 2026
 * @returns {object} Calculation result
 */
export function calcularCuota(rendimientoNetoMensual, year = 2026) {
  const tipos = year === 2025 ? COTIZACION_TYPES_2025 : COTIZACION_TYPES_2026;
  
  const tramo = TRAMOS_2025_2026.find(
    (t) =>
      rendimientoNetoMensual >= t.minRendimiento &&
      rendimientoNetoMensual <= t.maxRendimiento
  );

  if (!tramo) {
    // Default to highest tramo if above all ranges
    const highest = TRAMOS_2025_2026[TRAMOS_2025_2026.length - 1];
    const cuotaMinima = +(highest.baseMinima * tipos.total / 100).toFixed(2);
    const cuotaMaxima = +(highest.baseMaxima * tipos.total / 100).toFixed(2);
    return {
      tramo: highest,
      cuotaMinima,
      cuotaMaxima,
      baseMinima: highest.baseMinima,
      baseMaxima: highest.baseMaxima,
      tipoTotal: tipos.total,
      year,
    };
  }

  const cuotaMinima = +(tramo.baseMinima * tipos.total / 100).toFixed(2);
  const cuotaMaxima = +(tramo.baseMaxima * tipos.total / 100).toFixed(2);

  return {
    tramo,
    cuotaMinima,
    cuotaMaxima,
    baseMinima: tramo.baseMinima,
    baseMaxima: tramo.baseMaxima,
    tipoTotal: tipos.total,
    year,
  };
}

/**
 * Calculate rendimiento neto from gross income and expenses
 * @param {number} ingresosAnuales - Annual gross income
 * @param {number} gastosAnuales - Annual deductible expenses
 * @param {boolean} esSocietario - Is autónomo societario
 * @returns {object} Net income calculation
 */
export function calcularRendimientoNeto(ingresosAnuales, gastosAnuales, esSocietario = false) {
  const rendimientoPrededuccion = ingresosAnuales - gastosAnuales;
  const porcentajeDeduccion = esSocietario ? DEDUCCION_GASTOS.societario : DEDUCCION_GASTOS.personaFisica;
  
  // The deduction applies to: rendimiento + cuotas SS estimated
  // For simplicity in the calculator, we apply 7% (or 3%) to the rendimiento
  const deduccionGastosGenericos = rendimientoPrededuccion * porcentajeDeduccion;
  const rendimientoNeto = rendimientoPrededuccion - deduccionGastosGenericos;
  const rendimientoNetoMensual = +(rendimientoNeto / 12).toFixed(2);

  return {
    ingresosAnuales,
    gastosAnuales,
    rendimientoPrededuccion,
    porcentajeDeduccion: porcentajeDeduccion * 100,
    deduccionGastosGenericos: +deduccionGastosGenericos.toFixed(2),
    rendimientoNetoAnual: +rendimientoNeto.toFixed(2),
    rendimientoNetoMensual,
  };
}
