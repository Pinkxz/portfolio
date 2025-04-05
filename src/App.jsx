import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <title>Pinkxz</title>
      <link rel="icon" type="image/png" sizes="32x32" href="./assets/icone.png" />
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
