import React, {useState, createContext, useEffect} from 'react';

export const Context = createContext({});
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Provider = ({children}) => {
  const [sessionId, setSessionId] = useState();
  const [user, setUser] = useState({});
  const [evaluation, setEvaluation] = useState();

  const loadUserStorageData = async () => {
    const storedUser = await AsyncStorage.getItem('SessionId');
    setUser(storedUser);
  };
  useEffect(() => {
    loadUserStorageData();
  }, []);
  return <Context.Provider value={{sessionId, setSessionId, user, setUser, evaluation, setEvaluation}}>{children}</Context.Provider>;
};