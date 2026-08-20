import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import './Contact.css';

const categoryOptions = [
  'Apparel & Accessories',
  'Drinkware Collection',
  'Tech & Gadgets',
  'Curated Solutions',
  'Eco-Friendly Products',
  'Not sure yet',
];

const contactDetails = [
  { label: 'Email',  value: 'info@ansartcreations.com' },
  { label: 'Phone',  value: '+91 93183 30081' },
  { label: 'Studio', value: 'New Delhi, India' },
];

function Contact() {
  const sectionRef = useReveal({ mode: 'lines' });
  const infoRef = useReveal();
  const formRef = useReveal();

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', category: categoryOptions[0], message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', company: '', email: '', phone: '', category: categoryOptions[0], message: '' });
    }, 2600);
  };

  return (
    <section id="quote" className="section-pad quote" ref={sectionRef}>
      <div className="wrap">
        <div className="quote-grid">
          {/* Contact info */}
          <div className="quote-info reveal" ref={infoRef}>
            <div className="eyebrow">Get In Touch</div>
            <h2>Let's put your brand<br />on something people<br />actually keep.</h2>
            <p>
              Share a few details about what you need and our team will get back to you
              with pricing, samples, and timelines.
            </p>
            <div className="contact-rows">
              {contactDetails.map((d) => (
                <div key={d.label} className="contact-row">
                  <span className="lbl">{d.label}</span>
                  <span className="val">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote form */}
          <form className="qform reveal reveal-d1" onSubmit={handleSubmit} ref={formRef}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" placeholder="Company name" required value={form.company} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="category">Category of interest</label>
              <select id="category" name="category" value={form.category} onChange={handleChange}>
                {categoryOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Tell us about your requirement</label>
              <textarea id="message" name="message" placeholder="Quantity, timeline, branding needs..." value={form.message} onChange={handleChange} />
            </div>
            <button
              type="submit"
              className="btn primary"
              style={submitted ? { background: '#1C1A17', borderColor: '#1C1A17' } : {}}
            >
              {submitted ? 'Request Sent ✓' : 'Request a Quote'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
