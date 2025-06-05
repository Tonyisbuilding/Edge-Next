// import React from "react";
// import ReactDOM from "react-dom/client";
// // import App from './App.tsx'
// import App from "./App";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChangeLanguageProvider } from "./context/ChangeLanguage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChangeLanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChangeLanguageProvider>
  </React.StrictMode>
);
