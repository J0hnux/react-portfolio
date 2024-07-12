import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeaderPanel from "./components/HeaderPanel";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <HeaderPanel />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
