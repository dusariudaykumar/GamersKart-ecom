import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./contexts/filter-context";
import { AuthProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <FilterProvider>
          <App />
        </FilterProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
