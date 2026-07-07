import "./App.css";

import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Reasons from "./components/Reasons";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="conatiner">
      <Navbar />

      <div className="mid">
        <Trending />
        <Reasons />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}

export default App;