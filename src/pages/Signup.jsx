import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Signup = () => {
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')

const siginUpUser = (e) => {
  e.preventDefault()
  const form = e.target 
  const name = form.name.value 
  const email = form.email.value 
  const password = form.password.value 
  console.log(name,email,password)

}
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
    <div className='text-center'>
<h2 className='text-xl font-bold'> Create new Accont</h2>
  </div>
      <form onSubmit={siginUpUser} className="card-body w-96">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input required type="text" name='name' placeholder="Your full name " className="input input-bordered" />
        </div>
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
            <Link to="/signin" className="label-text-alt link link-hover">You have account ? </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create Account</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Signup;