import { createContext, useState, useContext } from "react";
const initialAuth = {
  status: false,
  encodedToken: "",
  userData: {},
};

const AuthContext = createContext(initialAuth);
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuth);
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
