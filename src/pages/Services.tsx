import { motion } from 'framer-motion'

const services = [
  {
    title: 'Architecture',
    description: 'Designing visionary buildings with lasting form, function, and context.',
    details: 'From concept to construction, our architecture services are rooted in site intelligence, material clarity, and human-centered spatial planning.',
  },
  {
    title: 'Engineering',
    description: 'Coordinated structural and MEP design for resilient, efficient buildings.',
    details: 'Our engineering approach delivers constructible solutions that integrate with architectural vision, safety standards, and cost targets.',
  },
  {
    title: 'Project Management',
    description: 'Active project oversight that keeps timelines, budgets, and quality aligned.',
    details: 'We coordinate multidisciplinary teams, approvals, documentation, and delivery milestones for seamless project execution.',
  },
  {
    title: 'Consultancy',
    description: 'Advisory services that reduce risk and amplify long-term value.',
    details: 'We support feasibility studies, client briefing, procurement strategy, and construction advisory for every project type.',
  },
  {
    title: 'Planning',
    description: 'Strategic master planning and land-use guidance for future-ready developments.',
    details: 'Our planning services define the built environment with functional zoning, visual identity, and infrastructure integration.',
  },
  {
    title: 'Construction Supervision',
    description: 'On-site supervision and quality control through every construction phase.',
    details: 'We ensure design intent is protected through rigorous site inspections, coordination, and contractor engagement.',
  },
  {
    title: 'Interior Design',
    description: 'Curated interior environments that support brand, comfort, and function.',
    details: 'We develop material palettes, furniture strategies, and spatial layouts that enhance the occupant experience.',
  },
  {
    title: 'Documentation',
    description: 'Comprehensive technical documentation to support approvals and construction.',
    details: 'From drawings to specifications, our documents are precise, clear, and ready for implementation.',
  },
]

export default function Services() {
  return (
    <section className="services-page container">
      <div className="section-heading center">
        <p className="eyebrow">Services</p>
        <h1>Comprehensive services for architecture, real estate, and construction.</h1>
        <p className="section-lead">
          We partner with developers, institutions, and brands to deliver design excellence across every phase of the project lifecycle.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-detail-card glass-card"
            whileHover={{ y: -10, scale: 1.01 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="service-icon">{service.title.charAt(0)}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <details>
              <summary>Learn more</summary>
              <p>{service.details}</p>
            </details>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
