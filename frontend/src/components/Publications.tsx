import '../styles/Publications.css'

interface Publication {
  title: string
  venue: string
  link: string
  codeLink?: string
  authors?: string
}

export const Publications = () => {
  const publications: Publication[] = [
    {
      title: 'Probing the Visualization Literacy of Vision Language Models: the Good, the Bad, and the Ugly',
      venue: 'IEEE TVCG 2025',
      link: 'https://ieeexplore.ieee.org/document/11261397',
      codeLink: 'https://github.com/AustingDong/Probing-Vis-Literacy-of-VLMs',
      authors: 'Lianghan Dong, Anamaria Crisan'
    },
    {
      title: 'Enhancing Image Segmentation for ICH through Transfer Learning from Stroke MRI to ICH CT',
      venue: 'ICIAAI',
      link: 'https://www.atlantis-press.com/proceedings/iciaai-24/126004119',
      authors: 'Lianghan Dong'
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
              {pub.authors && (
                <p className="publication-authors">
                  {pub.authors.includes('Lianghan Dong') ? (
                    <>
                      {pub.authors.split('Lianghan Dong')[0]}
                      <strong className="author-self">Lianghan Dong</strong>
                      {pub.authors.split('Lianghan Dong')[1]}
                    </>
                  ) : (
                    pub.authors
                  )}
                </p>
              )}
              <p className="publication-venue">{pub.venue}</p>
              <div className="publication-links">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  <svg className="publication-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Paper
                </a>
                {pub.codeLink && (
                  <a
                    href={pub.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                  >
                    <svg className="publication-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 