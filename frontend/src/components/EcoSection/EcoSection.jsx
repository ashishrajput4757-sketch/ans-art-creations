import ecoItems from '../../data/eco';
import useReveal from '../../hooks/useReveal';
import './EcoSection.css';

function EcoSection({ onOpenModal }) {
  const sectionRef = useReveal({ mode: 'lines' });
  const gridRef = useReveal();

  return (
    <section id="eco" className="section-pad" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Eco-Friendly Materials</div>
            <div className="section-title">Made from what matters.</div>
          </div>
        </div>
        <p
          className="section-desc"
          style={{ marginTop: '-30px', marginBottom: '44px' }}
        >
          Every eco line is built around responsibly sourced, recycled, and renewable
          materials — for brands that want their gifting to reflect their values.
        </p>

        <div className="eco-grid reveal reveal-d2" ref={gridRef}>
          {ecoItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="eco-card"
              onClick={() =>
                onOpenModal({ title: item.title, desc: item.modalDesc, img: item.img })
              }
            >
              <div className="eco-media">
                <img src={item.img} alt={item.alt} />
                <div className="eco-num">{item.num}</div>
              </div>
              <div className="eco-body">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EcoSection;
