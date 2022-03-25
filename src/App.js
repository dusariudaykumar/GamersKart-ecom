import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
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
