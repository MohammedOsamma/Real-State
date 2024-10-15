import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/Get Started/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
