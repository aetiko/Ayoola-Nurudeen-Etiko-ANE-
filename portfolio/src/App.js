// import Preloader from "./components/Pre";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "./components/Navbar";
// import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect } from "react";
// import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./style.css";
import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
import AnimatedCursor from "./hooks/AnimatedCursor";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/Navbar";
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
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <NavBar />
        {/* <AppRoutes /> */}
      </ScrollToTop>
    </Router>
  );
}

export default App;
