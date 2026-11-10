
import { motion } from 'motion/react'
import { ArrowUpRight, GraduationCap, Code2, Lightbulb } from 'lucide-react'
import mascotImage from '../assets/mascot-workspace.png'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Civil Engineering Graduate',
    description: 'An engineering foundation built around analytical thinking and problem-solving.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    description: 'Building modern web applications across frontend and backend technologies.',
  },
  {
    icon: Lightbulb,
    title: 'AI/ML Enthusiast',
    description: 'Exploring intelligent systems, data and emerging technologies.',
  },
]

function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="section-container">

        <div className="section-label">
          <span>01 / ABOUT ME</span>
          <div />
        </div>

        <div className="about-grid">

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">A LITTLE ABOUT MY JOURNEY</p>

            <h2 className="section-title">
              Engineering mindset.
              <br />
              <span>Developer's creativity.</span>
            </h2>

            <p className="about-description">
              I'm Oluwakayode Alabi, a Full-Stack Developer
              and Product Builder with a background in Civil
              Engineering and a growing interest in Artificial
              Intelligence and Machine Learning.
            </p>

            <p className="about-description">
              My journey into technology has been driven by
              curiosity and a desire to build things that make
              a difference. From crafting intuitive user
              interfaces to developing backend systems, I
              enjoy bringing ideas to life through code.
            </p>

            <p className="about-description">
              I believe great software goes beyond writing
              code. It starts with understanding a problem,
              designing a thoughtful solution and building
              something people can actually use.
            </p>

            <a href="#projects" className="about-link">
              Explore what I've built
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-glow" />

            <img
              src={mascotImage}
              alt="Oluwakayode Alabi at his workspace, building digital products"
              className="about-mascot"
            />

            <div className="about-image-caption">
              <span className="caption-dot" />
              <div>
                <strong>THE BUILDER MINDSET</strong>
                <p>Dream. Build. Innovate.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                className="highlight-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="highlight-icon">
                  <Icon size={21} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default About
