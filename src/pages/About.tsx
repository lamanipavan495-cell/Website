import { motion } from 'framer-motion'

const teamRoles = [
  'Principal Architect',
  'Architects',
  'Interior Designers',
  'Structural Consultants',
  'Visualization Artists',
  'Site Engineers',
]

const leadership = [
  {
    name: 'Binod Kumar',
    role: 'Founder',
    image: 'https://unicorn-images.b-cdn.net/1fe30d76-4a3c-4bb6-8ad1-e8142cabb268',
    description: 'Guiding the vision with strategic design and engineering leadership.',
  },
  {
    name: 'Chandra Kumar',
    role: 'Co-Founder',
    image: 'https://unicorn-images.b-cdn.net/cbe0bd75-6379-42a1-8438-0906edd5502d',
    description: 'Bringing operational excellence and project delivery expertise.',
  },
]

export default function About() {
  return (
    <section className="about-page container">
      <div className="section-heading center">
        <p className="eyebrow">About Us</p>
        <h1>Who We Are</h1>
        <p className="section-lead">
          Chandra Architects and Associates is a multidisciplinary design practice dedicated to creating timeless architecture, elegant interiors, and world-class visualizations.
          We combine creativity, technical expertise, and innovation to deliver spaces that enrich lives and exceed expectations.
        </p>
      </div>

      <div className="about-grid">
        <motion.div className="about-panel glass-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
          <h2>Vision</h2>
          <p>To shape meaningful environments that balance aesthetics, sustainability, and functionality.</p>
        </motion.div>

        <motion.div className="about-panel glass-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2>Mission</h2>
          <p>To deliver exceptional architectural solutions through innovation, collaboration, and precision.</p>
        </motion.div>
      </div>

      <div className="section founder-section">
        <div className="founder-panel glass-card">
          <div className="founder-copy">
            <p className="eyebrow">Founder</p>
            <h2>Binod Kumar</h2>
            <p>
              Binod Kumar leads Chandra Architects and Associates with a visionary approach to design and project delivery.
              His career blends architectural excellence, real estate strategy, and an unwavering commitment to quality.
            </p>
          </div>
        </div>
      </div>

      <div className="section team-overview">
        <div className="section-heading">
          <p className="eyebrow">Team</p>
          <h2>Built for every stage of the project.</h2>
        </div>
        <div className="team-role-grid">
          {teamRoles.map((role) => (
            <div key={role} className="team-role-card glass-card">
              <h3>{role}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="section leadership-section container">
        <div className="section-heading">
          <p className="eyebrow">Leadership</p>
          <h2>Meet the team guiding the firm.</h2>
        </div>

        <div className="team-grid">
          {leadership.map((person) => (
            <motion.div key={person.name} className="team-card glass-card" whileHover={{ y: -8 }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}>
              <img className="team-avatar" src={person.image} alt={person.name} />
              <h3>{person.name}</h3>
              <p className="team-role-label">{person.role}</p>
              <p>{person.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
