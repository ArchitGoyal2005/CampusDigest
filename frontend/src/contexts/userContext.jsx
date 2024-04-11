import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import io from 'socket.io-client';

export const UserContext = createContext({});


const socket = io("http://localhost:8000");

export const UserProvider = function ({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function setUserData() {
      const { data } = await axios.get("users/me", {
        withCredentials: true
      });
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
        socket
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = function () {
  return useContext(UserContext);
};
