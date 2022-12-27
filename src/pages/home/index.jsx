import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import Table from "../../components/Table";

function Home() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <C.Container>
        <C.Header>
          <C.Title>Home</C.Title>
          <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
        </C.Header>
        <Table></Table>
      </C.Container>
      
    </>
  );
}

export default Home;
