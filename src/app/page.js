import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "CuotaClara — Calculadora de Cuota de Autónomos 2026",
  description:
    "Calcula tu cuota de autónomos en España para 2026. Gratis, actualizada con los 15 tramos oficiales de la Seguridad Social. Sin registro.",
  keywords:
    "cuota autónomos 2026, calculadora autónomos, tramos cotización, seguridad social, RETA, cuota mínima autónomos",
  openGraph: {
    title: "CuotaClara — Calculadora de Cuota de Autónomos 2026",
    description:
      "Calcula tu cuota de autónomos en 2 clics. 15 tramos, datos oficiales, gratis.",
    type: "website",
    locale: "es_ES",
  },
};

export default function Home() {
  return (
    <>
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="container nav__inner">
          <a href="/" className="nav__logo">
            <div className="nav__logo-icon">CC</div>
            CuotaClara
          </a>
          <ul className="nav__links">
            <li>
              <a href="#calculadora">Calculadora</a>
            </li>
            <li>
              <a href="#como-funciona">Cómo funciona</a>
            </li>
            <li>
              <a href="#precios">Precios</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Actualizado con datos oficiales 2026
          </div>
          <h1 className="hero__title">
            Descubre tu cuota de autónomo
            <br />
            <span className="hero__title-accent">en 2 clics</span>
          </h1>
          <p className="hero__subtitle">
            Calculadora gratuita con los 15 tramos oficiales de la Seguridad Social.
            Sin registro, sin letra pequeña. Incluye el nuevo MEI 2026.
          </p>
          <div className="hero__cta-group">
            <a href="#calculadora" className="btn btn--primary btn--large">
              Calcular mi cuota →
            </a>
            <a href="#como-funciona" className="btn btn--secondary btn--large">
              Cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container">
          <p className="trust-strip__text">
            Datos basados en fuentes oficiales
          </p>
          <div className="trust-strip__items">
            <div className="trust-strip__item">
              📋 Orden PCJ/178/2025
            </div>
            <div className="trust-strip__item">
              🏛️ Seguridad Social
            </div>
            <div className="trust-strip__item">
              📖 RDL 16/2025
            </div>
            <div className="trust-strip__item">
              🔄 Actualizado Feb 2026
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="calculator-section">
        <div className="container">
          <div className="calculator-section__header">
            <h2 className="calculator-section__title">
              Calculadora de cuota de autónomos 2026
            </h2>
            <p className="calculator-section__subtitle">
              Introduce tus ingresos y gastos anuales previstos. El cálculo es instantáneo.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="como-funciona">
        <div className="container">
          <div className="features__header">
            <h2 className="features__title">¿Cómo funciona el sistema de cuotas?</h2>
            <p className="features__subtitle">
              Desde 2023, los autónomos en España cotizan según sus ingresos reales
            </p>
          </div>
          <div className="features__grid">
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--amber">📊</div>
              <h3 className="feature-card__title">15 tramos por ingresos</h3>
              <p className="feature-card__text">
                Tu cuota depende de tus rendimientos netos reales. Desde 200€/mes si ganas
                menos de 670€, hasta 590€/mes para ingresos superiores a 6.000€ mensuales.
                Cuanto más ganas, más cotizas.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--green">🔄</div>
              <h3 className="feature-card__title">6 cambios al año</h3>
              <p className="feature-card__text">
                Puedes ajustar tu base de cotización hasta 6 veces al año con efectos
                bimestrales. Si tus ingresos bajan o suben, adapta tu cuota sin esperar al
                año siguiente.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card__icon feature-card__icon--navy">⚖️</div>
              <h3 className="feature-card__title">Regularización anual</h3>
              <p className="feature-card__text">
                Al final del año, la Seguridad Social cruza datos con Hacienda. Si cotizaste
                de más, te devuelven. Si cotizaste de menos, pagas la diferencia. Acertar tu
                tramo es clave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="precios">
        <div className="container">
          <div className="pricing__header">
            <h2 className="pricing__title">Simple y transparente</h2>
            <p className="pricing__subtitle">
              La calculadora es gratis para siempre. Pro añade herramientas extra.
            </p>
          </div>
          <div className="pricing__grid">
            {/* Free */}
            <div className="pricing-card">
              <div className="pricing-card__name">Gratis</div>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">0€</span>
                <span className="pricing-card__period">/siempre</span>
              </div>
              <ul className="pricing-card__features">
                <li>Calculadora completa 15 tramos</li>
                <li>Datos oficiales actualizados</li>
                <li>Comparativa 2025 vs 2026</li>
                <li>Sin registro ni cuenta</li>
              </ul>
              <a href="#calculadora" className="btn btn--secondary pricing-card__btn">
                Usar calculadora
              </a>
            </div>

            {/* Pro */}
            <div className="pricing-card pricing-card--pro">
              <span className="pricing-card__popular">Próximamente</span>
              <div className="pricing-card__name">Pro</div>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">1,99€</span>
                <span className="pricing-card__period">/mes</span>
              </div>
              <ul className="pricing-card__features">
                <li>Todo lo gratuito incluido</li>
                <li>Recordatorios trimestrales por email</li>
                <li>Registro de gastos simplificado</li>
                <li>Exportar cálculos en PDF</li>
                <li>Calculadora fiscal de criptomonedas</li>
                <li>Soporte prioritario</li>
              </ul>
              <button className="btn btn--primary pricing-card__btn" disabled style={{ opacity: 0.6 }}>
                Disponible pronto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-section__title">
            Deja de adivinar cuánto pagas de cuota
          </h2>
          <p className="cta-section__text">
            3,4 millones de autónomos en España necesitan saber su tramo. Calcula el tuyo ahora.
          </p>
          <a href="#calculadora" className="btn btn--primary btn--large">
            Calcular mi cuota gratis →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__logo">CuotaClara</div>
          <p className="footer__text">
            © {new Date().getFullYear()} CuotaClara. Herramienta orientativa, no sustituye
            asesoramiento profesional.
          </p>
          <div className="footer__links">
            <a href="/aviso-legal">Aviso legal</a>
            <a href="/privacidad">Privacidad</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
}
