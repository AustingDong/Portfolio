import { SectionHeading } from './SectionHeading'
import '../styles/Awards.css'

interface Award {
  year: string
  title: string
  detail?: string
}

const awards: Award[] = [
  {
    year: '2026',
    title: 'Undergraduate Student Research Award (USRA)',
    detail: 'University of Waterloo, supporting research with Prof. Yuntian Deng.',
  },
  {
    year: '2023',
    title: 'Scotiabank Data Science Discovery Days — 1st Place',
    detail: 'Won 1st place in a team of 5 among 500+ participants with a predictive EDA + ML pipeline for financial risk analysis.',
  },
  {
    year: '2022',
    title: 'Euclid Math Contest — Top 1%',
    detail: 'University of Waterloo CEMC.',
  },
  {
    year: '2021',
    title: 'USA Computing Olympiad — Gold, Full Marks',
    detail: 'Passed the Gold division with a perfect score, competing in C++.',
  },
  {
    year: '2022',
    title: "President's Scholarship of Distinction",
    detail: 'University of Waterloo entrance award.',
  },
  {
    year: '2022',
    title: 'Faculty of Math Entrance Scholarship',
    detail: '$25,000 CAD, University of Waterloo.',
  },
  {
    year: '2022',
    title: 'Statistics & Actuarial Science Competition Prize',
    detail: 'University of Waterloo.',
  },
]

export const Awards = () => {
  return (
    <div className="awards">
      <SectionHeading title="Awards & Honors" />
      <div className="awards-grid">
        {awards.map((award) => (
          <div key={award.title} className="award-item">
            <span className="award-year">{award.year}</span>
            <div>
              <h3 className="award-title">{award.title}</h3>
              {award.detail && <p className="award-detail">{award.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
