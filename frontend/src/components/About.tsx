import '../styles/About.css'

export const About = () => {
  const keywords = ['LoRA', 'Grad-CAM', 'VQA', 'Diffusers', 'VLMs', 'Explainable AI']

  return (
    <div className="about">
      <div className="about-content">
        <h2 className="about-header">About Me</h2>
        <p className="about-text">
        I'm a Computer Science undergraduate at the University of Waterloo with a hybrid background in AI research and real-world engineering.  
        My current research explores explainability in multimodal systems—I've developed AG-CAM, an attention-guided CAM technique to interpret early-fusion vision-language models, with a paper under review at IEEE VIS.  
        In parallel, I’ve worked as a Data Analyst Intern at Microsoft, building classification pipelines for anomaly detection, and as a Software Developer at YSAIT, where I deployed scalable AI-driven platforms using Flask, Java, and Docker.  
        My technical stack spans from PyTorch, LoRA fine-tuning, and SDXL diffusion models to full-stack systems with FastAPI and React.  
        I'm passionate about bridging foundational research with deployable systems—building AI that not only performs, but explains itself.
        </p>
        <div className="keywords">
          {keywords.map((keyword) => (
            <span key={keyword} className="keyword">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="about-photo">
        <div className="photo-container">
          <img src="/profile.jpg" alt="Lianghan (Austing) Dong" />
        </div>
      </div>
    </div>
  )
} 