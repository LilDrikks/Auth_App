import React, { useEffect, useRef, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";
import * as D from "../ItensSideBar/styles";
import { x } from "react-icons-kit/feather/x";
import Icon from "react-icons-kit";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modal";
import { fetchUpdate } from "../../redux/reducers/editMoradores";

const TabsDemo = () => {
  const dispatch = useDispatch();
  const { edit } = useSelector((state) => state);
  const { apto, bloco, nome, id, data } = edit;

  const [name, setName] = useState("");
  const [stateId, setStateId] = useState("");
  const [notificacao, setNotificacao] = useState("");
  //guarda um valor que não muda ao ser re-renderizado o componente
  const timeOutRef = useRef();
  function handleClick() {
    setNotificacao(true);

    clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      setNotificacao(false);
    }, 2000);
  }

  useEffect(() => {
    setName(nome);
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
        <p className="Text">Mude o nome do morador</p>
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
          <label className="Label" htmlFor="username">
            #ID
          </label>
          <input
            className="Input"
            id="id"
            value={stateId}
            onChange={({ target }) => setStateId(target.value)}
          />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button
            onClick={() => {
              dispatch(
                fetchUpdate({
                  nome: name,
                  apto: apto,
                  bloco: bloco,
                  id: stateId,
                })
              );
              handleClick();
            }}
            className="Button green"
          >
            Salvar mudança
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
