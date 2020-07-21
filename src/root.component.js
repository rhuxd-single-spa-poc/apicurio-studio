import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import App from "./../packages/studio/src/app/app.tsx";

export default function Root(props) {
  return (
    <BrowserRouter>
      {/* <Route path="/apicuriostudio" component={App} /> */}
      <React.Component>
        <div>Apicurio</div>
      </React.Component>
    </BrowserRouter>
  );
}
