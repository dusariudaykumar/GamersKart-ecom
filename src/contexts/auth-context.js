import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
