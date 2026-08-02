import './QuickViewModal.css';

function QuickViewModal({ data, onClose }) {
  const isOpen = data !== null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`qv-overlay${isOpen ? ' open' : ''}`}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      <div className="qv-panel" role="dialog" aria-modal="true">
        <button className="qv-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="qv-media">
          {data && <img src={data.img} alt={data.title} />}
        </div>
        <div className="qv-body">
          <div className="eyebrow">Category</div>
          <h3>{data?.title}</h3>
          <p>{data?.desc}</p>
          <a href="#quote" className="btn primary" onClick={onClose}>
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuickViewModal;
