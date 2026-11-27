
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowUpRight,
  X,
  Github,
  ExternalLink,
  Layers3,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'SaveFocus',
    category: 'FINTECH / PRODUCTIVITY',
    description:
      'A savings and goal-tracking application designed to help users stay focused on their financial goals, one goal at a time.',
    challenge:
      'Creating a focused savings experience that makes goal tracking simple and encourages consistent financial habits.',
    solution:
      'Developed a multi-page React application with goal creation, tracking, onboarding, overview and settings experiences.',
    features: [
      'Goal creation and tracking',
      'Savings progress overview',
      'Onboarding experience',
      'Reusable UI components',
      'Responsive layouts',
    ],
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '/images/savefocus.png',
    github: '',
    live: '',
  },
  {
    number: '02',
    name: 'CampusBite',
    category: 'E-COMMERCE / FOOD TECH',
    description:
      'A food ordering platform connecting customers with vendors through a streamlined ordering and management experience.',
    challenge:
      'Building a two-sided ordering system where customers can browse and order while vendors manage products and orders.',
    solution:
      'Implemented a full-stack application with authentication, product management, shopping cart, checkout and order workflows.',
    features: [
      'Buyer and vendor authentication',
      'Product management',
      'Shopping cart and checkout',
      'Order tracking and status updates',
      'Vendor dashboard and analytics',
    ],
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/campusbite.png',
    github: '',
    live: '',
  },
  {
    number: '03',
    name: 'Divine Mercy Farms',
    category: 'AGRITECH / BUSINESS MANAGEMENT',
    description:
      'A poultry farm management system built to support day-to-day farm operations and business visibility.',
    challenge:
      'Making flock management, production records, sales and farm expenses easier to organize and monitor.',
    solution:
      'Developed a full-stack farm management application with secure authentication, business-scoped data and operational dashboards.',
    features: [
      'Flock management',
      'Daily egg production records',
      'Sales and expense tracking',
      'Customer and payment management',
      'Farm dashboard and analytics',
    ],
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: '/images/divine-mercy-farms.png',
    github: '',
    live: '',
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="section-container">

        <div className="section-label">
          <span>03 / SELECTED WORK</span>
          <div />
        </div>

        <div className="projects-heading">
          <div>
            <p className="section-eyebrow">THINGS I'VE BUILT</p>
            <h2 className="section-title">
              Turning concepts into
              <br />
              <span>real products.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of projects showcasing my approach
            to problem-solving, product development and
            full-stack engineering.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="project-image">
                <img src={project.image} alt={`${project.name} project preview`} />

                <span className="project-number">
                  {project.number}
                </span>

                <button
                  className="project-view"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.name} case study`}
                >
                  <ArrowUpRight size={22} />
                </button>
              </div>

              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <button
                  className="project-details-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  Explore case study <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedProject.name} case study`}
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 25 }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close case study"
                >
                  <X size={21} />
                </button>

                <span className="project-category">
                  {selectedProject.category}
                </span>

                <h2>{selectedProject.name}</h2>
                <p className="modal-description">
                  {selectedProject.description}
                </p>

                <div className="modal-content-grid">
                  <div>
                    <h3>The challenge</h3>
                    <p>{selectedProject.challenge}</p>
                  </div>

                  <div>
                    <h3>The solution</h3>
                    <p>{selectedProject.solution}</p>
                  </div>
                </div>

                <h3>Key features</h3>
                <ul className="modal-features">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <h3>Technology stack</h3>
                <div className="project-stack modal-stack">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  {selectedProject.github && (
                    <a href={selectedProject.github}
                      target="_blank" rel="noreferrer">
                      <Github size={17} /> Source code
                    </a>
                  )}

                  {selectedProject.live && (
                    <a href={selectedProject.live}
                      target="_blank" rel="noreferrer">
                      <ExternalLink size={17} /> Live project
                    </a>
                  )}

                  {!selectedProject.github && !selectedProject.live && (
                    <p className="modal-note">
                      Project links will be added when available.
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Projects
