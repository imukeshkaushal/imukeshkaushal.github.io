import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Education from './Components/Education';
import Home from './Components/Home';
import Techstack from './Components/Techstack';
import Tools from './Components/Tools';
import Github from './Components/Github';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Awards from './Components/Awards';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Awards/>
      <Techstack/>
      <Tools/>
      <Github/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
