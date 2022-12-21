import RoutesApp from "./routers";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/auth";
function App() {


  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  )
};

export default App;
