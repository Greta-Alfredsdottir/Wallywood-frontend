import React, { useEffect, useState } from "react";
import type { UserData } from "../types/usertype";
import { AuthContext } from "./authcontext";

//Ts - interface til Provideren
interface AuthContextProviderInterface {
  children: React.ReactNode;
}

// Her oprettes AuthContextProvider
// Dette er den provider vi wrapper vores komponeter i, som skal have adgang til
// alle de værdier/states vi vil bbruge på tværs af appen.
export const AuthContextProvider = ({
  children,
}: AuthContextProviderInterface) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  // Et useEffect hook der kører når komponentet mounter(første load)
  //Tjekker om vi har gemt userData i localStorage, parser den og gemmer den i userData staten

  useEffect(() => {
    function getLocalUserState() {
      if (localStorage.getItem("userData")) {
        const json = JSON.parse(localStorage.getItem("userData")!);
        setUserData(json);
      }
    }
    getLocalUserState();
  }, []);

  //Tjekker om userData er noget og gemmer dem i localStorage
  useEffect(() => {
    if (userData !== null)
      localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const logout = () => {
    if (localStorage.getItem("userData")) localStorage.removeItem("userData");
    setUserData(null);
  };

  //Returner AuthContext med alle de values vi vil bruge rundt om i appen
  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
