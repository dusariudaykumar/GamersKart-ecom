import { ToastContainer } from "react-toastify";
import "./App.css";
import { NavBar, Footer } from "./components";
import { RoutersPath } from "./Routers/RoutersPath";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RoutersPath />
      <Footer />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
