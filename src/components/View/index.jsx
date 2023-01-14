import React, { useState } from "react";
import * as C from "./styles";
import * as D from "../ItensSideBar/styles";
import Input from "../Input";

import { pencil } from "react-icons-kit/icomoon/pencil";
import { x } from "react-icons-kit/feather/x";
import Icon from "react-icons-kit";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/reducers/modal";
import { getData } from "../../redux/reducers/editMoradores";

export function View1() {
  const { aptos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const dados = aptos.data ? aptos.data.aptos : [];

  const [edit, setEdit] = useState(false)
  const [filter, setFilter] = useState("");

  const filtro = (apto, nome) =>
    apto.moradores.some((morador) =>
      morador.nome.toLowerCase().includes(nome.toLowerCase())
    ) || String(apto.apto).includes(filter);

  const aptoFilter = dados.filter((apto) => filtro(apto, filter));

  const editMoradores = (apto, bloco, nome, id) => {
    dispatch(getData({ nome, apto, bloco, id }));
    dispatch(openModal());
  };

  function handleClickAdd() {
    setEdit(true)
    console.log(edit)
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
                </C.RowMorador>
              ))}
            </div>
            <button className="add" onClick={handleClickAdd}>
              <Icon icon={x} size={32} style={{ color: '#000000c5' }} />
            </button>
          </C.CardApto>
        ))}
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
