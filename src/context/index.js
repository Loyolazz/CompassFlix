import React, {useState, createContext} from 'react';

export const Context = createContext({});

export const Provider = ({children}) => {
  const [sessionId, setSessionId] = useState();
  return <Context.Provider value={{sessionId, setSessionId}}>{children}</Context.Provider>;
};