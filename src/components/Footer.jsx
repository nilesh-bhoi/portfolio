import { Code2, Link2 } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>Designed &amp; Built by Nilesh Bhoi</p>
        <p>© 2026 · All rights reserved</p>
      </div>

      <div className="footer-socials">
        <a
          className="footer-link"
          href="https://linkedin.com/in/nilesh-bhoi"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Nilesh Bhoi on LinkedIn"
        >
          <Link2 size={18} />
        </a>

        <a
          className="footer-link"
          href="#"
          aria-label="GitHub profile placeholder"
        >
          <Code2 size={18} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
