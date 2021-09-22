import './App.css';
import { AboutMe } from './pages/AboutMe';
import { Projects } from './pages/Projects';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
