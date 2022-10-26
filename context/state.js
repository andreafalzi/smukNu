import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [medlemName, setMedlemName] = useState('');
  const sharedState = {
    medlemName,
    setMedlemName,
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}
export function useAppContext() {
  return useContext(AppContext);
}
