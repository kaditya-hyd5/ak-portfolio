export default function Footer({ contact, meta }) {
  return (
    <footer id="contact" className="section footer">
      <div className="container footer__inner">
        <div>
          <h2>Contact</h2>
          <ul className="footer__links">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={contact.credly} target="_blank" rel="noreferrer">
                Certifications (Credly)
              </a>
            </li>
            {contact.phone && (
              <li>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
            )}
            <li>
              <a href={contact.resumeUrl} download>
                Download Resume
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer__cert-heading">Certifications</h3>
          <ul className="footer__certs">
            {contact.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} {meta.shortName}
      </p>

      <style>{`
        .footer {
          background-color: var(--color-anchor);
          color: #FFFFFF;
        }
        .footer h2, .footer h3 {
          color: #FFFFFF;
        }
        .footer__inner {
          display: grid;
          gap: var(--space-lg);
        }
        .footer__links, .footer__certs {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer__links li, .footer__certs li {
          margin-bottom: var(--space-xs);
        }
        .footer__links a {
          color: #FFFFFF;
        }
        .footer__links a:hover {
          color: var(--color-accent);
        }
        .footer__cert-heading {
          font-size: 1rem;
        }
        .footer__certs li {
          color: var(--color-secondary);
          font-size: 0.9rem;
        }
        .footer__copyright {
          margin-top: var(--space-lg);
          font-size: 0.85rem;
          color: var(--color-secondary);
        }
        @media (min-width: 640px) {
          .footer__inner {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
}