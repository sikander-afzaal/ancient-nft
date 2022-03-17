import "./App.css";
import Header from "./Layout/Header/Header";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Roadmap from "./Pages/Roadmap/Roadmap";
import Collection from "./Pages/Collection/Collection";
import Team from "./Pages/Team/Team";
import Faq from "./Pages/Faq/Faq";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Roadmap />
      <Collection />
      <Team />
      <Faq />
    </div>
  );
}

export default App;
