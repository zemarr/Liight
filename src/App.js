import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/protected.route";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import QuickTopup from "./components/Topup/QuickTopup";
import Signup from "./components/Signup/Signup";
import Loan from "./components/Loan/Loan";
import Admin from "./pages/Admin/Admin";

// We want the entire app to be able to subscribe to App

import WOW from "wowjs";

const App = () => {
  new WOW.WOW({
    live: false,
  }).init();
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/topup" component={QuickTopup} />
          <Route path="/loan" component={Loan} />
          <ProtectedRoute path="/admin" exact component={Admin} />
          <Route path="*" exact component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Admin from "./pages/AdminLayout";

// import Home from "./pages/Home/Home";
// import Login from "./components/LoginForm";
// import QuickTopup from "./components/QuickTopup";
// import Signup from "./components/Signup";
// import { PopupContextProvider } from "./context/PopupContext";
// import Loan from "./components/Loan";

// import WOW from "wowjs";
// import ProtectedRoute from "./components/protected.route";

// import { GlobalStyle } from "./GlobalStyles";
// import Navbar from "./components/Navbar/Navbar";

// // We want the entire app to be able to subscribe to App
// // Create AuthContext and set default values in App's state

// const App = () => {
//   new WOW.WOW({
//     live: false,
//   }).init();
//   return (
//     <PopupContextProvider>
//       <div className="App container-fluid">
//         <BrowserRouter>
//           <GlobalStyle />
//           <Navbar />
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/login" component={Login} />
//             <Route path="/sign-up" component={Signup} />
//             <Route path="/topup" component={QuickTopup} />
//             <Route path="/loan" component={Loan} />
//             <ProtectedRoute path="/admin" exact component={Admin} />
//             <Route path="*" exact component={() => "404 NOT FOUND"} />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     </PopupContextProvider>
//   );
// };

// export default App;
