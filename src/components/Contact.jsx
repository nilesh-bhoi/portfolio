import { Code2, Link2, Mail } from 'lucide-react'

const contactItems = [
  {
    label: 'Email',
    href: 'mailto:bhoinilesh01@gmail.com',
    icon: Mail,
  },
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
]

function Contact() {
  return (
    <section id="contact" className="contact-section section-surface">
      <div className="contact-panel">
        <div className="contact-text">
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s Work Together</h2>
          <p>
            Open to Backend Engineer and AI Integration roles in Pune or
            Remote. If you&apos;re hiring for scalable backend systems,
            production AI, or microservices work, I&apos;d love to connect.
          </p>
        </div>

        <div className="contact-actions">
          {contactItems.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                className="contact-button"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.href.startsWith('http') ? 'noreferrer' : undefined
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
