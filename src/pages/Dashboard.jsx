import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';



const Dashboard = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            
            <h2>this is dashboard page </h2>
            <h2>user name : <strong>{name}</strong></h2>
        </div>
    );
};

export default Dashboard;