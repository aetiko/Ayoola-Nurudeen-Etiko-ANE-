import React, { useEffect, useState } from "react";
// React bootstrap component for the NavBar
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setactiveLink] = useState("home");

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
    <Navbar>
      
    </Navbar>
    </>
  );
};
export default NavBar;


// <nav className="navbar">
//       <div className="container">
//         <div className="logo">
//           <Brand />
//         </div>
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           <Hamburger />
//         </div>
//         <div className={`nav-elements  ${showNavbar && 'active'}`}>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/monuments">Monuments</NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects">Projects</NavLink>
//             </li>
//             <li>
//               <NavLink to="/hobbies">Hobbies</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>