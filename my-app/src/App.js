import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
