const experiencePoints = [
  'Designed and developed scalable backend systems using Node.js, Express.js, and PostgreSQL.',
  'Built a high-concurrency ticket booking platform serving 100K+ users.',
  'Designed and maintained REST APIs for booking, admin, and financial workflows.',
  'Developed a real-time transport system using WebSockets and Google Maps API.',
  'Optimized database queries and reduced backend latency by around 30%.',
  'Integrated AWS services such as EC2, RDS, S3, and SES for deployment and communication.',
  'Implemented microservices architecture with Kafka-based event-driven communication.',
  'Built secure OTP-based authentication using MSG91.',
  'Developed AI-powered features using LangChain, OpenAI, and Gemini.',
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Building backend systems in production.</h2>
        <p className="section-description">
          My experience is centered on scalable Node.js services, database
          performance, real-time workflows, cloud deployments, and production AI
          integration.
        </p>
      </div>

      <div className="section-surface timeline-card">
        <div className="timeline-item">
          <div className="timeline-marker">SL</div>

          <div>
            <h3 className="timeline-role">Software Developer (Backend)</h3>
            <p className="timeline-company">Script Lanes, Pune</p>
            <p className="timeline-duration">
              Jan 2023 – Apr 2026 · 3 years 4 months
            </p>

            <ul className="timeline-points">
              {experiencePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
