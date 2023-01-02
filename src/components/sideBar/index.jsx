import React from 'react'
import ItemSideBar from '../ItensSideBar'
import { TbLetterS } from "react-icons/tb";
import { listUl } from "react-icons-kit/fa/listUl";
import { dropbox } from "react-icons-kit/fa/dropbox";
import { bell } from "react-icons-kit/fa/bell";
import { ic_date_range } from "react-icons-kit/md/ic_date_range";

import * as C from './styles'


function SideNavigation(props) {
  return (
    <C.SideBar>
        <C.Logo>
          <TbLetterS size={40} color={"black"} />
        </C.Logo>
        <ItemSideBar text={"Lista de moradores"} icon={listUl} id={0} setView={props.setView} />
        <ItemSideBar text={"Notificação de encomendas"} icon={dropbox} id={1} setView={props.setView} />
        <ItemSideBar text={"Alerta de reclamações"} icon={bell} id={2} setView={props.setView} />
        <ItemSideBar text={"Lista de reserva e eventos"} icon={ic_date_range} id={3} setView={props.setView} />
    </C.SideBar>
  )
}

export default SideNavigation