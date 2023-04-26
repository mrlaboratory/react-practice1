import React, { useContext } from 'react';
import { AuthContext } from '../pages/Authprovider';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRute = ({ children }) => {
   const location = useLocation
   const { user } = useContext(AuthContext)
   console.log(user)

   if (user) {
      return children

   } else {
      return <Navigate to='/signin'></Navigate>
   }
};

export default PrivateRute;