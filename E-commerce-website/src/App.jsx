
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
// import "./App.css";
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <>
      <Header /> 
      <main>
        <Container>
          <h1>Ecommerce App</h1>
        </Container>
        <Homescreen />
      </main>
      <Footer /> {/* Footer at the bottom */}
    </>
  );
}

export default App;
