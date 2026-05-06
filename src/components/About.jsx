import { Code2, Link2, Mail } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nilesh-bhoi',
    icon: Link2,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/nilesh-bhoi',
    icon: Code2,
  },
  {
    label: 'Email',
    href: 'mailto:bhoinilesh01@gmail.com',
    icon: Mail,
  },
]

function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="section-kicker">About</p>
        <h2 className="section-title">Backend engineering with a product mindset.</h2>
        <p className="section-description">
          I enjoy building backend systems that stay stable under load, keep
          APIs predictable, and make room for smart AI-powered workflows in
          production.
        </p>
      </div>

      <div className="section-surface about-grid">
        <img
          className="about-photo"
          src={profilePhoto}
          alt="Nilesh Bhoi in the About section"
        />

        <div className="about-copy">
          <p>
          I'm Nilesh Bhoi, a Backend Engineer based in Pune, 
India, with 3+ years of experience building scalable 
systems using Node.js, Express.js, PostgreSQL, 
microservices, and event-driven architecture.
          </p>

          <p>
          My recent work has included high-concurrency booking 
platforms serving 100K+ users, real-time transport 
systems, secure OTP authentication flows, and 
AI-powered backend features using LangChain, 
OpenAI, and Gemini.
          </p>

          <p>
          I'm actively expanding into full stack development — 
this portfolio itself is built using React.js and Vite, 
with components, hooks, and responsive design written 
from scratch.
          </p>

          <p>
            I&apos;m open to Backend Engineer, Full Stack, and AI 
            Integration roles in Pune or Remote.
          </p>

          <div className="about-socials">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  className="social-link"
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noreferrer'
                      : undefined
                  }
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
