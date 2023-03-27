import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Navigation } from './pages/Navigation';
import { FavoriteProvider } from './components/FavouriteProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    
    <FavoriteProvider>
    <Navigation />
    <App />
    </FavoriteProvider>
    </BrowserRouter>
  
);
reportWebVitals();
