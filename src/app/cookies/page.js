export const metadata = {
  title: "Política de Cookies — CuotaClara",
  description: "Política de cookies de CuotaClara. Información sobre el uso de cookies en nuestra calculadora de cuota de autónomos.",
  robots: "noindex, follow",
};

export default function Cookies() {
  return (
    <>
      <nav className="nav">
        <div className="container nav__inner">
          <a href="/" className="nav__logo">
            <div className="nav__logo-icon">CC</div>
            CuotaClara
          </a>
        </div>
      </nav>

      <main className="legal-page">
        <div className="container legal-page__container">
          <div className="legal-page__header">
            <a href="/" className="legal-page__back">← Volver a la calculadora</a>
            <h1 className="legal-page__title">Política de Cookies</h1>
            <p className="legal-page__date">Última actualización: 21 de febrero de 2026</p>
          </div>

          <div className="legal-page__content">

            <section className="legal-section">
              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo
                (ordenador, tablet, smartphone) cuando los visitas. Sirven para que el sitio recuerde tus
                preferencias, analice cómo lo usas o personalice tu experiencia.
              </p>
              <p>
                El artículo 22.2 de la Ley 34/2002 (LSSI-CE) y el Reglamento (UE) 2016/679 (RGPD) establecen
                que los usuarios deben ser informados sobre el uso de cookies y dar su consentimiento para
                las no estrictamente necesarias.
              </p>
            </section>

            <section className="legal-section legal-section--highlighted">
              <h2>2. Cookies que utiliza CuotaClara</h2>
              <p>
                <strong>En este momento, CuotaClara no instala ninguna cookie propia de análisis, publicidad
                ni personalización.</strong>
              </p>
              <p>
                La calculadora funciona completamente en tu navegador. No tenemos sistema de analítica activo,
                no usamos redes publicitarias y no hay cuentas de usuario que requieran cookies de sesión.
              </p>
              <p>
                Es posible que Vercel, nuestro proveedor de infraestructura, establezca cookies o utilice
                mecanismos técnicos similares de forma estrictamente necesaria para el funcionamiento del
                servidor (por ejemplo, para el balanceo de carga o la seguridad de la red). Estas cookies
                son de carácter técnico, no requieren consentimiento conforme al considerando 30 del RGPD, y
                no contienen información personal identificable. Para más detalles, consulta la{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  política de privacidad de Vercel
                </a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Tipos de cookies: clasificación general</h2>
              <p>
                Aunque actualmente no las utilicemos todas, te informamos de las categorías de cookies que
                existen para que entiendas la clasificación:
              </p>

              <h3>Según su finalidad</h3>
              <ul>
                <li>
                  <strong>Cookies técnicas o esenciales:</strong> Necesarias para el funcionamiento básico
                  del sitio (navegación, acceso a áreas seguras). No requieren consentimiento.
                </li>
                <li>
                  <strong>Cookies de análisis o estadística:</strong> Permiten conocer cuántos usuarios visitan
                  el sitio, qué páginas consultan, etc. Requieren consentimiento.
                  <em> CuotaClara no las usa actualmente.</em>
                </li>
                <li>
                  <strong>Cookies de personalización:</strong> Recuerdan preferencias del usuario (idioma,
                  configuración). Pueden requerir consentimiento según su naturaleza.
                  <em> CuotaClara no las usa actualmente.</em>
                </li>
                <li>
                  <strong>Cookies publicitarias o de seguimiento:</strong> Rastrean el comportamiento del
                  usuario para mostrar publicidad personalizada.
                  <em> CuotaClara no usa publicidad ni cookies de tracking de terceros.</em>
                </li>
              </ul>

              <h3>Según su procedencia</h3>
              <ul>
                <li><strong>Cookies propias:</strong> instaladas por el propio sitio web.</li>
                <li><strong>Cookies de terceros:</strong> instaladas por dominios distintos al que visitas
                  (redes sociales, proveedores de analítica, anunciantes).
                  <em> CuotaClara no tiene cookies de terceros en este momento.</em>
                </li>
              </ul>

              <h3>Según su duración</h3>
              <ul>
                <li><strong>Cookies de sesión:</strong> se eliminan al cerrar el navegador.</li>
                <li><strong>Cookies persistentes:</strong> permanecen durante un periodo definido.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Cómo gestionar o deshabilitar las cookies</h2>
              <p>
                Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Ten en
                cuenta que bloquear todas las cookies puede afectar al funcionamiento de algunos sitios web.
                A continuación encontrarás los enlaces a las instrucciones de los navegadores más comunes:
              </p>
              <ul>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                    Safari (Mac)
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/es-es/105082" target="_blank" rel="noopener noreferrer">
                    Safari (iPhone / iPad)
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Banner de cookies</h2>
              <p>
                Dado que actualmente CuotaClara no instala ninguna cookie que requiera consentimiento,
                no es necesario mostrar un banner de gestión de cookies conforme al criterio de la AEPD
                ("Guía sobre el uso de las cookies", junio 2023).
              </p>
              <p>
                Si en el futuro se añaden cookies no esenciales (analítica, autenticación de usuarios, etc.),
                se implementará el mecanismo de consentimiento correspondiente y esta política será
                actualizada previamente.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Cambios en esta política</h2>
              <p>
                Esta Política de Cookies se actualizará cuando se produzcan cambios en las cookies utilizadas
                o en la legislación aplicable. La fecha de última actualización figura en el encabezado de
                esta página. Te recomendamos revisarla periódicamente.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Documentos relacionados</h2>
              <ul>
                <li><a href="/aviso-legal">Aviso Legal</a></li>
                <li><a href="/privacidad">Política de Privacidad</a></li>
              </ul>
            </section>

          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__logo">CuotaClara</div>
          <p className="footer__text">
            © {new Date().getFullYear()} CuotaClara. Herramienta orientativa, no sustituye asesoramiento profesional.
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
