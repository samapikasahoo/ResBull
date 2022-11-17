
import React from 'react';
import logo from '../logo (1).png';
import { Link, Outlet } from "react-router-dom";




function Header() {
  return (
    <div class="container-fluid">
      <nav class=" navbar navbar-expand-lg 
        navbar-light bg-light fixed-top py-lg-0 ">
  
        <a class="navbar-brand" href="#"></a>
      <img src={logo} className="App-logo" alt="logo" />
      <ul class="nav justify-content-end">
  <li class="nav-item">
  <a class="nav-link active" href="#">
  <Link to=" ">
     ResumeTemplates
       
</Link>
</a>
  </li>
 
 
  <li class="nav-item">
  <a class="nav-link active" href="#">
  <Link to=" ">
   My Resumes
       
</Link>
</a>
  </li>
  <li class="nav-item">
  <a class="nav-link active" href="#">
  <Link to="contact">
     About Us
       
</Link>
</a>
  </li>
 
</ul>
 
     
    
</nav>


    
    
  
  </div>

  );
}

export default Header;