import "@/styles/globals.css";

export const metadata = {
  title: "CuotaClara — Calculadora de Cuota de Autónomos 2026",
  description:
    "Calcula tu cuota de autónomos en España para 2026 en 2 clics. Gratis, actualizada con los 15 tramos oficiales de la Seguridad Social. Incluye MEI 0,9%. Sin registro.",
  keywords:
    "cuota autónomos 2026, calculadora autónomos, tramos cotización autónomos, seguridad social autónomos, RETA 2026, cuota mínima autónomos, cuánto paga un autónomo, MEI 2026, base cotización autónomos, calculadora cuota autónomo gratis",
  metadataBase: new URL("https://www.cuotaclara.es"),
  alternates: {
    canonical: "https://www.cuotaclara.es",
  },
  openGraph: {
    title: "CuotaClara — Calculadora de Cuota de Autónomos 2026",
    description:
      "Calcula tu cuota de autónomos en 2 clics. 15 tramos oficiales, datos de la Seguridad Social, gratis y sin registro.",
    type: "website",
    locale: "es_ES",
    url: "https://www.cuotaclara.es",
    siteName: "CuotaClara",
  },
  twitter: {
    card: "summary_large_image",
    title: "CuotaClara — Calculadora de Cuota de Autónomos 2026",
    description:
      "Calcula tu cuota de autónomos en 2 clics. 15 tramos oficiales, gratis.",
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
  name: "CuotaClara",
  url: "https://www.cuotaclara.es",
  description:
    "Calculadora gratuita de cuota de autónomos en España para 2026. Basada en los 15 tramos oficiales de la Seguridad Social.",
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
      name: "¿Qué es el MEI y cómo me afecta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Mecanismo de Equidad Intergeneracional (MEI) es un recargo destinado a financiar las pensiones de la generación del Baby Boom. En 2026 es del 0,9% (subió un 0,1% respecto a 2025). Se aplica sobre tu base de cotización y lo asumes íntegramente tú como autónomo. Supone entre 6€ y 24€ más al año según tu tramo.",
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
