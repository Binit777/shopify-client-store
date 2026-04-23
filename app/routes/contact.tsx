import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';

export const meta: MetaFunction = () => [
  { title: 'Contact Us — LuxeGem Fine Jewellery' },
  { name: 'description', content: 'Get in touch with LuxeGem. Book a consultation, ask about custom orders, or get support from our jewellery experts.' },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">✦ We Are Here For You</p>
          <h1 className="page-hero__title">Contact Us</h1>
          <p className="page-hero__sub">
            Whether you need help choosing a piece, want a custom design, or have a question — our experts are ready to help.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <div>
            <h2 className="contact-info__title">Get in Touch</h2>
            <p className="contact-info__desc">
              We love hearing from our customers. Reach out anytime — we typically respond within 2 business hours.
            </p>

            {[
              { icon: '📞', label: 'Phone', value: '+1 (800) 555-0199\nMon–Sat, 9am–7pm' },
              { icon: '📧', label: 'Email', value: 'hello@luxegem.com\nWe reply within 2 hours' },
              { icon: '📍', label: 'Showroom', value: '42 Diamond Avenue, Suite 800\nNew York, NY 10001' },
              { icon: '⏰', label: 'Hours', value: 'Monday–Saturday: 9am – 7pm\nSunday: 11am – 5pm' },
            ].map(d => (
              <div key={d.label} className="contact-detail">
                <div className="contact-detail__icon">{d.icon}</div>
                <div>
                  <div className="contact-detail__label">{d.label}</div>
                  <div className="contact-detail__value" style={{ whiteSpace: 'pre-line' }}>{d.value}</div>
                </div>
              </div>
            ))}

            {/* Payment & Shipping note */}
            <div style={{ marginTop: '2rem', background: '#fdf9ee', border: '1px solid #e8cc85', borderRadius: '8px', padding: '1.25rem' }}>
              <div style={{ fontSize: '.78rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.5rem' }}>Payment & Shipping</div>
              <p style={{ fontSize: '.88rem', color: 'var(--charcoal)', lineHeight: 1.7 }}>
                Our full payment gateway (Stripe, PayPal, Razorpay) and shipping integration (FedEx, DHL) is coming soon.
                To place an order today, simply send us a message and our team will assist you personally.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form
              onSubmit={e => { e.preventDefault(); alert('Thank you! We will get back to you within 2 hours.'); }}
              noValidate
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" type="text" placeholder="Jane" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Smith" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option>General Enquiry</option>
                  <option>Custom Order</option>
                  <option>Book Consultation</option>
                  <option>Order Status</option>
                  <option>Returns & Exchanges</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us how we can help you..." required />
              </div>
              <button type="submit" className="btn btn-gold btn-full btn-lg">Send Message</button>
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '.8rem', color: 'var(--grey)' }}>
                We respect your privacy. Your data will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div style={{ background: '#f5f5f5', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #e8e4dc' }}>
        <div style={{ textAlign: 'center', color: 'var(--grey)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
          <p style={{ fontSize: '1rem', fontWeight: 600 }}>42 Diamond Avenue, Suite 800, New York, NY 10001</p>
          <p style={{ fontSize: '.85rem', marginTop: '.5rem' }}>Google Maps integration available on launch</p>
        </div>
      </div>
    </>
  );
}
