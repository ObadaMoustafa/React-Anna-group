import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import ProductsListPage from "./components/pages/ProductsListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate raplace to="/products" />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
