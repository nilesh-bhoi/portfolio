import { Lock } from 'lucide-react'

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'Full stack portfolio website built from scratch using React.js and Vite. Designed, developed, and deployed independently as a hands-on React learning project.',
    stat: 'React.js · Vite · Deployed on Vercel',
    highlights: [
      'Built 8 reusable React components — Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer.',
      'Implemented typing animation with useState and useEffect hooks for dynamic text display.',
      'Designed fully responsive layout using CSS Grid and Flexbox — works across mobile and desktop.',
      'Deployed on Vercel with custom URL and resume download functionality.',
    ],
    techStack: [
      'React.js',
      'Vite',
      'JavaScript',
      'CSS Grid',
      'Flexbox',
      'Lucide React',
      'Vercel',
    ],
    isLiveProject: true,
    githubUrl: 'https://github.com/nilesh-bhoi/portfolio',
    liveUrl: '#',
  },
  {
    title: 'Ticket Booking Platform',
    description:
      'High-concurrency backend handling 100K+ simultaneous bookings with real-time payment processing and admin workflows.',
    stat: '100K+ Concurrent Users',
    highlights: [
      'Designed booking, admin, and payment APIs for a high-traffic transactional system.',
      'Integrated Razorpay and AWS SES for payment confirmation and notification workflows.',
      'Focused on concurrency-safe flows for peak-demand booking windows.',
    ],
    techStack: ['Node.js', 'PostgreSQL', 'Razorpay', 'AWS SES', 'REST APIs','PrismaORM'],
  },
  {
    title: 'Real-Time Transport System',
    description:
      'Live vehicle tracking with route optimization using WebSockets and Google Maps API, with measurable latency improvements.',
    stat: 'Real-time · ~30% Latency Reduction',
    highlights: [
      'Built real-time vehicle updates using WebSockets for continuous status visibility.',
      'Integrated Google Maps APIs for route-aware tracking and transport updates.',
      'Optimized backend data handling and query flow to reduce response latency.',
    ],
    techStack: ['Node.js', 'WebSockets', 'Google Maps API', 'MySQL'],
  },
  {
    title: 'FlourishAI — AI Nutrition Platform',
    description:
      'AI-powered nutrition backend with multi-LLM orchestration that chooses between OpenAI and Gemini using latency and cost signals.',
    stat: 'Multi-LLM Orchestration · Production AI',
    highlights: [
      'Built multi-model orchestration logic to route requests across OpenAI and Gemini.',
      'Used LangChain and prompt engineering to reduce hallucinations and token waste.',
      'Shaped production-facing AI flows with backend-first monitoring and response control.',
    ],
    techStack: ['Node.js', 'LangChain', 'OpenAI', 'Gemini', 'PostgreSQL','PrismaORM'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Company projects with backend depth.</h2>
        <p className="section-description">
          These are production systems built in private company environments, so
          the focus here is on the technical impact, architecture, and backend
          problem solving rather than public repository links.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="section-surface project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>

              {project.isLiveProject ? (
                <span
                  className="private-badge"
                  style={{
                    background: 'rgba(34, 197, 94, 0.12)',
                    border: '1px solid rgba(34, 197, 94, 0.32)',
                    color: '#89e3ad',
                  }}
                >
                  ✅ Live · React
                </span>
              ) : (
                <span className="private-badge">
                  <Lock size={16} />
                  Private
                </span>
              )}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-stat">{project.stat}</div>

            <h4 className="project-highlights-title">Key Highlights</h4>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="tech-tags">
              {project.techStack.map((techItem) => (
                <span key={techItem} className="tech-tag">
                  {techItem}
                </span>
              ))}
            </div>

            {project.isLiveProject ? (
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-button"
                  style={{ minHeight: '40px', fontSize: '0.88rem', padding: '0 16px' }}
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                  style={{ minHeight: '40px', fontSize: '0.88rem', padding: '0 16px' }}
                >
                  Live Demo
                </a>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
