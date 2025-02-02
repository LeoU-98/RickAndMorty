import { createContext, useState } from "react";

// import { createContext } from "vm";

const searchContext = createContext();

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState("Hello from Context");

  return (
    <searchContext.Provider value={{ state, setState }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearchContext = () => useContext(searchContext);
