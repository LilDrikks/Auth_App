import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAptos } from "../../redux/reducers/aptos";
import { fetchSignIn } from "../../redux/reducers/signIn";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, seteError] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      seteError("Preencha todos os campos");
      return;
    }
    dispatch(fetchSignIn(email, senha));
    navigate("/home");
  };

  return (
    <C.Container>
      <C.Label>Login</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), seteError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), seteError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text={"Entrar"} onClick={handleLogin} />
        <C.LabelSignUp>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup"> Registre-se</Link>
          </C.Strong>
        </C.LabelSignUp>
      </C.Content>
    </C.Container>
  );
}

export default SignIn;
