import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './pages/Authprovider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }else{
       return <Navigate to='/signin' state={{from:location}} replace ></Navigate>
    }
 
};

export default PrivateRoute;