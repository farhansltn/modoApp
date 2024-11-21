/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css"; // Add fade transition styles here

// Navbar
import Navbar from "./components/Navbar";
// Path to pages
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

// React Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import Profile from "./pages/Profile";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw]">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={1000} // Transition duration in milliseconds
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/profile" element={<Profile />} />

            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
};

export default App;
