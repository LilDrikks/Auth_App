import React, { useEffect, useRef, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";
import * as D from "../ItensSideBar/styles";
import { x } from "react-icons-kit/feather/x";
import Icon from "react-icons-kit";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modal";
import { fetchAddNewMorador, fetchUpdate } from "../../redux/reducers/editMoradores";
import { useNavigate } from "react-router-dom";

const TabsDemo = () => {
  const dispatch = useDispatch();
  const { edit, signIn } = useSelector((state) => state);
  const token = signIn.meta.localStorage.value
  const { apto, bloco, nome, id, data } = edit;
  const [name, setName] = useState("");
  const [stateId, setStateId] = useState("");
  const [notificacao, setNotificacao] = useState("");
  
  //guarda um valor que não muda ao ser re-renderizado o componente
  const timeOutRef = useRef();
  const navigate = useNavigate();

  function handleClick({
    nome: name,
    apto: apto,
    bloco: bloco,
    id: stateId,
  }) {
    setNotificacao(true);

    clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      setNotificacao(false);
      navigate(0)
    }, 1000);

    
    if (id) {
      dispatch(
        fetchUpdate({
          nome: name,
          apto: apto,
          bloco: bloco,
          id: stateId,
          token: token
        })
      );
    } else {
      dispatch(fetchAddNewMorador({
        nome: name,
        apto: apto,
        bloco: bloco,
        token: token
      }))
    }
  }

  let nomeTrue = nome ? nome : ''
  useEffect(() => {
    setName(nomeTrue);
    setStateId(id);
  }, []);

  return (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" aria-label="Manage your account">
        <div className="TabsTrigger">
          <Tabs.Trigger value="tab1">
            {apto} {bloco}
          </Tabs.Trigger>
          <D.Item
            style={{ width: "32px", height: "32px" }}
            onClick={() => dispatch(closeModal())}
          >
            <Icon icon={x} size={20} style={{ color: "black" }} />
          </D.Item>
        </div>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="tab1">
        <p className="Text">{id ? 'Mude o nome do morador' : 'Insira o novo morador'}</p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Nome
          </label>
          <input
            className="Input"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </fieldset>
        <fieldset className="Fieldset">
          {id && <label className="Label" htmlFor="username">
            #ID
          </label>}
          {id && <input
            className="Input"
            id="id"
            value={stateId}
            onChange={({ target }) => setStateId(target.value)}
          />}
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button
            onClick={() => {

              handleClick({
                nome: name,
                apto: apto,
                bloco: bloco,
                id: stateId,
              });
            }}
            className="Button green"
          >
            {id ? 'Salvar mudança' : 'Adicionar Morador'}
          </button>
        </div>
        {notificacao && (
          <p className="notificacao">
            {data === "Request failed with status code 500"
              ? "Não foi possivel alterar os dados"
              : data}
          </p>
        )}
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TabsDemo;
