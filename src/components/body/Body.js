import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Routes, Redirect } from "react-router-dom";


const Body = () => {
    return (
        <div>
            <Routes path="/" exact component={<Home/>}/>
            <Routes path="/menu" exact component={<Menu/>}/>
            <Routes path="/contact" exact component={<Contact/>}/>
            <Routes path="/about" exact component={<About/>}/>
        </div>
    );
}
export default Body;