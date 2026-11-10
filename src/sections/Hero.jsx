
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
} from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="availability"
        >
          <span className="availability-dot" />
          Open to opportunities & collaborations
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-intro"
        >
          HELLO, I'M OLUWAKAYODE ALABI
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building ideas into
          <br />
          <span>meaningful</span> digital
          <br />
          experiences.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-description"
        >
          I'm a Full-Stack Developer & Product Builder
          passionate about creating intuitive, functional
          and scalable web applications that solve
          real-world problems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hero-actions"
        >
          <a href="#projects" className="primary-btn">
            Explore my work
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            Let's connect
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hero-socials"
        >
          <span>FIND ME ON</span>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
        </motion.div>
      </div>

      {/* Decorative visual */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="visual-glow" />

        <div className="visual-card">
          <div className="visual-card-top">
            <Code2 size={20} />
            <span>CREATIVE DEVELOPER</span>
          </div>

          <div className="visual-initials">
            OA<span>.</span>
          </div>

          <div className="visual-card-bottom">
            <span>DESIGNING</span>
            <span>BUILDING</span>
            <span>INNOVATING</span>
          </div>
        </div>

        <div className="floating-tag tag-one">
          <span>01</span> FRONTEND
        </div>

        <div className="floating-tag tag-two">
          <span>02</span> BACKEND
        </div>

        <div className="floating-tag tag-three">
          <span>03</span> PROBLEM SOLVING
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
      </a>
    </section>
  )
}

export default Hero
