export const metadata = {
  title: "Aviso Legal — CuotaClara",
  description: "Aviso legal e información sobre el titular del sitio web CuotaClara, calculadora de cuota de autónomos.",
  robots: "noindex, follow",
};

export default function AvisoLegal() {
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
            <h1 className="legal-page__title">Aviso Legal</h1>
            <p className="legal-page__date">Última actualización: 21 de febrero de 2026</p>
          </div>

          <div className="legal-page__content">

            <section className="legal-section">
              <h2>1. Datos identificativos del titular</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
                Información y del Comercio Electrónico (LSSI-CE), se informa al usuario de los datos identificativos
                del titular del sitio web:
              </p>
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>Titular</th>
                    <td>Lauritsen</td>
                  </tr>
                  <tr>
                    <th>Domicilio</th>
                    <td>Benalmádena, Málaga, España</td>
                  </tr>
                  <tr>
                    <th>Correo electrónico</th>
                    <td>legal@cuotaclara.es</td>
                  </tr>
                  <tr>
                    <th>Teléfono</th>
                    <td>Disponible bajo solicitud por correo electrónico</td>
                  </tr>
                  <tr>
                    <th>Sitio web</th>
                    <td>https://www.cuotaclara.es</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="legal-section">
              <h2>2. Objeto y finalidad del sitio web</h2>
              <p>
                CuotaClara (en adelante, "el Sitio") es una herramienta online de carácter informativo y orientativo
                cuya finalidad es facilitar a los trabajadores autónomos en España el cálculo estimado de su cuota
                mensual a la Seguridad Social (RETA) en función de sus rendimientos netos previstos, conforme al
                sistema de cotización por ingresos reales establecido por la Ley 21/2021 y desarrollado mediante la
                Orden PCJ/178/2025 para el ejercicio 2026.
              </p>
              <p>
                El acceso y uso del Sitio es gratuito y no requiere registro. El Sitio no presta servicios de
                asesoramiento fiscal, jurídico ni contable.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Propiedad intelectual e industrial</h2>
              <p>
                El diseño, código fuente, textos, gráficos, logotipos, iconos, imágenes y demás elementos del Sitio
                son propiedad del titular o han sido licenciados para su uso, y están protegidos por la legislación
                española e internacional en materia de propiedad intelectual e industrial.
              </p>
              <p>
                Queda expresamente prohibida la reproducción total o parcial del Sitio, su distribución, comunicación
                pública, transformación o cualquier otro acto no autorizado expresamente por el titular, con fines
                comerciales o sin ellos.
              </p>
              <p>
                Los datos oficiales utilizados para los cálculos (tramos, bases de cotización, tipos aplicables)
                son de dominio público y están publicados por la Seguridad Social y la Agencia Tributaria. Su uso
                en el Sitio es meramente referencial.
              </p>
            </section>

            <section className="legal-section legal-section--highlighted">
              <h2>4. Limitación de responsabilidad — Carácter orientativo de los cálculos</h2>
              <p>
                <strong>Los resultados proporcionados por la calculadora de CuotaClara son estimaciones orientativas
                y no constituyen asesoramiento fiscal, laboral ni jurídico de ningún tipo.</strong>
              </p>
              <p>
                Los cálculos se basan en los datos oficiales publicados por la Seguridad Social para 2026, pero
                pueden no reflejar la situación particular de cada autónomo, especialmente en casos de:
              </p>
              <ul>
                <li>Autónomos con actividades económicas especiales o regímenes especiales de cotización</li>
                <li>Situaciones de pluriactividad o cotización simultánea por cuenta ajena</li>
                <li>Bonificaciones, reducciones o situaciones de incapacidad temporal</li>
                <li>Variaciones legislativas posteriores a la última actualización del Sitio</li>
                <li>Deducciones o circunstancias personales específicas</li>
              </ul>
              <p>
                <strong>El titular del Sitio no asume ninguna responsabilidad</strong> por las decisiones económicas,
                fiscales o administrativas que el usuario tome basándose en los resultados de la calculadora. Se
                recomienda expresamente consultar con un <strong>gestor administrativo, asesor fiscal o profesional
                competente</strong> para conocer las obligaciones reales y exactas de cada caso.
              </p>
              <p>
                El titular tampoco se responsabiliza de la disponibilidad técnica del Sitio, errores de
                transmisión, interrupciones del servicio ni de daños causados por virus o elementos tecnológicos
                nocivos, pese a adoptar medidas razonables de seguridad.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Política de enlaces</h2>
              <p>
                El Sitio puede contener enlaces a páginas web de terceros (como la Seguridad Social o la Agencia
                Tributaria) con fines meramente informativos. El titular no controla ni es responsable del contenido
                de dichos sitios externos, ni garantiza su disponibilidad o exactitud.
              </p>
              <p>
                Está permitido establecer enlaces hacia la página principal del Sitio, siempre que no impliquen
                reproducción de sus contenidos, no se realice framing, no se sugiera ningún tipo de asociación
                o respaldo del titular hacia el sitio enlazante, y no se cause daño reputacional.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Ley aplicable y jurisdicción</h2>
              <p>
                El presente Aviso Legal se rige en su totalidad por la legislación española. Para la resolución de
                cualquier controversia derivada del acceso o uso del Sitio, el titular y el usuario se someten, con
                renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales
                de <strong>Málaga</strong>.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Documentos relacionados</h2>
              <p>
                Para más información sobre el tratamiento de datos personales y el uso de cookies, consulta:
              </p>
              <ul>
                <li><a href="/privacidad">Política de Privacidad</a></li>
                <li><a href="/cookies">Política de Cookies</a></li>
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
