import { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupContextProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ showPopup, setShowPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
