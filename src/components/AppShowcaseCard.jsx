import SmartAppBanner from './SmartAppBanner';

export default function AppShowcaseCard({ app }) {
  const isComingSoon = app.status === 'coming-soon';

  return (
    <article className="card app-card">
      <div className="app-card__screenshot-wrap">
        <img
          className="app-card__screenshot"
          src={app.screenshot.src}
          alt={app.screenshot.alt}
          loading="lazy"
        />
        {isComingSoon && <span className="app-card__badge">Coming Soon</span>}
      </div>

      <h3 className="app-card__title">{app.title}</h3>
      <p className="app-card__description">{app.description}</p>

      <div className="app-card__tags">
        {app.techStack.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* Install banner slot — inactive until app ships and detection logic is implemented */}
      {!isComingSoon && (
        <SmartAppBanner androidPackageId={app.androidPackageId} iosAppId={app.iosAppId} />
      )}

      {app.githubUrl && (
        <a href={app.githubUrl} className="app-card__github" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      )}

      <style>{`
        .app-card {
          display: flex;
          flex-direction: column;
        }
        .app-card__screenshot-wrap {
          position: relative;
          margin-bottom: var(--space-sm);
        }
        .app-card__screenshot {
          width: 100%;
          height: auto;
          border-radius: var(--radius-base);
          background-color: var(--color-background);
          aspect-ratio: 16 / 10;
          object-fit: cover;
        }
        .app-card__badge {
          position: absolute;
          top: var(--space-xs);
          right: var(--space-xs);
          background-color: var(--color-accent);
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-base);
        }
        .app-card__title {
          font-size: 1.1rem;
          margin-bottom: var(--space-xs);
        }
        .app-card__description {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        .app-card__tags {
          margin-top: auto;
          padding-top: var(--space-xs);
        }
        .app-card__github {
          margin-top: var(--space-xs);
          font-weight: 600;
          font-size: 0.9rem;
        }
      `}</style>
    </article>
  );
}