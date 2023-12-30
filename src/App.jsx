import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />      
    </div>
  );
}

