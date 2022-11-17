import React, { useState } from "react";
import Header from "./components/Header";
import ResumeBuilder from "./components/ResumeBuilder";
import Home from "./components/Home";
import UseTemplate from "./components/UseTemplate";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import "./App.css";


 
 
function App() {
 
  return (
 
    <div className="App">
      <Header />
     
      <Routes>
       <Route path="/" element={<Test/>}>
       <Route index element={<Home/>} />
     
         <Route path="usetemplate" element={<UseTemplate/>} />
         <Route path="contact" element={<Contact />} />
       
       
       </Route>
     </Routes>
     
     
    </div>
  );
}
 
export default App;