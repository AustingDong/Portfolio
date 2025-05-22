import '../styles/Projects.css'

interface Project {
  title: string
  description: string[]
  githubLink: string
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: 'IEEE VIS: Probing Vis Literacy of VLMs',
      description: [
        'Developed an Attention-guided Grad-CAM approach for visual question answering on charts',
        'Improved interpretability of model decisions through enhanced visualization techniques'
      ],
      githubLink: 'https://github.com/AustingDong/Probing-Vis-Literacy-of-VLMs'
    },
    
    {
      title: 'ICH CT Segmentation via Transfer Learning',
      description: [
        'Led domain adaptation research using Attention U-Net for medical image segmentation',
        'Preprocessed stroke MRI and ICH CT data with NiBabel and Nilearn',
        'Published findings at ICIAAI 2024 conference'
      ],
      githubLink: 'https://www.atlantis-press.com/proceedings/iciaai-24/126004119'
    },

    {
      title: 'Scotiabank Fraud Detection Challenge',
      description: [
        'Won 1st place among 500+ participants at University of Waterloo & Scotiabank competition',
        'Developed XGBoost-based fraud detection model with SMOTE augmentation for imbalanced data',
        'Optimized F1 score via threshold tuning to reduce fraud cost and improve satisfaction'
      ],
      githubLink: 'https://github.com/joeyuh/OToInfinity-Scotiabank-Competition'
    },

    {
      title: 'NASA Space Apps NLP Hackathon',
      description: [
        'Received Global Nomination (top 10% of 4500+ teams)',
        'Built unsupervised NLP model using complex networks and word centrality analysis',
        'Trained supervised model with TensorFlow to simplify scientific research through web scraping'
      ],
      githubLink: 'https://2022.spaceappschallenge.org/challenges/2022-challenges/science-legacy/teams/0to/project'
    }
  ]

  return (
    <div className="projects">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <ul className="project-list">
                {project.description.map((point, index) => (
                  <li key={index} className="project-item">
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg className="project-link-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 