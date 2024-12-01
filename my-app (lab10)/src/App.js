import React from "react";
import Home from "./components/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CatalogPage from "./components/catalog_page";
import ItemPage from "./components/item_page";
import CartPage from "./components/cart_page";

function App() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<CatalogPage />}/>
        <Route path="/laptops/:id" element={<ItemPage />}/>
        <Route path="/cart" element={<CartPage />}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App;
