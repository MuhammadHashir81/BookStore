import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    
    const initialAuthUser = localStorage.getItem("users");
    const [authUser, setAuthUser] = useState(
      initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );
    
    return (
        <MyContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
