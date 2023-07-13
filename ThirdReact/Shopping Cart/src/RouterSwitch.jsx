import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Checkout from './components/Checkout'
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import App from "./App";

export default function RouterSwitch(){
    return (
        <>
        

         <BrowserRouter>
         <Navbar/>

      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/item/:id" element={<Item />} />

      </Routes>
      </BrowserRouter>
        </>
     
    )
}