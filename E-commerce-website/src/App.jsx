import { Container } from "react-bootstrap";
// import { BrowserRouter,   Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import './bootstrap.min.css';
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
  <>

    <Header />
    <main className="my-3">

    <Container>
      <h1>Ecommerce App</h1>
    
    <HomeScreen />
    {/* <Route path="/" component={HomeScreen} exact /> */}
    </Container>
    
    </main>
    
    <Footer/>
</>


    
  );
}

export default App;
