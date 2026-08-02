import { clients, testimonials } from '../../data/testimonials';
import useReveal from '../../hooks/useReveal';
import './Testimonials.css';

function Testimonials() {
  const sectionRef = useReveal({ mode: 'lines' });
  const stripRef = useReveal();
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section-pad testimonials-section" style={{ paddingTop: '60px' }} ref={sectionRef}>
      <div className="wrap">
        {/* Client logo strip */}
        <div className="clients-strip reveal" ref={stripRef}>
          {clients.map((name) => (
            <span key={name} className="client-name">{name}</span>
          ))}
        </div>

        <div className="section-head reveal" ref={headRef}>
          <div>
            <div className="eyebrow">Testimonials</div>
            <div className="section-title">What clients say about working with us.</div>
          </div>
        </div>

        <div className="testi-grid reveal reveal-d1" ref={gridRef}>
          {testimonials.map((t) => (
            <div key={t.id} className="testi-card">
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-who">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
