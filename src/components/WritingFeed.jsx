export default function WritingFeed({ writingFeed }) {
  const hasPosts = writingFeed.posts && writingFeed.posts.length > 0;

  return (
    <section id="writing" className="section section-muted writing-feed">
      <div className="container">
        <h2>Writing</h2>

        {!hasPosts && (
          <p className="writing-feed__empty">{writingFeed.emptyStateMessage}</p>
        )}

        {hasPosts && (
          <ul className="writing-feed__list">
            {writingFeed.posts.map((post) => (
              <li key={post.url} className="writing-feed__item">
                <a href={post.url} target="_blank" rel="noreferrer">
                  <span className="writing-feed__title">{post.title}</span>
                  <span className="writing-feed__external" aria-hidden="true">↗</span>
                </a>
                <p className="writing-feed__date">{post.date}</p>
                <p className="writing-feed__excerpt">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <style>{`
        .writing-feed__empty {
          color: var(--color-text-muted);
        }
        .writing-feed__list {
          list-style: none;
          padding: 0;
          display: grid;
          gap: var(--space-md);
        }
        .writing-feed__item {
          border-bottom: 1px solid var(--color-secondary);
          padding-bottom: var(--space-sm);
        }
        .writing-feed__title {
          font-weight: 600;
          color: var(--color-anchor);
        }
        [data-theme='dark'] .writing-feed__title {
          color: var(--color-text-primary);
        }
        .writing-feed__external {
          color: var(--color-accent);
          margin-left: 0.35rem;
        }
        .writing-feed__date {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          margin: 0.25rem 0;
        }
      `}</style>
    </section>
  );
}