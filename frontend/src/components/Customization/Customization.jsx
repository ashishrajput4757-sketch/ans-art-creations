import { useState } from 'react';
import customizationItems from '../../data/customization';
import useReveal from '../../hooks/useReveal';
import './Customization.css';

function Customization() {
  const [activeId, setActiveId] = useState('1');
  const [isTouchDevice] = useState(() => window.matchMedia('(hover: none)').matches);
  const sectionRef = useReveal({ mode: 'lines' });
  const gridRef = useReveal();

  return (
    <section id="customization" className="impact" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head" style={{ alignItems: 'flex-start' }}>
          <div>
            <div className="eyebrow on-dark">Customization &amp; Branding</div>
            <h2>Your mark, made permanent.</h2>
          </div>
        </div>

        <div className="impact-grid reveal reveal-d1" ref={gridRef}>
          {/* Swappable image panel */}
          <div className="impact-media">
            {customizationItems.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt={item.alt}
                className={activeId === item.id ? 'active' : ''}
              />
            ))}
          </div>

          {/* Interactive service list */}
          <div className="impact-list">
            {customizationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`impact-item${activeId === item.id ? ' active' : ''}`}
                onMouseEnter={() => { if (!isTouchDevice) setActiveId(item.id); }}
                onClick={() => setActiveId(item.id)}
              >
                <div className="n">{item.num}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customization;
