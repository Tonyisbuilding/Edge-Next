import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import About from "./pages/About";
import Teams from "./pages/Teams";
import EdgeFund from "./pages/EdgeFund";
import EdgeConnect from "./pages/EdgeConnect";
import EdgeCapitalCSR from "./pages/EdgeCapitalCSR";
import Institutional from "./pages/Institutional";
import Careers from "./pages/Careers";
import EdgeDoc from "./pages/EdgeDoc";
import ContactPage from "./pages/Contact";
import EdgeHorizon from "./pages/EdgeHorizon";
import EdgeCare from "./pages/EdgeCare";
import ScrollToTop from "./common/ScrollToTop";
import ParticipateForm from "./pages/ParticipateForm/ParticipateForm";
import RequestInfo from "./pages/RequestInfo";
import ChangeLanguageContext from "./context/ChangeLanguage";
import { useState } from "react";




function App(): JSX.Element {

  const [language, setLanguage] = useState<'en' | 'nl'>('en');
  return (
    <>
    <ChangeLanguageContext.Provider
    value={{
      language,
      setLanguage,
    }}
    > 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/edge-fund" element={<EdgeFund />} />
        <Route path="/edge-connect" element={<EdgeConnect />} />
        <Route path="/edge-capitla-csr" element={<EdgeCapitalCSR />} />
        <Route path="/institutional" element={<Institutional />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/documents" element={<EdgeDoc />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/edge-foundation" element={<EdgeHorizon />} />
        <Route path="/edge-cares" element={<EdgeCare />} />
        <Route path="/participate" element={<ParticipateForm />} />
        <Route path="/requestinfo" element={<RequestInfo />} />
      </Routes>
    </ChangeLanguageContext.Provider>
    </>
  );
}

export default App;
