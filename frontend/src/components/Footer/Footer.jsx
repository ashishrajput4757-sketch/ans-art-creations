import './Footer.css';

const exploreLinks = [
  { href: '#categories',    label: 'Categories' },
  { href: '#eco',           label: 'Eco-Friendly' },
  { href: '#customization', label: 'Customization' },
  { href: '#collections',   label: 'Collections' },
];

const companyLinks = [
  { href: '#gallery', label: 'Our Work' },
  { href: '#about',   label: 'About' },
  { href: '#quote',   label: 'Contact' },
];

const contactLinks = [
  { href: 'mailto:hello@aacreations.in', label: 'hello@aacreations.in' },
  { href: 'tel:+9198000000',             label: '+91 98XXX XXXXX' },
  { href: '#',                            label: 'New Delhi, India' },
];

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-brand">
            <div className="logo">
              AACREATIONS
              <span className="dots">
                <span />
                <span />
                <span />
              </span>
            </div>
            <p>
              Corporate merchandise and gifting solutions, crafted for brands that care
              how they show up.
            </p>
          </div>

          {/* Explore */}
          <div className="foot-col">
            <h4>Explore</h4>
            {exploreLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>

          {/* Company */}
          <div className="foot-col">
            <h4>Company</h4>
            {companyLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>

          {/* Contact */}
          <div className="foot-col">
            <h4>Contact</h4>
            {contactLinks.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Ans Art Creations. All rights reserved.</span>
          <div className="foot-socials">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
