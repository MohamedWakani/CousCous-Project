import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./Projet/About";
import Contact from "./Projet/Contact";
import FormClass from "./Projet/FormClass";
import Home from "./Projet/Home";
import Menu from "./Projet/Menu";



function App() {
  return (
    <div className="mt-5 container ">
      <Routes>
     <Route path="/" exact element={ <Home />} ></Route>
     <Route path="/menu" exact element={ <FormClass />} ></Route>
     <Route path="/about" exact element={ <About />} ></Route>
     <Route path="/menu2" exact element={ <Menu />} ></Route>
     <Route path="/contact" exact element={ <Contact />} ></Route>
     </Routes>
    </div>
  );
}

export default App;
