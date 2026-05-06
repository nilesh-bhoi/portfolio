import { useEffect, useState } from 'react'
import profilePhoto from '../assets/profile.jpg'

const titles = [
  'Backend Engineer',
  'AI Integration Engineer',
  'Node.js Developer',
  'LLM Integration Specialist',
  'Full Stack Developer',
]

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // This effect creates a simple typing animation using only basic React hooks.
  // The timing values are tuned so each title feels readable and does not cut off visually.
  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const isWordComplete = typedText === currentTitle
    const isWordRemoved = typedText === ''

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(currentTitle.slice(0, typedText.length + 1))

          if (isWordComplete) {
            setIsDeleting(true)
          }

          return
        }

        setTypedText(currentTitle.slice(0, typedText.length - 1))

        if (isWordRemoved) {
          setTimeout(() => {
            setIsDeleting(false)
            setTitleIndex((currentIndex) => (currentIndex + 1) % titles.length)
          }, 400)
        }
      },
      isDeleting ? 40 : isWordComplete ? 1800 : 80,
    )

    return () => clearTimeout(timeout)
  }, [isDeleting, titleIndex, typedText])

  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="hero-intro">Hi, I&apos;m Nilesh Bhoi 👋</p>

        <h1 className="hero-title">
          Backend Engineer. AI Integration. Full Stack in Progress.
        </h1>

        <div className="typing-line" aria-live="polite">
          <span>{typedText}</span>
          <span className="typing-cursor">|</span>
        </div>

        <p className="hero-summary">
          3+ years building scalable Node.js systems, microservices, and
          production AI integrations using LangChain, OpenAI, and Gemini.
          <br />
          Currently expanding into full stack — building React frontends that
          connect to the backends I design.
          <br />
          Built systems handling 100K+ concurrent users.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            View My Work
          </a>

          <a
            className="button-secondary"
            href="/Nilesh_Bhoi_Backend_Engineer.pdf"
            download="Nilesh_Bhoi_Backend_Engineer.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-shell">
          <img
            className="hero-photo"
            src={profilePhoto}
            alt="Portrait of Nilesh Bhoi"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
