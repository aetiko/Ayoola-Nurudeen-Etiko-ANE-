
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/Navbar';
// import Home from "./pages/Home";
// import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home /> */}
      {/* <Projects /> */}
    </div>
  );
}

export default App;

//<div>
    //   <BrowserRouter>
    //     <Routes>
    //     <Route path="/" element={<Home />} />
    //       {/* <Route path="/stakeholders" element={<Stakeholders />} />
    //       <Route path="/home" element={<Projects />} /> */}
    //       {/* <Route path="/new-meetup" element={<NewMeetupPage />} /> */}
    //       {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
    //     </Routes>
    //   </BrowserRouter>
    // </div>