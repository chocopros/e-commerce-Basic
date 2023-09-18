import { NavLink, Route, Routes } from "react-router-dom";
import Home from './components/Routes/Home/Home';
import ProductDetails from "./components/Routes/Products/ProductDetails";
import Login from "./components/Routes/Login/Login";
import Purchases from './components/Routes/Purchases/Purchases';
import Header from "./components/shared/Header/Header";
import Footer from './components/shared/Footer/Footer';

const App = () => {

  
  
  return (

    <>
      <Header />

      <Routes>

        <Route path="/" element={ <Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/purchases" element={ <Purchases />} />
        <Route path="/product/:id" element={ <ProductDetails /> } />

      </Routes>

      <Footer />
     

    </>
  )

};

export default App