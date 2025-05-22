import '../styles/ResumeDownload.css'

export const ResumeDownload = () => {
  return (
    <div className="resume">
      <h2 className="resume-header">Resume</h2>
      <div>
        <a
          href="/resume.pdf"
          download
          className="resume-button"
        >
          <svg className="resume-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  )
} 