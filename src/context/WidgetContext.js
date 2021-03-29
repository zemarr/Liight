import { createContext, useState } from "react"; // import react

export const WidgetContext = createContext(); // create context

export const WidgetContextProvider = ({ children }) => {
  // create context provider
  const [showWidget, setShowWidget] = useState(false); // instantiate visibility state and initial data

  return (
    // create a HOC return statement with the Context Provider wrapping all the components that will be wrapped by this component
    // A value method must be provided to pass data from the context provider to our subscribers.
    // In this context we will be passing the state objects as props to the subscribers
    <WidgetContext.Provider value={{ showWidget, setShowWidget }}>    
      {children}
    </WidgetContext.Provider>
  );
  // Let's head over to the component tree in which you wish to provide data.... tbc
};

// Gone to chatWidgets <-----
