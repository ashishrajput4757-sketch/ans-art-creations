import useReveal from '../../hooks/useReveal';
import './About.css';

const stats = [
  { num: '250+', label: 'Corporate clients served' },
  { num: '5',    label: 'Product categories' },
  { num: '100%', label: 'Custom branded orders' },
];

function About() {
  const sectionRef = useReveal({ mode: 'lines' });
  const gridRef = useReveal();

  return (
    <section id="about" className="section-pad" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head ">
          <div>
            <div className="eyebrow">About Us</div>
            <div className="section-title">Ans Art Creations</div>
          </div>
        </div>

        <div className="about-grid reveal reveal-d1" ref={gridRef}>
          <div className="about-media">
            <img
              src="/assets/images/about-studio.png"
              alt="Studio flat lay of branded corporate merchandise"
            />
          </div>
          <div className="about-body">
            <p>
              AACREATIONS — Ans Art Creations — is an established provider of corporate
              merchandise and gifting solutions based in New Delhi, India, serving
              organizations for promotions, events, and employee engagement.
            </p>
            <p>
              From apparel and drinkware to tech gadgets and fully curated gift kits,
              every product is sourced, customized, and finished to a standard that
              reflects on your brand — because a gift with your logo on it is still a
              first impression.
            </p>
            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
