import { useEffect, useRef } from 'react';
import './Hero.css';

const tags = ['Apparel & Accessories', 'Drinkware', 'Tech & Gadgets', 'Eco-Friendly', 'Curated Kits'];

function Hero() {
  const sectionRef = useRef(null);

  // Hero is above the fold — animate in on mount rather than on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const revealEls = el.querySelectorAll('.reveal');
    // Small delay so CSS transition is visible on page load
    requestAnimationFrame(() => {
      setTimeout(() => revealEls.forEach((r) => r.classList.add('in')), 80);
    });
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="wrap">
        <div className="hero-grid">
          <div className="reveal">
            <div className="eyebrow">AACREATIONS</div>
            <h1>
              Gifts that carry<br />
              your <span className="accent">brand.</span>
            </h1>
            <p className="hero-sub">
              An established provider of corporate merchandise and gifting solutions
              — serving organizations across promotions, events, onboarding, and
              employee engagement.
            </p>
            <div className="hero-ctas">
              <a href="#quote" className="btn primary">Request a Quote</a>
              <a href="#categories" className="btn">Browse Categories</a>
            </div>
            <div className="hero-tags">
              {tags.map((tag) => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="hero-media reveal reveal-d2">
            <div className="frame">
              <img
                src="/assets/images/hero-gift-set.png"
                alt="Branded corporate gift set with steel flask and kraft packaging"
              />
              <div className="float-badge">Premium by design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
