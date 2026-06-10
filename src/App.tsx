import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Calculator />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
