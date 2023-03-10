import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
function App() {
  

  return (
    <div className="App">
      <>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/skills" element={<Skills/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App
