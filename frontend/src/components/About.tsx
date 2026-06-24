import '../styles/About.css'

const CV_URL = `${import.meta.env.BASE_URL}files/Austing_Dong_CV.pdf`
const RESUME_URL = `${import.meta.env.BASE_URL}files/Austing_Dong_Resume.pdf`

const links = [
  { label: 'Google Scholar', href: 'https://scholar.google.ca/citations?user=6ksXb7cAAAAJ&hl=en' },
  { label: 'GitHub', href: 'https://github.com/AustingDong' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lianghan-dong-000319263/' },
  { label: 'Email', href: 'mailto:austingdong@gmail.com' },
  { label: 'CV', href: CV_URL },
  { label: 'Résumé', href: RESUME_URL },
]

const skills = [
  { label: 'Languages', items: 'Python · C · C++ · Java · R · SQL · JavaScript · TypeScript' },
  { label: 'AI / ML', items: 'PyTorch · TensorFlow · LangChain · vLLM · NumPy · Pandas · OpenCV' },
  { label: 'Frameworks', items: 'React + TypeScript · Vue · Spring Boot · FastAPI · Flask' },
]

export const About = () => {
  return (
    <div className="about">
      <div className="about-grid">
        <div className="about-intro">
          <h1 className="about-name">
            Austing <span className="about-name-last">Dong</span>
          </h1>
          <p className="about-affiliation">
            Lianghan Dong · B.CS (Co-op), University of Waterloo
          </p>
          <p className="about-text">
            I study machine learning and multimodal models, focusing on
            understanding and steering model behavior: attention-guided
            visualization of vision–language model reasoning (AG-CAM,
            published in IEEE TVCG), empirical analysis of model
            specialization — how the gap between few-shot prompting and
            fine-tuning scales with model size and pretraining — and
            interactive, human-in-the-loop training methods for
            vision–language models.
          </p>
          <p className="about-text">
            I enjoy building practical research tools and demos that explore
            new ways for humans to see, correct, and guide AI systems during
            training and inference. I am currently seeking PhD opportunities
            in machine learning, multimodal models, and human-centered AI.
          </p>
          <div className="about-links">
            {links.map((link, i) => (
              <span key={link.label}>
                {i > 0 && <span className="about-links-sep"> / </span>}
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>

        <figure className="about-figure">
          <img
            className="about-photo"
            src="images/head.png"
            alt="Portrait of Lianghan (Austing) Dong"
          />
          <figcaption className="about-contact">austingdong@gmail.com</figcaption>
        </figure>
      </div>

      <dl className="about-skills">
        {skills.map((row) => (
          <div key={row.label} className="about-skills-row">
            <dt className="meta-label">{row.label}</dt>
            <dd>{row.items}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
