
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import About from "./pages/About";
import Teams from "./pages/Teams";
import EdgeFund from "./pages/EdgeFund";
import EdgeConnect from "./pages/EdgeConnect";
import EdgeCare from "./pages/EdgeCare";
import Institutional from "./pages/Institutional";
import Careers from "./pages/Careers";
import EdgeDoc from "./pages/EdgeDoc";
import ContactPage from "./pages/Contact";





function App(): JSX.Element {
 

  return (
    <>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/edge-fund" element={<EdgeFund />} />
        <Route path="/edge-connect" element={<EdgeConnect />} />
        <Route path="/edge-cares" element={<EdgeCare />} />
        <Route path="/institutional" element={<Institutional />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/documents" element={<EdgeDoc />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
