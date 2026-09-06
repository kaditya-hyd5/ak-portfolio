import { useTheme } from '../hooks/useTheme';

export default function Nav({ meta, links }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          {meta.shortName}
        </a>

        <nav aria-label="Primary">
          <ul className="nav__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav__theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-secondary);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--space-sm);
          padding-bottom: var(--space-sm);
        }
        .nav__logo {
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--color-anchor);
          font-size: 1.05rem;
        }
        .nav__logo:hover {
          text-decoration: none;
          color: var(--color-accent);
        }
        .nav__links {
          list-style: none;
          display: none;
          gap: var(--space-md);
          margin: 0;
          padding: 0;
        }
        .nav__links a {
          color: var(--color-text-primary);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .nav__links a:hover {
          color: var(--color-accent);
        }
        .nav__theme-toggle {
          background: none;
          border: 1px solid var(--color-secondary);
          border-radius: var(--radius-base);
          width: 2.25rem;
          height: 2.25rem;
          font-size: 1rem;
          line-height: 1;
        }
        @media (min-width: 640px) {
          .nav__links {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}