import '../styles/About.css'

export const About = () => {
  const keywords = ['LoRA', 'Grad-CAM', 'VQA', 'Diffusers', 'VLMs', 'Explainable AI']

  return (
    <div className="about">
      <h2 className="about-header">About Me</h2>
      <p className="about-text">
        I am a Computer Science undergraduate at the University of Waterloo, passionate about advancing the frontiers of 
        vision-language models and generative AI. My research focuses on developing explainable AI systems and 
        innovative approaches to model interpretability, with a particular emphasis on making AI more accessible 
        and understandable.
      </p>
      <div className="keywords">
        {keywords.map((keyword) => (
          <span key={keyword} className="keyword">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  )
} 