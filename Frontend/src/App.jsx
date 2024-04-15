import "./App.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Hero from "./Pages/Front/Hero";
import About from "./Pages/Front/About";
import Footer from "./components/Footer";
import Teachers from "./Pages/Front/Teachers";
import Courses from "./Pages/Front/Courses";

function App() {
  return (
    <div className="dark:bg-gray-700">
      <Header />
      <Hero />
      <Courses />
      <Teachers />
      <About />
      <Footer />
    </div>
  );
}

export default App;
