import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
