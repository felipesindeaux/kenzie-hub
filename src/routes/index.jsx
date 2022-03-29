import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Dashboard from "../Pages/Dashboard";
import { useState, useEffect } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(true);

  const handleAuth = (value) => {
    setAuth(value);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuth(true);
    } else {
      return setAuth(false);
    }
  }, [auth]);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Login auth={auth} handleAuth={handleAuth} />
        </Route>

        <Route path="/cadastro">
          <Cadastro auth={auth} handleAuth={handleAuth} />
        </Route>

        <Route path="/dashboard">
          <Dashboard auth={auth} handleAuth={handleAuth} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
