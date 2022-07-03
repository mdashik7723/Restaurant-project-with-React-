import React from "react";
import './App.css';
import MainComponents from './components/MainComponents';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MainComponents/>
        </BrowserRouter>
    </div>
  );
}

export default App;
