import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
