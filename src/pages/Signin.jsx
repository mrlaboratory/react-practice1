import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Signin = () => {
    const [error,setError] = useState()
  const [success,setSuccess] = useState('')

const signInUser = (e) => {
  e.preventDefault()
  const form = e.target 
  const name = form.name.value 
  const email = form.email.value 
  console.log(name,email)

}
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
    <div className='text-center'>
<h2 className='text-xl font-bold'> Please Login</h2>
  </div>
      <form onSubmit={signInUser} className="card-body w-96">
 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input required type="text" name="email" placeholder="Your email " className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input required type="text" name="password" placeholder="Your password" className="input input-bordered" />
          <label className="label">
            {
              error ?  <h2 className='text-red-500 font-bold'>{error}</h2> : ''
            }
           
          </label>
          <label className="label">
            {
              success ?  <h2 className='text-green-500 font-bold'>{success}</h2> : ''
            }
           
          </label>
          <label className="label">
            <Link to="" className="label-text-alt link link-hover">Forgot password?</Link> or 
            <Link to="/signup" className="label-text-alt link link-hover">Create new Account . </Link>
          </label>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Signin;