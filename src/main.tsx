import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let fps = 0;
setInterval(() => {
  console.log({ fps });
  fps = 0;
}, 1000);
const loop = () => {
  fps++;
  requestAnimationFrame(loop);
};
loop();
