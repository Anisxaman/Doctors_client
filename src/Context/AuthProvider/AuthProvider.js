import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const allContexts=useFirebase();
    return (
        <authContext.Provider value={allContexts}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;