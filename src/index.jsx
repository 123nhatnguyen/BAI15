//b1
import React from "react";
import App from "./App";
import  ReactDOM  from "react-dom";
import { Provider } from "./context/book";

//B2
const el =document.getElementById("root");
//b3
const root = ReactDOM.createRoot(el);
//b4

//b5
root.render(<Provider><App/></Provider>);