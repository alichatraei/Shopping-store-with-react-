import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>لطفا چند لحظه صبر کنید</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
