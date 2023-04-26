import React, { createContext } from 'react';

export const AuthContext = createContext('')

const Authprovider = ({ children }) => {
    const info = {
        name : "md mijanur rahaman",
    }
    return (
        <AuthContext.Provider value={info} >
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;