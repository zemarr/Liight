import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";

import Home from "./pages/Home";
import Login from "./components/LoginForm";
import QuickTopup from "./pages/QuickTopup";
import Signup from "./components/Signup";

// We want the entire app to be able to subrscribe to App
// Create AuthContext and set default values in App's state
// create reducer hook to handle authentication logic

const App = () => {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin12345"
  // }

  // const [user, setUser] = useState({name: "", email: ""});
  // const [error, setError] = useState("");

  // const login = details => {
  //   console.log(details)
  // }

  // const logout = () => {
  //   console.log("logout")
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/topup" component={QuickTopup} />
          {/* {(user.email !== "") ? (
            <Route path="/" exact component={Admin} />) : (<Route path="/" exact component={Home} />)} */}
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
