import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";
import useAuth from "../../hooks/useAuth";
import * as D from "../ItensSideBar/styles";
import { x } from "react-icons-kit/feather/x";
import Icon from "react-icons-kit";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/reducers/modal";

const TabsDemo = () => {
  const dispatch = useDispatch()
  const { morador, setMorador } = useAuth();
  const [edit, setEdit] = useState({ state: false, id: "", nome: "" });

  return (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" aria-label="Manage your account">
        <div className="TabsTrigger">
          <Tabs.Trigger  value="tab1">
            {`${morador[0]} ${morador[1]}`}
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
          <input className="Input" id="name" defaultValue={morador[2]} />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            #ID
          </label>
          <input
            className="Input"
            id="username"
            defaultValue={morador[3]}
          />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">Save changes</button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default TabsDemo;
