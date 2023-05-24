import React from 'react'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <div className='container m-5'><form>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <button className='mt-3' type="submit" className="btn btn-primary">Submit</button>
    <Link className="btn btn-primary m-3" to="/Signup">Create User</Link>
     
  </form></div>
  )
}
