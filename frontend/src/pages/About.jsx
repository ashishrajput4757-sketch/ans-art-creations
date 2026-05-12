import "../styles/about.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-overlay"></div>

        <div className="about-hero-content">
          <h1>
            ANS ART CREATIONS
          </h1>

          <h2>
            PREMIUM CORPORATE MERCHANDISE
            <br />
            & GIFTING SOLUTIONS
          </h2>
        </div>

        </section>

      {/* ABOUT COMPANY */}
      <section className="about-company">

        <div className="about-left">

          <div className="yellow-box"></div>

          <img
            src="/about/about1.jpg"
            alt=""
            className="about-img"
          />

        </div>

        <div className="about-right">

          <h3>
            ABOUT COMPANY
          </h3>

          <h2>
            Your One-Stop Corporate
            Merchandise & Gifting Solution
          </h2>

          <p>
            We are pleased to introduce our one-stop
            Corporate Merchandise & Gifting Solution,
            designed to help organizations seamlessly
            manage branded merchandise and gifting
            programs for employees, clients, events,
            and partners.
          </p>

          <p>
            Our service combines creativity, logistics,
            and technology to deliver impactful gifting
            experiences that strengthen relationships,
            enhance brand visibility, and create lasting
            impressions.
          </p>

          <p>
            From personalized onboarding kits and client
            appreciation gifts to event giveaways and
            partner recognition, we ensure every detail
            reflects your brand’s identity and values.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="services-section">

        <div className="service-card purple">
          <h2>Employee Welcome Kits</h2>
        </div>

        <div className="service-card blue">
          <h2>Corporate Branding Solutions</h2>
        </div>

        <div className="service-card orange">
          <h2>Event & Conference Giveaways</h2>
        </div>

        <div className="service-card pink">
          <h2>Client Appreciation Gifts</h2>
        </div>

      </section>

      {/* WHY US */}
      <section className="why-us">

        <div className="why-left">
          <h1>
            WHY
            <br />
            BRANDS
            <br />
            TRUST US
          </h1>
        </div>

         <div className="why-right">

          <div className="why-item">
            <span>01</span>
            <p>Premium Quality Products</p>
          </div>

          <div className="why-item">
            <span>02</span>
            <p>Customized Branding Solutions</p>
          </div>

          <div className="why-item">
            <span>03</span>
            <p>Creative Packaging & Presentation</p>
          </div>

          <div className="why-item">
            <span>04</span>
            <p>Pan India Delivery Support</p>
          </div>

          <div className="why-item">
            <span>05</span>
            <p>Reliable Corporate Assistance</p>
            </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <h1>
          LET’S CREATE MEMORABLE
          <br />
          GIFTING EXPERIENCES
        </h1>

        <p>
          Looking forward to the possibility of
          collaborating with you.
        </p>

        <button>
          Contact Us
        </button>

      </section>

      </div>
  );
}

export default About;
