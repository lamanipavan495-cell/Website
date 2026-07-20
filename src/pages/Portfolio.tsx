import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = ['All', 'Residential', 'Villas', 'Commercial', 'Institutional', 'Interior Design', 'Renovation', 'Master Planning', '3D Visualization']
const projects = [
  {
    title: 'Skyline Elevation',
    category: 'Commercial',
    location: 'Mumbai, India',
    siteArea: '4,200 sq. ft.',
    builtUpArea: '28,000 sq. ft.',
    services: 'Architecture, Planning, Supervision',
    description: 'A premium commercial building delivering refined workspace and elevated urban frontage.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern Villa Retreat',
    category: 'Villas',
    location: 'Bengaluru, India',
    siteArea: '8,500 sq. ft.',
    builtUpArea: '6,200 sq. ft.',
    services: 'Architecture, Interior Design, Visualization',
    description: 'A luxury villa featuring seamless indoor-outdoor living and elegant finishes.',
    image: '/villa-portfolio.jpg',
  },

  {
    title: 'Institutional Campus',
    category: 'Institutional',
    location: 'Bangalore, India',
    siteArea: '16,500 sq. ft.',
    builtUpArea: '34,000 sq. ft.',
    services: 'Master Planning, Consultancy, Supervision',
    description: 'A carefully planned campus for future-ready institutional use with civic identity.',
    image: 'https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="portfolio-page container">
      <div className="section-heading center">
        <p className="eyebrow">Portfolio</p>
        <h1>Selected work that reflects our design discipline and execution quality.</h1>
        <p className="section-lead">
          Each project is shaped by context, client goals, and a commitment to enduring architecture.
        </p>
      </div>

      <div className="filter-bar glass-card">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            whileHover={{ y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
            <div className="project-content glass-card">
              <span className="project-tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-details">
                <div><strong>Location</strong><span>{project.location}</span></div>
                <div><strong>Site area</strong><span>{project.siteArea}</span></div>
                <div><strong>Built-up area</strong><span>{project.builtUpArea}</span></div>
                <div><strong>Services</strong><span>{project.services}</span></div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
