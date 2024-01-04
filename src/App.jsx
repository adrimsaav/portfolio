import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import NavBar from './components/NavBar/NavBar';
import About from './components/NavBar/About/About';
import Projects from './components/NavBar/Projects/Projects';
import Contact from './components/NavBar/Contact/Contact';

export default function App() {
  return (
      <div className="App">
        <NavBar />
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </div>
  );
}