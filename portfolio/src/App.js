import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
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