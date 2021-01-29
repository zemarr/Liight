import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //   const user = {
  //     name: "admin",
  //     role: "admin",
  //     adminAccess: true,
  //     url: "/admin",
  //   };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
