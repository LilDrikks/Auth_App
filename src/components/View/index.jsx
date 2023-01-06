import React, { useState } from "react";
import * as C from "./styles";
import * as D from "../ItensSideBar/styles";
import Input from "../Input";
import useAuth from "../../hooks/useAuth";
import { pencil } from "react-icons-kit/icomoon/pencil";
import Icon from "react-icons-kit";

export function View1() {
  const { data, setModal, moradores, setMorador } = useAuth();

  const [filter, setFilter] = useState("");

  const filtro = (apto, nome) =>
    apto.moradores.some((morador) =>
      morador.nome.toLowerCase().includes(nome.toLowerCase())
    ) || String(apto.apto).includes(filter);

  const aptoFilter = data.filter((apto) => filtro(apto, filter));

  const editMoradores = (apto, bloco, nome, id) => {
    setMorador([apto, bloco, nome, id])
    
    setModal(true);
  };

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
                <C.RowMorador>
                  <p key={index}>{morador.nome}</p>
                  <D.Item
                  style={{ width: "26px", height: "26px" }}
                  onClick={() =>
                    editMoradores(apto.apto, apto.bloco, morador.nome, morador._id)
                  }
                >
                  <Icon icon={pencil} size={12} style={{ color: "black" }} />
                </D.Item>
                </C.RowMorador>
              ))}
            </div>
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
