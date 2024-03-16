import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "./hooks/WithRouter"
import  Home  from "./components/Home/Home";
import  Portfolio  from "./components/Portfolio/Portfolio";
// import { ContactUs } from "../pages/contact";
import { About } from "./components/About/About";
// import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      {/* <Socialicons /> */}
    </div>
  );
}

export default AppRoutes;