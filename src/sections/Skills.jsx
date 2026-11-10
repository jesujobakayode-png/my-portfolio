
import { motion } from 'motion/react'
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Creating responsive and intuitive user interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building APIs and application logic.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Structuring and managing application data.',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description: 'Developing foundational knowledge of intelligent systems.',
    skills: ['Python', 'Data Analysis', 'Machine Learning Fundamentals'],
  },
  {
    icon: Wrench,
    title: 'Tools & Workflow',
    description: 'Tools I use to develop and manage projects.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section section-padding">
      <div className="section-container">

        <div className="section-label">
          <span>02 / MY EXPERTISE</span>
          <div />
        </div>

        <div className="skills-heading">
          <div>
            <p className="section-eyebrow">WHAT I BRING TO THE TABLE</p>
            <h2 className="section-title">
              Tools I use to
              <br />
              <span>build and innovate.</span>
            </h2>
          </div>

          <p className="skills-intro">
            A growing toolkit shaped by practical projects,
            continuous learning and a passion for building
            useful digital products.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.title}
                className="skill-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-card-icon">
                  <Icon size={23} />
                </div>

                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills
