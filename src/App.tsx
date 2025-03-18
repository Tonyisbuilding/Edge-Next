
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import About from "./pages/About";
import Teams from "./pages/Teams";
import EdgeFund from "./pages/EdgeFund";
import EdgeConnect from "./pages/EdgeConnect";
import EdgeCare from "./pages/EdgeCare";





function App(): JSX.Element {
 

  return (
    <>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/fund" element={<EdgeFund />} />
        <Route path="/connect" element={<EdgeConnect />} />
        <Route path="/care" element={<EdgeCare />} />
      </Routes>
    </>
  );
}

export default App;
