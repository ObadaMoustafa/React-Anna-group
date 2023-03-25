import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/HeaderContainer";
import FavoriteItemsPage from "./components/pages/FavoriteItemsPage";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import ProductsListPage from "./components/pages/ProductsListPage";
import { FavoriteContextProvider } from "./context/FavoriteContext";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Navigate replace to="/products" />} />
        <Route
          path="/products"
          element={
            <FavoriteContextProvider>
              <ProductsListPage />
            </FavoriteContextProvider>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <FavoriteContextProvider>
              <ProductDetailsPage />
            </FavoriteContextProvider>
          }
        />
        <Route
          path="/favorite"
          element={
            <FavoriteContextProvider>
              <FavoriteItemsPage />
            </FavoriteContextProvider>
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
