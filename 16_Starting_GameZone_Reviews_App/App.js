import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
// import Home from './screens/Home';

export default function App() {
  return (
    <>
      <Home />
      <About />
    </>
  );
}
