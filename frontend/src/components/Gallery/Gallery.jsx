import galleryItems from '../../data/gallery';
import useReveal from '../../hooks/useReveal';
import './Gallery.css';

function Gallery({ onOpenModal }) {
  const sectionRef = useReveal({ mode: 'lines' });
  const gridRef = useReveal();

  return (
    <section id="gallery" className="section-pad" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Our Work</div>
            <div className="section-title">A look at recent deliveries.</div>
          </div>
        </div>

        <div className="gallery-grid reveal reveal-d1" ref={gridRef}>
          {galleryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-item ${item.gridClass}`}
              onClick={() =>
                onOpenModal({ title: item.title, desc: item.desc, img: item.img })
              }
            >
              <img src={item.img} alt={item.alt} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
