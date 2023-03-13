import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Error from "./Error";
function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
