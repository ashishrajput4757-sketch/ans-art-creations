import collections from '../../data/collections';
import useReveal from '../../hooks/useReveal';
import './SignatureCollections.css';
import "../../styles/responsive.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
    <path d="M7 17L17 7M17 7H8M17 7V16" />
  </svg>
);

function SignatureCollections() {
  const sectionRef = useReveal({ mode: 'lines' });
  const gridRef = useReveal();

  return (
    <section id="collections" className="signature" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Signature Collections</div>
            <div className="section-title">
              For brands that want more than a logo slapped on a mug.
            </div>
          </div>
        </div>

        <div className="sig-grid reveal reveal-d1" ref={gridRef}>
          {collections.map((col) => (
            <div key={col.id} className={`sig-card${col.tall ? ' tall' : ''}`}>
              <div>
                <div className="sig-tag">{col.tag}</div>
                <h3>{col.title}</h3>
                <p>{col.desc}</p>
              </div>
              <div className="sig-arrow">
                <ArrowIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignatureCollections;
