export default function Hero({ hero }) {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">{hero.subhead}</p>
        <h1 className="hero__headline">{hero.headline}</h1>
        <p className="hero__tagline">{hero.tagline}</p>
        <div className="hero__ctas">
          <a className="btn-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className="btn-secondary" href={hero.secondaryCta.href} download>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <style>{`
        .hero {
          padding: var(--space-xl) 0;
          background-color: var(--color-background);
        }
        .hero__inner {
          max-width: 760px;
        }
        .hero__eyebrow {
          color: var(--color-accent);
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: var(--space-xs);
        }
        .hero__headline {
          font-size: 2.25rem;
          margin-bottom: var(--space-sm);
        }
        .hero__tagline {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          max-width: 640px;
          margin-bottom: var(--space-md);
        }
        .hero__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }
        @media (min-width: 1024px) {
          .hero__headline {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}