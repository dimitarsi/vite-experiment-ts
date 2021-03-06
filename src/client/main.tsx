import React from "react";
import ReactDOM from "react-dom";
import { App } from "../app/App";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";

const root = document.getElementById("root");

const app = (
  <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providers>
);

if (root?.innerHTML) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/sw.js").then(
//       (registration) => {
//         console.log("service worker registered", registration.scope);
//       },
//       () => {
//         //ups, something went wrong
//       }
//     );
//   });
// }
