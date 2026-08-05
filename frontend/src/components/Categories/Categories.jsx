import { useState, useEffect, useRef } from 'react';
import categories from '../../data/categories';
import useReveal from '../../hooks/useReveal';
import './Categories.css';
import "../../styles/responsive.css";

function Categories({ onOpenModal }) {
  const [activeId, setActiveId] = useState('1');
  const [isTouchDevice] = useState(() => window.matchMedia('(hover: none)').matches);
  const sectionRef = useReveal({ mode: 'lines' });
  const headRef = useReveal();
  const gridRef = useReveal();

  const handleCardClick = (cat) => {
    if (isTouchDevice && activeId !== cat.id) {
      setActiveId(cat.id);
    } else {
      onOpenModal({ title: cat.modalTitle, desc: cat.modalDesc, img: cat.img });
    }
  };

  const handleCardHover = (cat) => {
    if (!isTouchDevice) setActiveId(cat.id);
  };

  return (
    <section id="categories" className="section-pad" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div>
            <div className="eyebrow">Product Categories</div>
            <div className="section-title">Five collections, one standard of craft.</div>
          </div>
          <div className="section-desc" style={{ margin: 0 }}>
            Tap or hover a category to explore what's inside.
          </div>
        </div>

        <div className={`cat-grid reveal reveal-d1 active-${activeId}`} ref={gridRef}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`cat-card${activeId === cat.id ? ' active' : ''}`}
              onMouseEnter={() => handleCardHover(cat)}
              onClick={() => handleCardClick(cat)}
            >
              <img src={cat.img} alt={cat.alt} />
              <div className="cat-num">{cat.num}</div>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-desc">{cat.desc}</div>
              <span className="cat-view">View products →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
