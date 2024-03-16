import React, { useEffect } from "react";
// import Preloader from "./components/Pre";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "./hooks/WithRouter";
import AppRoutes from "./routes";
import Headermain from "./components/NavBar/Navbar";
import AnimatedCursor from "./hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Preloader load={load} /> */}
      {/* <div className="cursor__dot" id={load ? "no-scroll" : "scroll"}> */}
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
      <Headermain />
      <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
