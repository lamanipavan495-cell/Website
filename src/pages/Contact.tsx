import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="contact-page container">
      <div className="section-heading center">
        <p className="eyebrow">Contact</p>
        <h1>Connect with our team for planning, design, and delivery support.</h1>
        <p className="section-lead">
          Reach out for project consultations, feasibility guidance, and strategic collaboration.
          We respond quickly to new opportunities and client requests.
        </p>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-info glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Office</h2>
          <p>Shop No.10, Basement Floor, Athani Kalyan Mantap Complex,</p>
          <p>Near B.E. College Circle, Vidyagiri, Bagalkot - 587102</p>
          <p>Email: <a href="mailto:bgk.caa@gmail.com">bgk.caa@gmail.com</a></p>
          <p>Email: <a href="mailto:ar_chandra@live.in">ar_chandra@live.in</a></p>
          <p>Phone: <a href="tel:+918762507550">+91 87625 07550</a></p>
          <p>Phone: <a href="tel:+918762507551">+91 87625 07551</a></p>
          <p>Phone: <a href="tel:+919845278433">+91 98452 78433</a></p>

          <div className="info-group">
            <h3>Office hours</h3>
            <p>Mon — Fri: 9:00 AM — 7:00 PM</p>
            <p>Sat: 10:00 AM — 4:00 PM</p>
          </div>

          <div className="contact-actions">
            <a href="https://wa.me/919845278433" className="button primary" target="_blank" rel="noreferrer noopener">WhatsApp Chat</a>
            <a href="https://www.linkedin.com/company/chandra-architects-and-associates" className="button secondary" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          </div>

          <a
            className="map-placeholder"
            href="https://www.google.com/maps/place/Chandra+Architect+%26+Associates/@16.1733332,75.6573822,17z/data=!4m7!3m6!1s0x3bc77904c9b1a5b1:0x99e6f9d055012456!8m2!3d16.1733332!4d75.6599571!15sChJjaGFuZHJhIGFzc29jaWF0ZXOSARFhcmNoaXRlY3R1cmVfZmlybeABAA!16s%2Fg%2F11bxdv8xmn?entry=tts"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open in Google Maps
          </a>
        </motion.div>

      </div>
    </section>
  )
}
