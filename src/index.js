import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "primereact/resources/themes/saga-blue/theme.css"; // or any other theme
import "primereact/resources/primereact.min.css"; // core styles
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // utility classes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
