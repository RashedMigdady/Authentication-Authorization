import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./component/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignUp } from "./component/signUp/signUp";
import { Users } from "./component/users/users";
import { UserInfo } from "./component/userInfo/userInfo";
import Button from "@restart/ui/esm/Button";

const App = () => {
  return (
    <div>
      
      <Switch>
      
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      <Route path="/users" component={Users} />
      <Route path="/info" component={UserInfo} />
      
      
     </Switch>
    </div>
  );
}

export default App;
