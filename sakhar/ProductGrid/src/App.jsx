import Product from './Product';
import { products } from './productsData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Product products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
