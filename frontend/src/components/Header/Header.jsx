import useMobileMenu from '../../hooks/useMobileMenu';
import MobileMenu from '../MobileMenu';
import './Header.css';

const navLinks = [
  { href: '#categories', label: 'Categories' },
  { href: '#eco', label: 'Eco-Friendly' },
  { href: '#customization', label: 'Customization' },
  { href: '#collections', label: 'Collections' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
];

function Header() {
  const { isOpen, close, toggle } = useMobileMenu();

  return (
    <>
      <header>
        <nav className="wrap">
          <div className="logo">
            AACREATIONS
            <span className="dots">
              <span />
              <span />
              <span />
            </span>
          </div>

          <div className="navlinks">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="navcta">
            <a href="#quote" className="btn primary">Request a Quote</a>
          </div>

          <button
            className={`menu-toggle${isOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggle}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
}

export default Header;
