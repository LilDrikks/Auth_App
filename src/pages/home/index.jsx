import React from 'react';
import {useNavigate} from "react-router-dom";
import * as C from './styles';
import Button from "../../components/Button"
import useAuth from "../../hooks/useAuth"

function Home() {
  const {signout, dataUp} = useAuth();
  const navigate = useNavigate();
  console.log(dataUp);
  return (
   <C.Container>
    <C.Title>Home</C.Title>
    <Button Text="Sair" onClick={() => [signout(), navigate('/')]}/>
   </C.Container>
  )
};

export default Home;