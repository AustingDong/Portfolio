import { SectionHeading } from './SectionHeading'
import '../styles/WorkExperience.css'

interface WorkItem {
  title: string
  org: string
  meta?: string
  period: string
  location: string
  description: string[]
  image: string
}

const workExperience: WorkItem[] = [
  {
    title: 'Undergraduate Research Fellow',
    org: 'University of Waterloo',
    meta: 'Advisor: Prof. Yuntian Deng',
    period: 'May 2026 — Present',
    location: 'Waterloo, Canada',
    image: 'images/UniversityOfWaterloo_logo_vert_rgb.png',
    description: [
      'Investigating the performance gap between few-shot prompting and fine-tuning for specializing language models, and whether scaling model size or improving pretraining closes it.',
      'Benchmarking open model families (GPT-2, Qwen) across sizes on a multi-task benchmark to chart the gap as a function of scale and pretraining recency.',
    ],
  },
  {
    title: 'Undergraduate Research Fellow',
    org: 'University of Waterloo',
    meta: 'Advisor: Prof. Yuntian Deng',
    period: 'Sep 2025 — Dec 2025',
    location: 'Waterloo, Canada',
    image: 'images/UniversityOfWaterloo_logo_vert_rgb.png',
    description: [
      'Explored fine-tuning vision–language models with attention regularization and human-labeled supervision to improve controllability and visual interpretability.',
      'Implemented attention visualization and labeling interfaces for multimodal transformer layers, analyzing head-wise token alignment across image–text pairs.',
    ],
  },
  {
    title: 'Undergraduate Research Fellow',
    org: 'University of Waterloo',
    meta: 'Advisor: Prof. Anamaria Crisan',
    period: 'Jan 2025 — Apr 2025',
    location: 'Waterloo, Canada',
    image: 'images/UniversityOfWaterloo_logo_vert_rgb.png',
    description: [
      'First author of a paper accepted to IEEE TVCG (Special Issue for IEEE VIS 2025), introducing AG-CAM — an attention-guided visualization framework for interpreting reasoning in early-fusion vision–language models.',
      'Developed ChartPADs, a persona-adaptive explanation framework that tailors chart descriptions to users’ visualization literacy via an editor–critic multi-agent LLM pipeline.',
      'Conducted a multi-factorial mixed-design user study (50+ participants) showing personalized chart explanations significantly improve comprehension.',
      'Built an interactive web platform to visualize explanation quality and refinement loops.',
    ],
  },
  {
    title: 'Data Analyst Intern',
    org: 'Microsoft',
    period: 'Jan 2024 — Apr 2024',
    location: 'Hong Kong',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    description: [
      'Designed classification pipelines for anomaly detection on Windows Defender and Azure error logs, improving early failure detection by over 15%.',
      'Conducted full-stack data analysis and automated reporting pipelines for reliability metrics.',
    ],
  },
  {
    title: 'Software Developer',
    org: 'YSAIT',
    period: 'Sep 2023 — Dec 2023',
    location: 'Canada',
    image: 'images/YSAIT.png',
    description: [
      'Built backend infrastructure for an AI-driven e-learning platform using Flask and the ChatGPT-3.5 API.',
      'Developed an admin dashboard with Spring Boot, MyBatis, Redis, and MySQL; reduced API response latency by 30% through caching and async pipelines, deployed on AWS EC2.',
    ],
  },
]

export const WorkExperience = () => {
  return (
    <div className="work-experience">
      <SectionHeading title="Experience" />
      <div className="work-list">
        {workExperience.map((work, index) => (
          <article key={index} className="work-entry">
            <div className="work-logo-col">
              <img
                className="work-logo"
                src={work.image}
                alt={`${work.org} logo`}
                loading="lazy"
              />
            </div>
            <div className="work-content">
              <div className="work-top">
                <div>
                  <h3 className="work-title">{work.title}</h3>
                  <div className="work-org">
                    {work.org}
                    {work.meta && <span className="work-meta"> · {work.meta}</span>}
                  </div>
                </div>
                <div className="work-when">
                  <div className="work-period">{work.period}</div>
                  <div className="work-location">{work.location}</div>
                </div>
              </div>
              <ul className="work-description">
                {work.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
