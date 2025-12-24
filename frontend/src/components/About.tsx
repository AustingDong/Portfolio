import "../styles/About.css";

export const About = () => {
  const keywords = [
    "Multimodal Models",
    "Natural Language Processing",
    "Machine Learning",
  ];

  return (
    <div className="about">
      <h2 className="about-header">About Me</h2>
      <div className="about-main">
        <div className="about-photo">
          <div className="photo-container">
            <img src="images/head.png" alt="Lianghan (Austing) Dong" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-identity">
            <h3 className="about-name">Lianghan (Austing) Dong</h3>
            <p className="about-school">
              Bachelor of Computer Science (Co-op), University of Waterloo
            </p>
            <p className="about-email">austingdong@gmail.com</p>
            <div className="about-links">
              <a
                href="https://github.com/AustingDong"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://scholar.google.ca/citations?user=6ksXb7cAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
              <a
                href="https://www.linkedin.com/in/lianghan-dong-000319263/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-text">
        I am a Computer Science undergraduate at the University of Waterloo. My
        research focuses on vision-language models and machine learning, with a
        particular interest in developing transparent and interactive training
        methods that encourage strong high-level reasoning in AI systems. I
        enjoy building practical research tools and demos that explore new ways
        for humans to guide and collaborate with AI models during training and
        reasoning.
      </div>
      <div className="keywords">
        {keywords.map((keyword) => (
          <span key={keyword} className="keyword">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};
