import React from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
const base_URL =  require( '../services/helper.js');
 
export const Login = () => {

  
  const [credentials, setcredentials] = useState({  email:'', password:''  });
  const navigate = useNavigate();
  const handleChange = async (e) =>{
    e.preventDefault();
    const respones = await fetch(`${base_URL}/api/loginuser`,{
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({  email: credentials.email, password:credentials.password })
    }) 
    const json = await respones.json()
    if(!json.sucess){
      alert("Enter Valid credentials");
    } 
    if(json.sucess){
      localStorage.setItem("authToken", json.authoToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    } 
    window.location.reload()
  }
  const onChange = (event)=>{
      setcredentials({...credentials, [event.target.name]:event.target.value} )
  }
  return (
    <div className='container m-5'><form onSubmit={handleChange}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} placeholder="Password"/>
    </div>
     
    <button type="submit" className="btn btn-primary">Submit</button>
    <Link className="btn btn-primary m-3" to="/Signup">Create User</Link>
  </form></div>
  )
}
