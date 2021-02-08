import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";

import Home from "./pages/Home";
import Login from "./components/LoginForm";
import QuickTopup from "./components/QuickTopup";
import Signup from "./components/Signup";
import { PopupContextProvider } from "./context/PopupContext";
import Loan from "./components/Loan";

import WOW from "wowjs";

// We want the entire app to be able to subrscribe to App
// Create AuthContext and set default values in App's state
// create reducer hook to handle authentication logic

const App = () => {
  new WOW.WOW({
    live: false,
  }).init();
  return (
    <PopupContextProvider>
      <div className="App container-fluid">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/topup" component={QuickTopup} />
            <Route path="/loan" component={Loan} />
            <Route path="/admin" exact component={Admin} />
          </Switch>
        </BrowserRouter>
      </div>
    </PopupContextProvider>
  );
};

export default App;
