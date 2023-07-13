import { createContext, useState } from "react";

const TokenContext = createContext();
//const TokenContext = createContext();

export function TokenProvider({ children }) {
  const persistedToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(persistedToken);
  const [user, setUser] = useState("")

  function login(tokenData) {
    setToken(tokenData);
    localStorage.setItem("token", JSON.stringify(tokenData));
  }

  function localUser(user) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <TokenContext.Provider value={{ token, login, user, setUser, localUser}}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenContext;