import "./App.css";
import Header from "./Layout/Header/Header";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Roadmap from "./Pages/Roadmap/Roadmap";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Roadmap />
    </div>
  );
}

export default App;
