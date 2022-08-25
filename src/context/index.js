import React, {useState, createContext} from 'react';

export const Context = createContext({});

export const Provider = ({children}) => {
  const [sessionId, setSessionId] = useState();
  const [user, setUser] = useState({});
  return <Context.Provider value={{sessionId, setSessionId, user, setUser}}>{children}</Context.Provider>;
};