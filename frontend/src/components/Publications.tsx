import { useState } from 'react'
import { SectionHeading } from './SectionHeading'
import '../styles/Publications.css'

interface Publication {
  title: string
  venue: string
  year: string
  status?: string
  description: string
  authors: string
  thumbnail: string
  link?: string
  codeLink?: string
}

const SELF = 'Lianghan Dong'
const BASE = import.meta.env.BASE_URL

const publications: Publication[] = [
  {
    title: 'Probing the Visualization Literacy of Vision Language Models: the Good, the Bad, and the Ugly',
    venue: 'IEEE TVCG (Special Issue for IEEE VIS 2025)',
    year: '2025',
    description:
      'Introduces AG-CAM, an attention-guided class-activation-map adaptation for early-fusion models, to visualize and interpret how VLMs reason over chart-related questions. Evaluated across six open- and closed-source VLMs.',
    authors: 'Lianghan Dong, Anamaria Crisan',
    thumbnail: `${BASE}images/papers/agcam.png`,
    link: 'https://ieeexplore.ieee.org/document/11261397',
    codeLink: 'https://github.com/AustingDong/Probing-Vis-Literacy-of-VLMs',
  },
  {
    title: 'Enhancing Image Segmentation for ICH through Transfer Learning from Stroke MRI to ICH CT',
    venue: 'ICIAAI 2024',
    year: '2024',
    description:
      'Transfer learning from stroke MRI to intracranial hemorrhage CT scans to improve medical image segmentation under limited labeled data.',
    authors: 'Lianghan Dong',
    thumbnail: `${BASE}images/papers/ich-seg.png`,
    link: 'https://www.atlantis-press.com/proceedings/iciaai-24/126004119',
  },
]

const renderAuthors = (authors: string) => {
  if (!authors.includes(SELF)) return authors
  const [before, after] = authors.split(SELF)
  return (
    <>
      {before}
      <strong className="author-self">{SELF}</strong>
      {after}
    </>
  )
}

const PaperThumb = ({ src, title }: { src: string; title: string }) => {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return <div className="publication-thumb publication-thumb-placeholder">Figure</div>
  }
  return (
    <img
      className="publication-thumb"
      src={src}
      alt={`Teaser figure for ${title}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export const Publications = () => {
  return (
    <div className="publications">
      <SectionHeading title="Publications" />
      <div className="publications-list">
        {publications.map((pub) => (
          <article key={pub.title} className="publication-entry">
            <div className="publication-thumb-col">
              <PaperThumb src={pub.thumbnail} title={pub.title} />
            </div>
            <div className="publication-content">
              <h3 className="publication-title">
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              <p className="publication-authors">{renderAuthors(pub.authors)}</p>
              <p className="publication-venue">
                <em>{pub.venue}</em>
                {pub.status && <span className="publication-status"> · {pub.status}</span>}
              </p>
              <p className="publication-description">{pub.description}</p>
              <div className="publication-links">
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                  >
                    PDF
                  </a>
                )}
                {pub.codeLink && (
                  <a
                    href={pub.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
