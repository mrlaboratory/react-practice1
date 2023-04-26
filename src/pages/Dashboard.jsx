import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';



const Dashboard = () => {
    const {name,user,signoutUser} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            
            <h2>this is dashboard page </h2>
            <h2>user name : <strong>{name}</strong></h2>
            {
                user ?  <h2>Email : <strong>{user.email}</strong></h2> : ''
            }

            <button onClick={signoutUser} className='btn'>SignOut</button>
           
        </div>
    );
};

export default Dashboard;