import React from "react";
import './App.css';
import MainComponents from './components/MainComponents';
import { BrowserRouter } from "react-router-dom";
import myStore from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
        <Provider store={myStore}>
            <BrowserRouter>
                <MainComponents/>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
