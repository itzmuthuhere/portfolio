import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
