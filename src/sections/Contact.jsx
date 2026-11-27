
import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
} from 'lucide-react'

const EMAIL = 'YOUR_EMAIL@example.com'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      form.subject || 'Portfolio enquiry'
    )

    const body = encodeURIComponent(
      `Hello Oluwakayode,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
    )

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="section-container">

        <div className="section-label">
          <span>05 / GET IN TOUCH</span>
          <div />
        </div>

        <div className="contact-grid">

          <motion.div
            className="contact-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-eyebrow">HAVE AN IDEA IN MIND?</p>

            <h2 className="section-title">
              Let's build
              <br />
              something <span>great.</span>
            </h2>

            <p className="contact-description">
              Whether you're looking for a developer,
              have a project in mind, want to collaborate
              or simply want to connect, I'd love to hear
              from you.
            </p>

            <div className="contact-email">
              <Mail size={20} />
              <div>
                <span>EMAIL ME</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/YOUR_USERNAME"
                target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>

              <a href="https://linkedin.com/in/YOUR_USERNAME"
                target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="contact-mascot">
              <img
                src="/images/mascot-workspace.png"
                alt="OA developer mascot"
              />
              <span>READY TO CREATE SOMETHING MEANINGFUL?</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Send me a message</h3>
            <p>I'll be happy to hear about your idea.</p>

            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />

            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />

            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project collaboration"
            />

            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a little about what you have in mind..."
              rows="5"
              required
            />

            <button type="submit" className="contact-submit">
              Send message <Send size={17} />
            </button>

            {submitted && (
              <p className="form-feedback">
                <CheckCircle2 size={16} />
                Your email application should open to send your message.
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default Contact
