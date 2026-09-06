export default function About({ about }) {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <img
          className="about__photo"
          src={about.photo.src}
          alt={about.photo.alt}
          width="160"
          height="160"
        />
        <div className="about__text">
          <h2>About</h2>
          {about.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <style>{`
        .about__inner {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        .about__photo {
          border-radius: 50%;
          object-fit: cover;
          width: 120px;
          height: 120px;
          border: 3px solid var(--color-surface);
          box-shadow: var(--shadow-card);
        }
        .about__text {
          max-width: 720px;
        }
        @media (min-width: 640px) {
          .about__inner {
            flex-direction: row;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}