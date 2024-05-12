import "./App.scss";
import "./MediaQueries.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeaderPanel from "./components/HeaderPanel";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <HeaderPanel />
      <MobileNav />
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
