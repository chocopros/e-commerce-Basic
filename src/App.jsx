import { NavLink, Route, Routes } from "react-router-dom";
import Home from './components/Routes/Home/Home';
import Login from "./components/Routes/Login/Login";
import Purchases from './components/Routes/Purchases/Purchases';
import Header from "./components/pages/Header/Header";
import Footer from './components/pages/Footer/Footer';
import ProductDetails from "./components/Routes/Products/ProductDetails";
import { useEffect } from "react";
import axios from "axios";

const App = () => {

  /*
  const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'

  const userObj = {

    firstName: "jesus",
    lastName: "robert",
    email: "marsriva@gmail.com",
    password: "jesus1234",
    phone: "1234567890"

  }

  useEffect(() => {
    axios.post(URL, userObj)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])
  */

  return (

    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

      <Footer />


    </>
  )

};

export default App