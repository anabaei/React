import React, { createContext, useState } from 'react';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState(null);

  const setSession = (data) => {
    setSessionData(data);
  };

  return (
    <SessionContext.Provider value={{ sessionData, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
