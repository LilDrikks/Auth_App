import React, { useState } from "react";
import * as C from "./styles";
import * as D from "../ItensSideBar/styles";
import { x } from "react-icons-kit/feather/x";
import { pencil } from "react-icons-kit/icomoon/pencil";
import Icon from "react-icons-kit";
import useAuth from "../../hooks/useAuth";
import Input from "../Input";

function Modal() {
  const { setModal, moradores, setMoradores } = useAuth();
  const [edit, setEdit] = useState({ state: false, id: "", nome: "" });
  console.log(edit);
  return (
    <C.ModalApto>
      <C.ModalContainer>
        <C.Apto>
          <span>{moradores[0]}</span>
          <span>{moradores[1]}</span>
        </C.Apto>
        <C.Moradores>
          {moradores[2].map((item, index) => (
            <li key={index}>
              <p>{item.nome}</p>
              <span>
                <D.Item
                  style={{ width: "26px", height: "26px" }}
                  onClick={(e) =>
                    setEdit({ state: true, id: item._id, nome: item.nome })
                  }
                >
                  <Icon icon={pencil} size={12} style={{ color: "black" }} />
                </D.Item>
              </span>
            </li>
          ))}
          <D.Item style={{ width: "40px", height: "40px" }} className={'button'}>
            <Icon icon={x} size={20} style={{ color: "black" }} className={'plus'}/>
            <p>adicionar morador</p>
          </D.Item>
        </C.Moradores>
        {edit.state ? (
          <Input
            value={edit.nome}
            onChange={(e) => setEdit({ state: true, nome: e.target.value })}
          />
        ) : (
          false
        )}
        <D.Item
          style={{ width: "40px", height: "40px" }}
          onClick={() => setModal(false)}
        >
          <Icon icon={x} size={20} style={{ color: "black" }} />
        </D.Item>
      </C.ModalContainer>
    </C.ModalApto>
  );
}

export default Modal;
