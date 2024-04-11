import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export const UserProvider = function ({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function setUserData() {
      const { data } = await axios.get("users/me");
      if (data.data.id) {
        setUser(data.data);
      }
    }
    setUserData();
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = function () {
  return useContext(UserContext);
};
