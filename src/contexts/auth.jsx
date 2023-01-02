import { createContext, useEffect, useState } from "react";
import { getAptos } from "../requests/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false)
  const [moradores, setMoradores] = useState(null)
  
  const handleGetAptos = async () => {
    const dados = await getAptos()
    setData(dados.aptos)
  }

  useEffect(() => {
    handleGetAptos()
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
      value={{setUser, signed: user ? true : false , signout, data,setModal, modal, setMoradores, moradores }}
    >
    {children}
    </AuthContext.Provider>
  );
};