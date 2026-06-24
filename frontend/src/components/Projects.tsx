import { SectionHeading } from './SectionHeading'
import '../styles/Projects.css'

interface Project {
  title: string
  badge: string
  description: string[]
  link: string
  linkLabel: string
}

const projects: Project[] = [
  {
    title: 'Scotiabank Fraud Detection Challenge',
    badge: '1st Place · 500+ participants',
    description: [
      'Won 1st place at the University of Waterloo × Scotiabank Data Science Discovery Days as a team of 5.',
      'Developed a predictive pipeline integrating exploratory data analysis and machine learning models for financial risk analysis.',
    ],
    link: 'https://github.com/joeyuh/OToInfinity-Scotiabank-Competition',
    linkLabel: 'GitHub',
  },
  {
    title: 'NASA Space Apps NLP Hackathon',
    badge: 'Global Nomination',
    description: [
      'Globally nominated entry in the 2022 NASA Space Apps Challenge (Science Legacy track).',
      'Built an NLP system for exploring and connecting scientific literature.',
    ],
    link: 'https://2022.spaceappschallenge.org/challenges/2022-challenges/science-legacy/teams/0to/project',
    linkLabel: 'Project page',
  },
]

export const Projects = () => {
  return (
    <div className="projects">
      <SectionHeading title="Projects" />
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <span className="project-badge">{project.badge}</span>
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-list">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {project.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
