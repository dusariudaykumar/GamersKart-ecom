import "./App.css";
import { NavBar, Footer } from "./components";
import { RoutersPath } from "./Routers/RoutersPath";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RoutersPath />
      <Footer />
    </div>
  );
}

export default App;
