import '../styles/News.css'

interface NewsItem {
  title: string
  date: string
  summary: string
  link?: string
}

const newsItems: NewsItem[] = [
  
  {
    title: 'CHI 2025 submission in progress',
    date: 'Sep 2025',
    summary: 'Preparing CHI 2025 submission on personalized explainability for data visualizations.',
    link: '#'
  },
  {
    title: 'IEEE VIS 2025 paper accepted',
    date: 'July 2025',
    summary: 'AG-CAM work on chart-based VQA accepted to IEEE VIS 2025 with new evaluation results.',
    link: 'https://www.linkedin.com/posts/amcrisan_probing-the-visualization-literacy-of-vision-activity-7351253409389281281-VRdD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECnIcABKjbiPShjBA4GoOoxhKSYC1Jx7U4'
  }
]

export const News = () => {
  return (
    <div className="news">
      <h2 className="news-header">News</h2>
      <ul className="news-list">
        {newsItems.map((item, index) => (
          <li key={index} className="news-item">
            <div className="news-line">
              <span className="news-date">{item.date}</span>
              <span className="news-title">{item.title}</span>
            </div>
            <p className="news-summary">{item.summary}</p>
            {item.link && (
              <a className="news-link" href={item.link} target="_blank" rel="noreferrer">
                Read more →
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

