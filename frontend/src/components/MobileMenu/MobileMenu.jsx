import './MobileMenu.css';

const navLinks = [
  { href: '#categories', label: 'Categories' },
  { href: '#eco', label: 'Eco-Friendly' },
  { href: '#customization', label: 'Customization' },
  { href: '#collections', label: 'Collections' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
];

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`mobile-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`mobile-panel${isOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={onClose}>
            {link.label}
          </a>
        ))}
        <a href="#quote" className="btn primary" onClick={onClose}>
          Request a Quote
        </a>
      </nav>
    </>
  );
}

export default MobileMenu;
