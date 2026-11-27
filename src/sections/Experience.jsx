
import { motion } from 'motion/react'
import { GraduationCap, Code2, BrainCircuit, BriefcaseBusiness } from 'lucide-react'

const journey = [
  {
    icon: GraduationCap,
    period: 'ACADEMIC BACKGROUND',
    title: 'Civil Engineering Graduate',
    organization: 'Academic Foundation',
    description:
      'Developed analytical thinking, technical reasoning and problem-solving skills through an engineering background.',
  },
  {
    icon: Code2,
    period: 'SOFTWARE DEVELOPMENT',
    title: 'Full-Stack Development Training',
    organization: 'Six-month intensive programme',
    description:
      'Built practical experience with frontend development, React, JavaScript, backend development, REST APIs and MongoDB.',
  },
  {
    icon: BrainCircuit,
    period: 'ARTIFICIAL INTELLIGENCE',
    title: 'AI & Machine Learning Training',
    organization: 'TechCrush Bootcamp',
    description:
      'Exploring Python, data analysis and machine learning concepts through practical learning projects.',
  },
  {
    icon: BriefcaseBusiness,
    period: 'PROJECT EXPERIENCE',
    title: 'Independent Product Builder',
    organization: 'Personal & practical projects',
    description:
      'Applying technical knowledge to build functional products, solve practical problems and continuously improve as a developer.',
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section section-padding">
      <div className="section-container">

        <div className="section-label">
          <span>04 / MY JOURNEY</span>
          <div />
        </div>

        <div className="experience-heading">
          <p className="section-eyebrow">LEARNING. BUILDING. EVOLVING.</p>
          <h2 className="section-title">
            The journey behind
            <br />
            <span>the developer.</span>
          </h2>
          <p className="experience-intro">
            Every experience contributes to how I approach
            technology, problem-solving and building products.
          </p>
        </div>

        <div className="timeline">
          {journey.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                className="timeline-item"
                key={item.title}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="timeline-marker">
                  <Icon size={19} />
                </div>

                <div className="timeline-content">
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="cv-banner">
          <div>
            <span className="section-eyebrow">LET'S WORK TOGETHER</span>
            <h3>Want to know more about my background?</h3>
            <p>Explore my professional CV for additional details.</p>
          </div>

          <a
            href="/cv/Oluwakayode-Alabi-CV.pdf"
            download
            className="primary-btn"
          >
            Download CV ↗
          </a>
        </div>

      </div>
    </section>
  )
}

export default Experience
