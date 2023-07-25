import React from 'react'
import {
  Link
} from "react-router-dom";
const Navbar = ()=>{

  
    return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar sticky-top bg-dark">
        <h1 className="navbar-brand" >Nayi-News</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link mx-2" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mx-2" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mx-2" to="/science">Science</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mx-2" to="/sports">Sports</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mx-2" to="/technology">Technology</Link>
            </li>  
          </ul>  
        </div>
    </nav> 
    )
  
}

export default Navbar 