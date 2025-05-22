import '../styles/Publications.css'

interface Publication {
  title: string
  venue: string
  link: string
}

export const Publications = () => {
  const publications: Publication[] = [
    {
      title: 'Probing the Visualization Literacy of Vision Language Models: the Good, the Bad, and the Ugly',
      venue: 'IEEE VIS (Under Review)',
      link: 'https://arxiv.org/abs/2504.05445'
    },
    {
      title: 'Enhancing Image Segmentation for ICH through Transfer Learning from Stroke MRI to ICH CT',
      venue: 'ICIAAI',
      link: 'https://www.atlantis-press.com/proceedings/iciaai-24/126004119'
    }
  ]

  return (
    <div className="publications">
      <h2 className="publications-header">Publications</h2>
      <div className="publications-list">
        {publications.map((pub) => (
          <div key={pub.title} className="publication-card">
            <div className="publication-content">
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-venue">{pub.venue}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
              >
                <svg className="publication-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Publication
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 