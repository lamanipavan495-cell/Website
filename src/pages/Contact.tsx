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
          <p>Bagalkot, Karnataka, India</p>
          <p>Email: <a href="mailto:chandraassociatesbgk@gmail.com">chandraassociatesbgk@gmail.com</a></p>
          <p>Phone: <a href="tel:+919845284333">+91 98452 84333</a></p>

          <div className="info-group">
            <h3>Office hours</h3>
            <p>Mon — Fri: 9:00 AM — 7:00 PM</p>
            <p>Sat: 10:00 AM — 4:00 PM</p>
          </div>

          <div className="contact-actions">
            <a href="https://wa.me/919845284333" className="button primary">WhatsApp Chat</a>
            <a href="https://www.linkedin.com" className="button secondary">LinkedIn</a>
            <a href="https://www.facebook.com" className="button secondary">Facebook</a>
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

        <motion.div
          className="contact-form-panel glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>Book an Appointment</h3>
          <p>Share a few details and our team will get back to you within one business day.</p>
          <form>
            <label>
              Name
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Your email address" />
            </label>
            <label>
              Project brief
              <textarea rows={5} placeholder="Briefly describe your project or requirement" />
            </label>
            <button type="submit" className="button primary">Request Consultation</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
