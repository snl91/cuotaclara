import "@/styles/globals.css";

export const metadata = {
  title:
    "Calculadora Cuota Autónomos 2026 Gratis — Simulador 15 Tramos | CuotaClara",
  description:
    "Calculadora y simulador gratis de cuota de autónomos 2026. Calcula tu cuota en 2 clics con los 15 tramos oficiales de la Seguridad Social. Incluye MEI 0,9%, tarifa plana, autónomo societario. Sin registro.",
  keywords:
    "calculadora cuota autónomos 2026, simulador cuota autónomos, cuota autónomos 2026, calcular cuota autónomo, tramos autónomos 2026, cuánto paga un autónomo 2026, cuánto se paga de autónomo, cuota mínima autónomos 2026, tabla cuotas autónomos 2026, tarifa plana autónomos 2026, MEI autónomos 2026, autónomo societario cuota 2026, base cotización autónomos 2026, RETA 2026, regularización cuotas autónomos, cuota cero autónomos 2026, seguridad social autónomos, tramos cotización autónomos, calculadora autónomos gratis, simulador cuota autónomo 2026",
  metadataBase: new URL("https://www.cuotaclara.es"),
  alternates: {
    canonical: "https://www.cuotaclara.es",
  },
  openGraph: {
    title: "Calculadora Cuota Autónomos 2026 Gratis — CuotaClara",
    description:
      "Simulador gratis de cuota de autónomos 2026. 15 tramos oficiales de la Seguridad Social, MEI 0,9%, tarifa plana y societarios. Sin registro.",
    type: "website",
    locale: "es_ES",
    url: "https://www.cuotaclara.es",
    siteName: "CuotaClara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora Cuota Autónomos 2026 Gratis — CuotaClara",
    description:
      "Simulador gratis de cuota de autónomos 2026. 15 tramos oficiales, sin registro.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

// Structured data for Google rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CuotaClara — Calculadora de Cuota de Autónomos 2026",
  url: "https://www.cuotaclara.es",
  description:
    "Calculadora y simulador gratuito de cuota de autónomos en España para 2026. Basada en los 15 tramos oficiales de la Seguridad Social. Incluye MEI, tarifa plana y autónomo societario.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  inLanguage: "es",
  creator: {
    "@type": "Organization",
    name: "CuotaClara",
    url: "https://www.cuotaclara.es",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo se calcula la cuota de autónomos en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tu cuota se basa en tus rendimientos netos reales: ingresos menos gastos deducibles, menos la deducción por gastos genéricos (7% para persona física, 3% para societarios). El resultado mensual determina tu tramo dentro de los 15 establecidos por la Seguridad Social. En 2026, las cuotas están congeladas respecto a 2025, con el único cambio del MEI que sube al 0,9%.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto paga un autónomo en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En 2026, la cuota mínima va desde 200€/mes (rendimientos netos menores de 670€) hasta 590€/mes (rendimientos superiores a 6.000€). La cuota se calcula aplicando el 31,5% a la base de cotización elegida dentro de tu tramo. El sistema tiene 15 tramos basados en ingresos reales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cambiar de tramo durante el año?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, puedes solicitar hasta 6 cambios de base de cotización al año, con efectos bimestrales. Esto te permite ajustar tu cuota si tus ingresos cambian. Al final del ejercicio, la Seguridad Social regularizará tus cuotas según los rendimientos reales declarados en el IRPF.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si elijo un tramo incorrecto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Seguridad Social cruzará tus datos con Hacienda tras la declaración de la renta. Si cotizaste de más, te devolverán la diferencia. Si cotizaste de menos, deberás pagar la diferencia, pudiendo aplicarse recargos del 10-20% si el desfase es significativo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el MEI y cómo me afecta en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Mecanismo de Equidad Intergeneracional (MEI) es un recargo destinado a financiar las pensiones. En 2026 es del 0,9% (subió un 0,1% respecto a 2025). Se aplica sobre tu base de cotización y lo asumes íntegramente tú como autónomo. Supone entre 6€ y 24€ más al año según tu tramo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Existe la tarifa plana en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Los nuevos autónomos pueden acceder a una cuota reducida de 80€/mes durante los primeros 12 meses. Se puede ampliar a 24 meses si tus rendimientos netos no superan el Salario Mínimo Interprofesional. Además, varias comunidades autónomas ofrecen la Cuota Cero que bonifica incluso esos 80€.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la cuota mínima de autónomos en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cuota mínima absoluta en 2026 es de aproximadamente 205,88€/mes (incluyendo MEI), correspondiente al primer tramo de rendimientos netos inferiores a 670€ mensuales. Para autónomos con la tarifa plana, la cuota es de unos 86-88€/mes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es este cálculo oficial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CuotaClara es una herramienta orientativa que utiliza los datos oficiales publicados por la Seguridad Social (Orden PCJ/178/2025). No es un asesor fiscal ni sustituye el consejo de un gestor.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.cuotaclara.es" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
