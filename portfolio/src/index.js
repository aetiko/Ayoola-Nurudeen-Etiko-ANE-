import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById("root")); //where App must rendered in real DOM?in root
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );


