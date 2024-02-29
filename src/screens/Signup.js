import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const base_URL = require("../services/helper.js");

export default function () {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const navigate = useNavigate();
  const handleChange = async (e) => {
    e.preventDefault();
    const respones = await fetch(`${base_URL}/api/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });
    const json = await respones.json();
    console.log(json);
    if (!json.sucess) {
      alert("please try with valid credentials");
    }
    if (json.sucess) {
      alert("Your account has been created successfully");
      navigate("/");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="container m-5">
      <form onSubmit={handleChange}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputname"
            name="name"
            value={credentials.name}
            onChange={onChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Location</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputlocation"
            name="location"
            value={credentials.location}
            onChange={onChange}
            placeholder="Location"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-primary m-3" to="/Login">
          Already User
        </Link>
      </form>
    </div>
  );
}
