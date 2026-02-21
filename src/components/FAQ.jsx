"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cómo se calcula la cuota de autónomos en 2026?",
    a: "Tu cuota se basa en tus rendimientos netos reales: ingresos menos gastos deducibles, menos la deducción por gastos genéricos (7% para persona física, 3% para societarios). El resultado mensual determina tu tramo dentro de los 15 establecidos por la Seguridad Social. En 2026, las cuotas están congeladas respecto a 2025, con el único cambio del MEI que sube al 0,9%.",
  },
  {
    q: "¿Cuánto paga un autónomo en 2026?",
    a: "En 2026, la cuota mínima va desde 200€/mes (rendimientos netos menores de 670€) hasta 590€/mes (rendimientos superiores a 6.000€). La cuota se calcula aplicando el 31,5% a la base de cotización elegida dentro de tu tramo. El sistema tiene 15 tramos basados en ingresos reales.",
  },
  {
    q: "¿Cuál es la cuota mínima de autónomos en 2026?",
    a: "La cuota mínima absoluta en 2026 es de aproximadamente 205,88€/mes (incluyendo MEI), correspondiente al primer tramo de rendimientos netos inferiores a 670€ mensuales. Para autónomos con la tarifa plana, la cuota es de unos 86-88€/mes.",
  },
  {
    q: "¿Puedo cambiar de tramo durante el año?",
    a: "Sí, puedes solicitar hasta 6 cambios de base de cotización al año, con efectos bimestrales. Esto te permite ajustar tu cuota si tus ingresos cambian. Al final del ejercicio, la Seguridad Social regularizará tus cuotas según los rendimientos reales declarados en el IRPF.",
  },
  {
    q: "¿Qué pasa si elijo un tramo incorrecto?",
    a: "La Seguridad Social cruzará tus datos con Hacienda tras la declaración de la renta. Si cotizaste de más, te devolverán la diferencia. Si cotizaste de menos, deberás pagar la diferencia, pudiendo aplicarse recargos del 10-20% si el desfase es significativo.",
  },
  {
    q: "¿Qué es el MEI y cómo me afecta?",
    a: "El Mecanismo de Equidad Intergeneracional (MEI) es un recargo destinado a financiar las pensiones de la generación del Baby Boom. En 2026 es del 0,9% (subió un 0,1% respecto a 2025). Se aplica sobre tu base de cotización y lo asumes íntegramente tú como autónomo. Supone entre 6€ y 24€ más al año según tu tramo.",
  },
  {
    q: "¿Existe la tarifa plana en 2026?",
    a: "Sí. Los nuevos autónomos pueden acceder a una cuota reducida de 80€/mes durante los primeros 12 meses. Se puede ampliar a 24 meses si tus rendimientos netos no superan el Salario Mínimo Interprofesional. Además, varias comunidades autónomas ofrecen la 'Cuota Cero' que bonifica incluso esos 80€.",
  },
  {
    q: "¿Es este cálculo oficial?",
    a: "CuotaClara es una herramienta orientativa que utiliza los datos oficiales publicados por la Seguridad Social (Orden PCJ/178/2025). No es un asesor fiscal ni sustituye el consejo de un gestor. Los cálculos pueden diferir de tu cuota real si hay circunstancias especiales como pluriactividad, discapacidad o bonificaciones autonómicas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__header">
          <h2 className="faq__title">Preguntas frecuentes</h2>
        </div>
        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq__item ${openIndex === i ? "open" : ""}`}>
              <button
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <svg
                  className="faq__arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="faq__answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
