import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "admin",
    password: "admin12345",
    validated: false,
    isLoggedIn: false,
  });
  const [error, setError] = useState({
    nameError: "",
    passwordError: "",
    accountError: "",
  });

  // create a HOC return statement with the Context Provider wrapping all the components that will be wrapped by this component
  // A value method must be provided to pass data from the context provider to our subscribers.
  // In this context we will be passing the state objects as props to the subscribers
  return (
    <UserContext.Provider value={{ user, setUser, error, setError }}>
      {children}
    </UserContext.Provider>
  );
  // Let's head over to the component tree in which you wish to provide data.... tbc
};
// To be used in:   <-----
//  Login page
