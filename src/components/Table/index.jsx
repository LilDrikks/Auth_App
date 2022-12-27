import * as C from "./styles";
import { TbLetterS } from "react-icons/tb";
import ItemSideBar from "../ItensSideBar";
import { listUl } from "react-icons-kit/fa/listUl";
import { dropbox } from "react-icons-kit/fa/dropbox";
import { bell } from "react-icons-kit/fa/bell";
import { ic_date_range } from "react-icons-kit/md/ic_date_range";
import { useEffect, useState } from "react";
import View from "../View";

function Table() {
  const [view, setView] = useState("");
  
  useEffect(() => {
    setView(0)
  }, [])
  

  const views = [
  <View key={0} text={"view1"}/>,
  <View key={1} text={"view2"}/>,
  <View key={2} text={"view3"}/>,
  <View key={3} text={"view4"}/>,
  ]  

  return (
    <C.Table>
      <C.SideBar>
        <C.Logo>
          <TbLetterS size={50} color={"white"} />
        </C.Logo>
        <ItemSideBar text={"Lista de moradores"} icon={listUl} id={0} setView={setView} />
        <ItemSideBar text={"Notificação de encomendas"} icon={dropbox} id={1} setView={setView} />
        <ItemSideBar text={"Alerta de reclamações"} icon={bell} id={2} setView={setView} />
        <ItemSideBar text={"Lista de reserva e eventos"} icon={ic_date_range} id={3} setView={setView} />
      </C.SideBar>
      {views.map((item, index) => index === view ? item : null)}

    </C.Table>
  );
}

export default Table;
