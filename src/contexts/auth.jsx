import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  
  useEffect(() => {

    const userToken = localStorage.getItem("user_token");
    if(userToken){
      const userLog = JSON.parse(userToken)
      if(userLog.token){
        setUser({email: userLog.email, token: userLog.token})
      }
    }

  }, []);

  const signout = () => {
    setUser(null)
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{setUser, signed: user ? true : false , signout }}
    >
    {children}
    </AuthContext.Provider>
  );
};