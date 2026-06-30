import { Link } from 'react-router-dom'

const services = [
  'Architecture',
  'Engineering',
  'Consultancy',
  'Project Management',
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-brand">
          <div className="brand-mark secondary">CA</div>
          <div>
            <h3>Chandra Associates</h3>
            <p>Premium engineering, architecture, and consultancy.</p>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.map((service) => (<li key={service}>{service}</li>))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>100 Corporate Avenue, Mumbai, India</p>
          <p>Phone: +91 98452 78433</p>
          <p>Email: contact@chandraassociates.com</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Chandra Associates. All rights reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="WhatsApp">WhatsApp</a>
          <a href="#" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
