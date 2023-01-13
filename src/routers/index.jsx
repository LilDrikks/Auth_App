import { Fragment } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "../pages/home";
import SignIn from "../pages/singin";
import SignUp from "../pages/signup";
import { useSelector } from "react-redux";

const Private = ({Item})=> {
  const {value} = useSelector(state => state.signIn.meta.localStorage)
  return value ? <Item /> : <SignIn />
}

const RoutesApp = ()=> {
  return(
    <BrowserRouter>
    <Fragment>
      <Routes>
        <Route  exact path="/home" element={<Private Item={Home} />} />
        <Route path="/" element={<Private Item={Home} />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;