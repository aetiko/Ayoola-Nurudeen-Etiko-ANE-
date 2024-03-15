import Preloader from './components/Pre'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect} from 'react';
// import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
// import Projects from "./pages/projects";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Home /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>

    <About />

    </>
    
  

  );
}

export default App;
