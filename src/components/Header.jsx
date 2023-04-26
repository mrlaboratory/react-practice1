import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <NavLink to='/' className="btn btn-ghost normal-case text-xl">Website</NavLink>
            </div>
            
            <ul className='flex gap-2 mr-3 menu menu-horizontal'>
               <li> <NavLink className='rounded-lg' to='/'>Home</NavLink></li>
               <li> <NavLink className='rounded-lg' to='/about '>About</NavLink></li>
               <li> <NavLink className='rounded-lg' to='/contact '>Contact</NavLink></li>
               <li> <NavLink className='rounded-lg' to='/signup '>SignUp</NavLink></li>
               <li> <NavLink className='rounded-lg' to='/signin '>Signin</NavLink></li>
               <li> <NavLink className='rounded-lg' to='/dashboard '>Dashboard</NavLink></li>

            </ul>
            <div className="flex-none gap-2">
              
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;