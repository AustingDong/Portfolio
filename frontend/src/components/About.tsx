import '../styles/About.css'

export const About = () => {
  const keywords = [
    'Vision-Language Models (VLMs)',
    'Explainable AI',
    'PyTorch',
    'LoRA',
    'Diffusers',
    'FastAPI',
    'React',
    'LLMs',
    'Chart QA',
  ];
  

  return (
    <div className="about">
      <div className="about-content">
        <h2 className="about-header">About Me</h2>
        <p className="about-text">
        I'm a Computer Science undergraduate at the University of Waterloo with a hybrid background in AI research and full-stack engineering. 
        I work at the intersection of multimodal explainability and deployable AI—developing techniques like AG-CAM for interpreting vision-language models 
        (IEEE VIS under review), while also building scalable systems during internships at Microsoft and YSAIT. My stack spans PyTorch, LoRA, SDXL diffusion models, FastAPI, and React. 
        I’m driven to build AI that not only works—but explains itself.
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
          <img src="images/head.png" alt="Lianghan (Austing) Dong" />
        </div>
      </div>
    </div>
  )
} 