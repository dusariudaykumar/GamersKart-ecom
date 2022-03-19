import "./App.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
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
