import './App.css';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Promo from './components/Promo/Promo';
import Reels from './components/Reels/Reels';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Container'>
        <Promo />
        <Reels />
        <Catalog />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;