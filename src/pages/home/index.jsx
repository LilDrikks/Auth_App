import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import Body from "../../components/Body";
import Modal from "../../components/modalApto";
import { useSelector } from "react-redux";

function Home() {
  const {modal} = useSelector(state => state)
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <C.Container>
        <C.Header>
          <C.Title>Home</C.Title>
          <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
        </C.Header>
        <Body />
        {modal ? <Modal  /> : null}
      </C.Container>
      
    </>
  );
}

export default Home;
