import { useEffect } from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { News } from './components/News'
import { Publications } from './components/Publications'
import { WorkExperience } from './components/WorkExperience'
import { Awards } from './components/Awards'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import './styles/App.css'

function App() {
  useEffect(() => {
    const revealed = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    )
    revealed.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section id="about" className="section">
          <About />
        </section>
        <section id="news" className="section" data-reveal>
          <News />
        </section>
        <section id="publications" className="section" data-reveal>
          <Publications />
        </section>
        <section id="experience" className="section" data-reveal>
          <WorkExperience />
        </section>
        <section id="awards" className="section" data-reveal>
          <Awards />
        </section>
        <section id="projects" className="section" data-reveal>
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
