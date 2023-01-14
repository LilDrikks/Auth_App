import * as C from "./styles";

import { useEffect, useState } from "react";
import { View1, View2, View3, View4 } from "../View";
import SideNavigation from "../sideBar";

function Body() {
  const [view, setView] = useState("");

  useEffect(() => {
    setView(0);
  }, []);

  const views = [
    <View1 key={0} />,
    <View2 key={1} />,
    <View3 key={2} />,
    <View4 key={3} />,
  ];

  return (
    <C.Body>
      <SideNavigation setView={setView} />
      {views.map((item, index) => (index === view ? item : null))}
    </C.Body>
  );
}

export default Body;
