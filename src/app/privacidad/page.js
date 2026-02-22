export const metadata = {
  title: "Política de Privacidad — CuotaClara",
  description: "Política de privacidad de CuotaClara conforme al RGPD y la LOPDGDD. Información sobre el tratamiento de datos personales.",
  robots: "noindex, follow",
};

export default function Privacidad() {
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
            <h1 className="legal-page__title">Política de Privacidad</h1>
            <p className="legal-page__date">Última actualización: 21 de febrero de 2026</p>
          </div>

          <div className="legal-page__content">

            <section className="legal-section">
              <h2>1. Responsable del tratamiento</h2>
              <p>
                De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la
                Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los
                derechos digitales (LOPDGDD), se informa al usuario de los datos del responsable del tratamiento:
              </p>
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>Responsable</th>
                    <td>Lauritsen</td>
                  </tr>
                  <tr>
                    <th>Domicilio</th>
                    <td>Benalmádena, Málaga, España</td>
                  </tr>
                  <tr>
                    <th>Email de contacto</th>
                    <td>legal@cuotaclara.es</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="legal-section legal-section--highlighted">
              <h2>2. Datos que recogemos actualmente</h2>
              <p>
                <strong>En este momento, CuotaClara no recoge ningún dato personal de sus usuarios.</strong>
              </p>
              <p>
                El Sitio funciona como una calculadora estática. No existe ningún formulario de registro, no se
                solicita nombre ni correo electrónico, y no se almacena ningún dato de uso de forma individualizada.
                Los cálculos que el usuario realiza se procesan íntegramente en su navegador y no se transmiten
                a nuestros servidores ni se almacenan en ninguna base de datos.
              </p>
              <p>
                Los únicos datos que pueden registrarse de forma técnica y automática son los propios del
                funcionamiento de cualquier servidor web (dirección IP, fecha y hora de acceso, URL solicitada),
                gestionados por Vercel Inc. como proveedor de infraestructura, según se explica en el
                apartado 6 de esta política.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Datos que recogeremos en el futuro</h2>
              <p>
                Cuando CuotaClara incorpore funcionalidades de cuenta de usuario (previstas para una versión Pro
                de la plataforma), se recogerán los siguientes datos personales:
              </p>
              <ul>
                <li><strong>Dirección de correo electrónico:</strong> para identificación y acceso a la cuenta.</li>
                <li><strong>Cálculos guardados:</strong> datos fiscales introducidos voluntariamente por el usuario
                  (ingresos, gastos, tipo de autónomo) vinculados a su cuenta.</li>
                <li><strong>Preferencias de comunicación:</strong> si el usuario opta por recibir recordatorios
                  trimestrales por email.</li>
              </ul>
              <p>
                <strong>Esta Política de Privacidad será actualizada antes de que se active cualquier recogida de
                datos personales adicional.</strong> Recibirás información clara y solicitaremos tu consentimiento
                donde sea legalmente necesario.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Base jurídica del tratamiento</h2>
              <p>
                Cuando en el futuro se recojan datos personales, las bases jurídicas aplicables según el
                artículo 6 del RGPD serán:
              </p>
              <ul>
                <li>
                  <strong>Consentimiento del interesado (Art. 6.1.a RGPD):</strong> para el envío de comunicaciones
                  comerciales o boletines informativos, y para el uso de cookies no esenciales. El consentimiento
                  podrá retirarse en cualquier momento sin que ello afecte a la licitud del tratamiento previo.
                </li>
                <li>
                  <strong>Ejecución de un contrato (Art. 6.1.b RGPD):</strong> para gestionar la relación contractual
                  con los usuarios suscritos a la versión Pro del servicio.
                </li>
                <li>
                  <strong>Interés legítimo (Art. 6.1.f RGPD):</strong> para el análisis agregado y anónimo del uso
                  del Sitio con fines de mejora del servicio, siempre que no prevalezcan los intereses o derechos
                  fundamentales del usuario.
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Plazos de conservación</h2>
              <p>
                Cuando se recojan datos personales, éstos se conservarán durante el tiempo estrictamente necesario
                para la finalidad para la que fueron recabados. En ningún caso se conservarán más allá de lo
                exigido por la legislación aplicable. Con carácter orientativo:
              </p>
              <ul>
                <li>Datos de cuenta: durante la vigencia de la relación contractual y, una vez finalizada, durante
                  los plazos de prescripción legal aplicables (con carácter general, 5 años para obligaciones
                  civiles y mercantiles).</li>
                <li>Datos de comunicaciones comerciales: hasta la retirada del consentimiento o solicitud de baja.</li>
                <li>Logs técnicos de Vercel: según la política de retención del proveedor (véase apartado 6).</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>6. Proveedor de infraestructura: Vercel</h2>
              <p>
                CuotaClara está alojado en la plataforma de Vercel Inc. (340 Pine Street, Suite 1201, San Francisco,
                CA 94104, Estados Unidos). Vercel actúa como encargado del tratamiento en virtud de las condiciones
                de su servicio, y dispone de las garantías adecuadas para la transferencia internacional de datos
                conforme al Capítulo V del RGPD, incluyendo las Cláusulas Contractuales Tipo aprobadas por la
                Comisión Europea y su adhesión al marco Data Privacy Framework UE-EE.UU.
              </p>
              <p>
                Para más información, consulta el{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Acuerdo de Procesamiento de Datos de Vercel
                </a>.
              </p>
              <p>
                Salvo las excepciones indicadas (Vercel como proveedor de infraestructura), no se realizan
                transferencias internacionales de datos personales a terceros países ni organizaciones internacionales.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Decisiones automatizadas y elaboración de perfiles</h2>
              <p>
                CuotaClara no realiza ningún tipo de elaboración de perfiles ni adopta decisiones automatizadas
                que produzcan efectos jurídicos sobre los usuarios o les afecten de modo significativo, en el
                sentido del artículo 22 del RGPD.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Tus derechos</h2>
              <p>
                De acuerdo con el RGPD y la LOPDGDD, el usuario puede ejercer en cualquier momento los
                siguientes derechos respecto a sus datos personales:
              </p>
              <ul>
                <li><strong>Derecho de acceso (Art. 15 RGPD):</strong> conocer qué datos personales tuyos tratamos.</li>
                <li><strong>Derecho de rectificación (Art. 16 RGPD):</strong> corregir datos inexactos o incompletos.</li>
                <li><strong>Derecho de supresión / "derecho al olvido" (Art. 17 RGPD):</strong> solicitar la
                  eliminación de tus datos cuando ya no sean necesarios o retires el consentimiento.</li>
                <li><strong>Derecho a la portabilidad (Art. 20 RGPD):</strong> recibir tus datos en formato
                  estructurado y de uso común.</li>
                <li><strong>Derecho de oposición (Art. 21 RGPD):</strong> oponerte al tratamiento basado en interés
                  legítimo o con fines de marketing directo.</li>
                <li><strong>Derecho a la limitación del tratamiento (Art. 18 RGPD):</strong> solicitar que se
                  restrinja el uso de tus datos en determinadas circunstancias.</li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, envía un correo electrónico a{" "}
                <strong>legal@cuotaclara.es</strong> con el asunto "Ejercicio de derechos RGPD", indicando tu
                nombre completo y el derecho que deseas ejercer. Responderemos en el plazo máximo de un mes
                (prorrogable otros dos meses en casos complejos).
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Derecho a reclamar ante la AEPD</h2>
              <p>
                Si consideras que el tratamiento de tus datos personales no se ajusta a la normativa vigente,
                tienes derecho a presentar una reclamación ante la{" "}
                <strong>Agencia Española de Protección de Datos (AEPD)</strong>, autoridad de control competente
                en España:
              </p>
              <p>
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>
                {" "}— C/ Jorge Juan, 6, 28001 Madrid.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Actualizaciones de esta política</h2>
              <p>
                Esta Política de Privacidad puede ser modificada para adaptarse a cambios legislativos, judiciales,
                de jurisprudencia o a nuevas funcionalidades del Sitio. La fecha de última actualización aparece
                en el encabezado. Te recomendamos revisarla periódicamente.
              </p>
              <p>
                Cualquier modificación sustancial que afecte a los derechos de los usuarios registrados se
                comunicará con antelación suficiente por los medios de contacto disponibles.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Documentos relacionados</h2>
              <ul>
                <li><a href="/aviso-legal">Aviso Legal</a></li>
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
