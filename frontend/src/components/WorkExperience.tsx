import '../styles/WorkExperience.css'

interface WorkItem {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
  image: string
}

const workExperience: WorkItem[] = [
    {
      title: "Undergraduate Research Fellow (Supervisor: Yuntian Deng)",
      company: "University of Waterloo",
      period: "Sep 2025 - Dec 2025",
      image: "images/UniversityOfWaterloo_logo_vert_rgb.png",
      description: [
        
      ],
      technologies: ["Multimodal Model (VLMs)", "VLM Fine-tuning"]
    },
    {
        title: "Undergraduate Research Fellow (Supervisor: Anamaria Crisan)",
        company: "University of Waterloo",
        period: "Jan 2025 - Apr 2025",
        image: "images/UniversityOfWaterloo_logo_vert_rgb.png",
        description: [
          "Published a paper at IEEE VIS 2025 when solving side problems.",
          "Research contributes to a planned CHI 2025 submission on personalized explainability in data visualizations."
        ],
        technologies: ["Multimodal Model (VLMs)", "VQA tasks", "Model Interpretation", "Human-Centered AI"]
    },
    {
        title: "Data Analyst Intern",
        company: "Microsoft",
        period: "Jan 2024 - Apr 2024",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        description: [
          "Conducted data analysis for Windows Defender and Azure error logs.",
          "Developed classification models for anomaly detection and error prediction."
        ],
        technologies: ["EDA", "Machine Learning"]
    },
  {
    title: "Software Developer",
    company: "YSAIT",
    period: "Sep 2023 - Dec 2023",
    image: "images/YSAIT.png",
    description: [
      "Developed an AI-enhanced e-learning platform with cross-functional teams.",
    ],
    technologies: ["Full-stack Development", "LLMs"]
  },
  // Add more work experiences as needed
]

export const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2 className="work-experience-header">Work Experience</h2>
      <div className="work-experience-list">
        {workExperience.map((work, index) => (
          <div key={index} className="work-card">
            <div className="work-content">
              <div className="work-top">
                <div className="work-top-left">
                  <img
                    className="work-logo"
                    src={work.image}
                    alt={`${work.company} logo`}
                    loading="lazy"
                  />
                  <div className="work-top-text">
                    <h3 className="work-title">{work.title}</h3>
                    <div className="work-company">{work.company}</div>
                  </div>
                </div>
                <div className="work-period">{work.period}</div>
              </div>
              <ul className="work-description">
                {work.description.map((item, idx) => (
                  <li key={idx} className="work-item">{item}</li>
                ))}
              </ul>
              <div className="work-technologies">
                {work.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 