import { useState } from 'react';

export default function CaseStudyCard({ caseStudy }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `case-study-panel-${caseStudy.id}`;

  return (
    <article className="card case-study">
      <button
        type="button"
        className="case-study__toggle"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div>
          <h3 className="case-study__title">{caseStudy.title}</h3>
          <p className="case-study__meta">
            {caseStudy.org} · {caseStudy.period}
          </p>
        </div>
        <span className="case-study__chevron" aria-hidden="true">
          {expanded ? '−' : '+'}
        </span>
      </button>

      <div id={panelId} className="case-study__body" hidden={!expanded}>
        <dl>
          <dt>Problem</dt>
          <dd>{caseStudy.problem}</dd>

          <dt>My Role</dt>
          <dd>{caseStudy.role}</dd>

          <dt>Technical Approach</dt>
          <dd>{caseStudy.approach}</dd>

          <dt>Outcome</dt>
          <dd>
            {caseStudy.outcome}
            {caseStudy.outcomeFlag && (
              <span className="case-study__flag"> ({caseStudy.outcomeFlag})</span>
            )}
          </dd>
        </dl>
      </div>

      <style>{`
        .case-study__toggle {
          width: 100%;
          background: none;
          border: none;
          padding: 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          text-align: left;
          color: inherit;
        }
        .case-study__title {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .case-study__meta {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          margin: 0;
        }
        .case-study__chevron {
          font-size: 1.5rem;
          color: var(--color-accent);
          line-height: 1;
          flex-shrink: 0;
          margin-left: var(--space-sm);
        }
        .case-study__body {
          margin-top: var(--space-sm);
          padding-top: var(--space-sm);
          border-top: 1px solid var(--color-secondary);
        }
        .case-study__body dt {
          font-weight: 600;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          margin-top: var(--space-sm);
        }
        .case-study__body dt:first-child {
          margin-top: 0;
        }
        .case-study__body dd {
          margin: 0.25rem 0 0 0;
          color: var(--color-text-primary);
        }
        .case-study__flag {
          color: var(--color-text-muted);
          font-style: italic;
          font-size: 0.9rem;
        }
      `}</style>
    </article>
  );
}