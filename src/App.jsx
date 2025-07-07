import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import AuthModal from './components/AuthModal/AuthModal';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu';
import ProductModal from './components/ProductModal/ProductModal';
import Chat from './components/Chat/Chat';
import DrinksPage from './pages/drinks/Drinks';

function App() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleOpenAuthModal = () => {
    setOpenAuthModal(true);
  }

  const handleCloseAuthModal = () => {
    setOpenAuthModal(false);
  }

  const handleOpenCart = () => {
    setOpenCart(true);
  }

  const handleCloseCart = () => {
    setOpenCart(false);
  }

  const handleOpenMenu = () => {
    setOpenMenu(true);
  }

  const handleCloseMenu = () => {
    setOpenMenu(false);
  }

  const handleOpenProductModal = (product) => {
    setSelectedProduct(product);
    setOpenProductModal(true);
  }

  const handleCloseProductModal = () => {
    setOpenProductModal(false);
    setSelectedProduct(null);
  }

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  const handleClearCart = () => {
    setCartItems([]);
  }

  const handleUpdateCart = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  }

  return (
    <div className="App">
      <Header onOpenAuthModal={handleOpenAuthModal} onOpenCart={handleOpenCart} onOpenMenu={handleOpenMenu} cartItems={cartItems} />
      <div className='Container'>

        <Routes>
          <Route path='/' element={<Home onAddToCart={handleAddToCart} onMoreClick={handleOpenProductModal} />} />
            <Route path='/drinks' element={<DrinksPage onAddToCart={handleAddToCart} onMoreClick={handleOpenProductModal}/>} />
        </Routes>

      </div>
      <Chat />
      <Footer />

      {openAuthModal && <AuthModal onClose={handleCloseAuthModal} />}
      {openMenu && <Menu onClose={handleCloseMenu} />}
      {openCart && <Cart onClose={handleCloseCart} cartItems={cartItems} onClearCart={handleClearCart} handleUpdateCart={handleUpdateCart} />}
      {openProductModal && selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseProductModal} onAddToCart={() => handleAddToCart(selectedProduct)} />}
    </div>
  );
}

export default App;