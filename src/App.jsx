import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
