import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { ResumeDownload } from './components/ResumeDownload'
import { Footer } from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="publications" className="section">
          <Publications />
        </section>
        <section id="resume" className="section">
          <ResumeDownload />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
