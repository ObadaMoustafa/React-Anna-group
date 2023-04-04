import React from "react";
import SiteWorking from "./Site";
import ProductDetail from './ProductDetail';
import Favorites from "./FavoritesPage";
import {
    BrowserRouter as Router, 
    Routes, 
    Route,
    Link,
} from "react-router-dom";

const NavigationBar = () => {
    return (
         <nav>
          <ul>
            <li><Link to="/">All Products</Link></li>
            <li><Link to="/favorites">Favorite products</Link></li>
          </ul>
        </nav>
    );
};

const AppRoutes = () => {
    return (
        <Router>
        <NavigationBar />
            <Routes>
                <Route path="/" element={<SiteWorking />} />
                <Route path="/product/:id" element={<ProductDetail/>} />
                <Route path="/favorites" element={<Favorites/>} />
            </Routes>
        </Router>
    );
};



export default AppRoutes;