import RoutesApp from "./routers";
import GlobalStyle from "./styles/global";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./redux/reducers/signIn";
function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.signIn.meta.localStorage);
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    if(token) dispatch(autoLogin());
  }, [value]);

  return (
    <div>
      <RoutesApp />
      <GlobalStyle />
    </div>
  );
}

export default App;
