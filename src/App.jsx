import content from './content.json';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import AppShowcaseCard from './components/AppShowcaseCard';
import CaseStudyCard from './components/CaseStudyCard';
import WritingFeed from './components/WritingFeed';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav meta={content.meta} links={content.nav.links} />

      <main>
        <Hero hero={content.hero} />
        <About about={content.about} />

        <section id="app-showcase" className="section section-muted">
          <div className="container">
            <h2>App Showcase</h2>
            <div className="grid grid-2-col grid-3-col">
              {content.appShowcase.map((app) => (
                <AppShowcaseCard app={app} key={app.id} />
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <h2>Work Samples</h2>
            <div className="grid">
              {content.caseStudies.map((cs) => (
                <CaseStudyCard caseStudy={cs} key={cs.id} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <h2>Skills &amp; Tech Stack</h2>
            {content.skills.groups.map((group) => (
              <div key={group.label} className="skills-group">
                <h3 className="skills-group__label">{group.label}</h3>
                <div>
                  {group.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            .skills-group { margin-bottom: var(--space-md); }
            .skills-group__label { font-size: 0.95rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.03em; }
          `}</style>
        </section>

        <WritingFeed writingFeed={content.writingFeed} />
      </main>

      <Footer contact={content.contact} meta={content.meta} />
    </>
  );
}