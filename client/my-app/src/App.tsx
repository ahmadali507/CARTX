import React from "react";
import Home from "./Pages/Mainpages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Laptop from "./Pages/Mainpages/Laptop";
import Clothes from "./Pages/Mainpages/Clothes";
import Tech from "./Pages/Mainpages/Tech";
import SignIn from "./Pages/authPages/Login";
import SignUp from "./Pages/authPages/SignUp";
import ForgetPassword from "./Pages/authPages/ForgetPassword";
import { BrandProvider, CartProvider, PriceProvider } from "./context/context";
import AboutUsPage from "./Pages/Mainpages/AboutUsPage";
import ContactusPage from "./Pages/Mainpages/ContactusPage";

const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <BrandProvider>
          <PriceProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element = {<AboutUsPage/>}/>
                <Route path="/contact" element = {<ContactusPage/>}/>
                <Route path="/api/additem/Laptop" element={<Laptop />} />
                <Route path="/api/additem/Clothes" element={<Clothes />} />
                <Route path="/api/additem/Tech" element={<Tech />} />
                <Route path="/auth/signIn" element={<SignIn />} />
                <Route
                  path="/auth/forget-password"
                  element={<ForgetPassword />}
                />
                <Route path="/auth/signUp" element={<SignUp />} />
              </Routes>
            </Router>
          </PriceProvider>
        </BrandProvider>
      </CartProvider>
    </>
  );
};

export default App;
