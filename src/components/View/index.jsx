import React, { useRef, useState } from "react";
import * as C from "./styles";
import Input from "../Input";

import { pencil } from "react-icons-kit/icomoon/pencil";
import { x } from "react-icons-kit/feather/x";
import Icon from "react-icons-kit";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/reducers/modal";
import { fetchAddNewMorador, fetchRemoveMorador, getData } from "../../redux/reducers/editMoradores";
import { useNavigate } from "react-router-dom";

export function View1() {
  const dispatch = useDispatch();

  const { aptos, signIn, edit } = useSelector((state) => state);
  const token = signIn.meta.localStorage.value
  const dados = aptos.data ? aptos.data.aptos : [];

  const timeOutRef = useRef();
  const navigate = useNavigate();

  const [notificacao, setNotificacao] = useState("");

  const [filter, setFilter] = useState("");

  const filtro = (apto, nome) =>
    apto.moradores.some((morador) =>
      morador.nome.toLowerCase().includes(nome.toLowerCase())
    ) || String(apto.apto).includes(filter);

  const aptoFilter = dados.filter((apto) => filtro(apto, filter));

  const handleClickDelete = (apto, bloco, nome) => {
    setNotificacao(true);

    clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      setNotificacao(false);
      navigate(0)
    }, 1800);
    console.log(apto, bloco, nome, token)
    dispatch(fetchRemoveMorador({ apto, bloco, nome, token }))
  }

  const editMoradores = (apto, bloco, nome, id) => {
    dispatch(getData({ nome, apto, bloco, id }));
    dispatch(openModal());
  };

  const handleClickAdd = (apto, bloco) => {
    dispatch(getData({ apto, bloco }));
    dispatch(openModal());
  }

  return (
    <C.View>
      <C.Subtitle>Lista de moradores</C.Subtitle>
      <C.Filter>
        <Input
          type="text"
          placeholder="Número do Ap..."
          value={filter}
          onChange={(e) => [setFilter(e.target.value)]}
          maxLength={20}
        />
      </C.Filter>
      <C.containerAptos>
        {aptoFilter.map((apto, index) => (
          <C.CardApto key={index}>
            <div>
              <h3>
                {apto.apto} {apto.bloco}
              </h3>
              {apto.moradores.map((morador, index) => (
                <C.RowMorador key={index}>
                  <p>{morador.nome}</p>

                  <div>
                    <button
                      className="edit"
                      onClick={() =>
                        handleClickDelete(
                          apto.apto,
                          apto.bloco,
                          morador.nome,
                        )
                      }
                    >
                      <Icon icon={x} size={16} style={{ color: '#000000c5' }} />
                    </button>
                    <button
                      className="edit"
                      onClick={() =>
                        editMoradores(
                          apto.apto,
                          apto.bloco,
                          morador.nome,
                          morador._id
                        )
                      }
                    >
                      <Icon icon={pencil} size={16} style={{ color: '#000000c5' }} />
                    </button>
                  </div>
                </C.RowMorador>
              ))}
              
            </div>
            <button className="add" onClick={() => handleClickAdd(apto.apto, apto.bloco)}>
              <Icon icon={x} size={32} style={{ color: '#000000c5' }} />
            </button>
          </C.CardApto>
        ))}
        {notificacao && (
                    <p className="notificacao">
                      {edit.data === "Request failed with status code 500"
                        ? "Não foi possivel alterar os dados"
                        : edit.data}
                    </p>
              )}
      </C.containerAptos>
    </C.View>
  );
}

export function View2() {
  return (
    <C.View>
      <C.Subtitle>Notificação de encomendas</C.Subtitle>
    </C.View>
  );
}

export function View3() {
  return (
    <C.View>
      <C.Subtitle>Alertas e reclamações</C.Subtitle>
    </C.View>
  );
}

export function View4() {
  return (
    <C.View>
      <C.Subtitle>Lista de reserva e eventos</C.Subtitle>
    </C.View>
  );
}
