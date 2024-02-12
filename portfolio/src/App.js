
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Monuments from "./pages/monuments";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/monuments" element={<Monuments />} /> 
        </Routes>
      </BrowserRouter>
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