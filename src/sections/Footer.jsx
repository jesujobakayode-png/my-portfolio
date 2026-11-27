
import { ArrowUp, Github, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <a href="#home" className="footer-logo">
          OA<span>.</span>
        </a>

        <p>
          Building meaningful digital experiences.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/YOUR_USERNAME"
            target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>

          <a href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>

          <a href="#home" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Oluwakayode Alabi. All rights reserved.</span>
        <span>Designed & built with intention.</span>
      </div>
    </footer>
  )
}

export default Footer
