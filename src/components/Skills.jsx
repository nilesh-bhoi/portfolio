const skillGroups = [
  {
    title: '🔧 Backend',
    colorClass: 'skill-blue',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Microservices',
      'WebSockets',
      'Kafka',
    ],
  },
  {
    title: '🗄️ Databases',
    colorClass: 'skill-green',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: '☁️ Cloud & Tools',
    colorClass: 'skill-orange',
    skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS SES', 'Git', 'Razorpay', 'MSG91', 'Google Maps API'],
  },
  {
    title: '🤖 AI / GenAI',
    colorClass: 'skill-purple',
    skills: [
      'LangChain',
      'OpenAI',
      'Gemini',
      'Prompt Engineering',
      'LLM Integration',
    ],
  },
  {
    title: '💻 Frontend',
    colorClass: 'skill-cyan',
    skills: ['React.js', 'JavaScript'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Tools and technologies I work with.</h2>
        <p className="section-description">
          My strongest experience is in backend architecture and AI integration,
          with a growing React skill set to connect backend thinking with
          frontend delivery.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="section-surface skill-group">
            <h3 className="skill-group-title">{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`skill-tag ${group.colorClass}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
