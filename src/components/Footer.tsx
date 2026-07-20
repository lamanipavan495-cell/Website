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
          <div className="brand-mark secondary">CAA</div>
          <div>
            <h3>CAA Chandra Architect & Associates</h3>
            <p>Premium architecture, engineering, and consultancy.</p>
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
          <p>Shop No.10, Basement Floor, Athani Kalyan Mantap Complex,</p>
          <p>Near B.E. College Circle, Vidyagiri, Bagalkot - 587102</p>
          <p>Phone: +91 87625 07550</p>
          <p>Phone: +91 87625 07551</p>
          <p>Phone: +91 98452 78433</p>
          <p>Email: bgk.caa@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Chandra Associates. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/chandra-architects-and-associates" aria-label="LinkedIn" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href="https://wa.me/919845278433" aria-label="WhatsApp" target="_blank" rel="noreferrer noopener">WhatsApp</a>
          <a href="mailto:bgk.caa@gmail.com" aria-label="Email">Email</a>
        </div>
      </div>
    </footer>
  )
}
