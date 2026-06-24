import type { ReactNode } from 'react'
import { SectionHeading } from './SectionHeading'
import '../styles/News.css'

interface NewsItem {
  date: string
  text: ReactNode
}

const newsItems: NewsItem[] = [
  {
    date: 'May 2026',
    text: 'Started a second research term with Prof. Yuntian Deng, studying how the gap between few-shot prompting and fine-tuning scales with model size and pretraining.',
  },
  {
    date: 'Nov 2025',
    text: 'Served as a student volunteer at IEEE VIS 2025 in Vienna, Austria.',
  },
  {
    date: 'Oct 2025',
    text: 'Selected for the Fall 2025 cohort of the Google–UWaterloo Futures Lab.',
  },
  {
    date: 'Sep 2025',
    text: 'Started a research fellowship with Prof. Yuntian Deng on interactive, human-in-the-loop fine-tuning of vision–language models.',
  },
  {
    date: 'Jul 2025',
    text: (
      <>
        First-author paper{' '}
        <a
          href="https://ieeexplore.ieee.org/abstract/document/11261397"
          target="_blank"
          rel="noreferrer"
        >
          “Probing the Visualization Literacy of Vision Language Models”
        </a>{' '}
        accepted to IEEE TVCG (Special Issue for IEEE VIS 2025).
      </>
    ),
  },
]

export const News = () => {
  return (
    <div className="news">
      <SectionHeading title="News" />
      <table className="news-table">
        <tbody>
          {newsItems.map((item, index) => (
            <tr key={index} className="news-row">
              <td className="news-date">{item.date}</td>
              <td className="news-text">{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
