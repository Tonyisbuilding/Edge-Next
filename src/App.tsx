
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";




function App(): JSX.Element {
 

  return (
    <>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/repleetprime" element={<RepleetPrime />} /> */}
      </Routes>
    </>
  );
}

export default App;
