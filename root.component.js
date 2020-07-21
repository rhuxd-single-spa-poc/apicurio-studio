import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./../apicurio-studio/packages/studio/src/app/app";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/apicuriostudio" component={App} />
    </BrowserRouter>
  )};