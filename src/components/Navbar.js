import React from 'react'
import {Link} from "react-router-dom";

 
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success text-white">
  <div className="container-fluid" >
    <Link className="navbar-brand" to={"/"}>GO FOOD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
          {/* <Link className="nav-link " to="/Signup">Signup</Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Signup">Signup</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
