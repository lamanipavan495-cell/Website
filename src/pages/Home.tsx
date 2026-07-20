import { motion } from 'framer-motion'
import Hero3D from '../components/Hero3D'

const statisticItems = [
  { label: 'Projects Completed', value: '9000+' },
  { label: 'Government Projects', value: '100+' },
  { label: 'Awards & Recognitions', value: '45' },
]

const servicesPreview = [
  { title: 'Architecture', description: 'Signature design with enduring functional intelligence.' },
  { title: 'Engineering', description: 'Structural clarity and project efficiency at every stage.' },
  { title: 'Consultancy', description: 'Smart decisions guided by experience and insight.' },
]

export default function Home() {
  return (
    <section className="home-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Award-winning design practice</p>
          <h1>Chandra Architect & Associates</h1>
          <p className="hero-lead">
            Sir M. Visvesvaraya Award-winning architecture and engineering from Bagalkot, delivered with clarity, purpose, and lasting value.
          </p>
          <p>
            We shape homes, institutions, and commercial environments with thoughtful planning, refined detailing, and dependable execution.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/919845278433" className="button primary" target="_blank" rel="noreferrer noopener">WhatsApp</a>
            <a href="https://www.linkedin.com/company/chandra-architects-and-associates" className="button secondary" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <a href="https://www.google.com/maps/place/Chandra+Architect+%26+Associates/@16.1733332,75.6573822,17z/data=!4m7!3m6!1s0x3bc77904c9b1a5b1:0x99e6f9d055012456!8m2!3d16.1733332!4d75.6599571!15sChJjaGFuZHJhIGFzc29jaWF0ZXOSARFhcmNoaXRlY3R1cmVfZmlybeABAA!16s%2Fg%2F11bxdv8xmn?entry=tts" className="button secondary" target="_blank" rel="noreferrer noopener">Locate Us</a>
          </div>
          <div className="hero-profile-grid">
            <div className="hero-profile glass-card">
              <img
                src="https://unicorn-images.b-cdn.net/1fe30d76-4a3c-4bb6-8ad1-e8142cabb268"
                alt="Founder Binod Kumar"
              />
              <div>
                <strong>Founder</strong>
                <p>Binod Kumar</p>
              </div>
            </div>
            <div className="hero-profile glass-card">
              <img
                src="https://unicorn-images.b-cdn.net/cbe0bd75-6379-42a1-8438-0906edd5502d"
                alt="Co-Founder Ar. Chandraprakesh B. Choudhary"
              />
              <div>
                <strong>Co-Founder</strong>
                <p>Ar. Chandraprakesh B. Choudhary</p>
              </div>
            </div>
          </div>
        </div>

        <Hero3D />
      </div>

      <div className="section container stats-scroll">
        <div className="stats-grid">
          {statisticItems.map((item) => (
            <motion.article
              key={item.label}
              className="stat-card glass-card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p>{item.value}</p>
              <span>{item.label}</span>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="section container services-preview">
        <div className="section-heading">
          <p className="eyebrow">Our Services</p>
          <h2>Engineering and architecture delivered with confidence.</h2>
        </div>
        <div className="service-grid">
          {servicesPreview.map((service) => (
            <motion.article
              key={service.title}
              className="service-card"
              whileHover={{ y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="section container featured-projects">
        <div className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Discover the caliber of our built environments.</h2>
        </div>
        <div className="project-showcase">
          <div className="project-card glass-card">
            <div className="project-copy">
              <span>Future-ready campus</span>
              <h3>Commercial complex crafted for presence and performance.</h3>
              <p>From site planning to façade detailing, this project reflects our commitment to elegant, functional commercial architecture.</p>
            </div>
            <div className="project-visual building-image one" />
          </div>
          <div className="project-card glass-card reverse">
            <div className="project-copy">
              <span>Government collaboration</span>
              <h3>Institutional building shaped with disciplined planning.</h3>
              <p>Our approach balances civic identity, efficient circulation, and enduring quality through every phase of delivery.</p>
            </div>
            <div className="project-visual building-image two" />
          </div>
        </div>
      </div>

      <div className="section container testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Client reviews that reflect our commitment to delivery.</h2>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial-card glass-card">
            <p>“Chandra Associates turned our vision into a powerful built environment with excellent execution, communication, and attention to detail.”</p>
            <strong>— Design Director, National Realty Group</strong>
          </article>
          <article className="testimonial-card glass-card">
            <p>“The entire team was responsive and professional. They guided us through every phase and delivered a project that exceeded expectations.”</p>
            <strong>— CEO, Horizon Developments</strong>
          </article>
        </div>
      </div>

      <div className="section container client-section glass-card">
        <div className="client-grid">
          <div>
            <p className="eyebrow">Trusted by</p>
            <h2>Clients who value thoughtful design and reliable delivery.</h2>
          </div>
          <div className="client-logos">
            <span>Residential</span>
            <span>Commercial</span>
            <span>Institutional</span>
            <span>Government</span>
          </div>
        </div>
      </div>

      <div className="section container callout-panel">
        <div className="callout-copy">
          <p className="eyebrow">Start your next project</p>
          <h2>Bring a premium engineering and architecture partner to your team.</h2>
        </div>
        <a href="/contact" className="button primary large">Book a consultation</a>
      </div>
    </section>
  )
}
