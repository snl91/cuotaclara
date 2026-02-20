import "@/styles/globals.css";

export const metadata = {
  title: "CuotaClara — Calculadora de Cuota de Autónomos 2026",
  description:
    "Calcula tu cuota de autónomos en España para 2026. Gratis, actualizada, con los 15 tramos oficiales.",
  metadataBase: new URL("https://cuotaclara.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
