// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
import MainForm from './components/mainform';
import "./styles/style.scss";

export default function App() {
  return <MainForm />
}

render(<App />, document.getElementById("root"));
