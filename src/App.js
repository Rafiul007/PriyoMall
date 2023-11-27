import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Authentication from './pages/Authentication'
import ShopCategory from './pages/ShopCategory'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="mens" />} />
          <Route path="/women" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path='/product' element={<Product/>}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
