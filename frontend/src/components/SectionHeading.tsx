import '../styles/SectionHeading.css'

interface SectionHeadingProps {
  title: string
  note?: string
}

export const SectionHeading = ({ title, note }: SectionHeadingProps) => (
  <header className="section-heading">
    <h2 className="section-heading-title">{title}</h2>
    {note && <span className="section-heading-note">{note}</span>}
  </header>
)
