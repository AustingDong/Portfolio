import '../styles/WorkExperience.css'

interface WorkItem {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

const workExperience: WorkItem[] = [
    {
        title: "Undergraduate Research Fellow",
        company: "University of Waterloo",
        period: "Jan 2025 - Apr 2025",
        description: [
          "Led a research project on explanation evaluation in multimodal models, focusing on chart-based question answering and persona-based instruction.",
          "Developed a simulation framework that incorporates participant modeling, readability metrics (e.g., Flesch-Kincaid), and iterative refinement loops using LLMs to enhance chart explanations.",
          "Built an interactive web application to visualize explanation quality over enhancement cycles.",
          "Published a paper at IEEE VIS 2025 when solving side problems.",
          "Research contributes to a planned CHI 2025 submission on personalized explainability in data visualizations."
        ],
        technologies: ["Multimodal Model", "VLM", "VQA tasks", "Model Interpretation", "Human-Centered AI"]
    },
    {
        title: "Data Analyst",
        company: "Microsoft",
        period: "Jan 2024 - Apr 2024",
        description: [
          "Conducted full-stack data analysis for Windows Defender and Azure error logs.",
          "Developed classification models for anomaly detection and error prediction."
        ],
        technologies: ["EDA", "sklearn", "Machine Learning"]
    },
  {
    title: "Software Developer",
    company: "YSAIT",
    period: "Sep 2023 - Dec 2023",
    description: [
      "Built backend infrastructure for an AI-enhanced e-learning platform",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Developed admin dashboard, deployed on AWS"
    ],
    technologies: ["Flask", "LLM Prompting", "AWS"]
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
              <h3 className="work-title">{work.title}</h3>
              <div className="work-company">{work.company}</div>
              <div className="work-period">{work.period}</div>
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