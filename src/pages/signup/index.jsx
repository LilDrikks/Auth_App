import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { signUpPost } from "../../requests/axios";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, seteError] = useState("");

  const handleSignup = async () => {
    if (!email || !emailConf || !senha) {
      seteError("Preencha todos os campos");
      return;
    } else if (email != emailConf) {
      seteError("Os E-mails não são iguais");
      return;
    }

    let resUser = await signUpPost(email, senha);

    if (resUser.true) {
      alert(resUser.message);
      navigate("/");
      return;
    }
    seteError(resUser);
  };

  return (
    <C.Container>
      <C.Label>Registre-se</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), seteError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), seteError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), seteError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text={"Registrar"} onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/"> Entrar</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
}

export default SignUp;
