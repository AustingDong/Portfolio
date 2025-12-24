import { Header } from './components/Header'
import { About } from './components/About'
import { News } from './components/News'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { WorkExperience } from './components/WorkExperience'
import { Footer } from './components/Footer'
import { ThreeBackground } from './components/ThreeBackground'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <ThreeBackground />
      <Header />
      <main className="main">
        <section id="about" className="section">
          <About />
        </section>
        <section id="news" className="section">
          <News />
        </section>
        <section id="publications" className="section">
          <Publications />
        </section>
        <section id="work" className="section">
          <WorkExperience />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
