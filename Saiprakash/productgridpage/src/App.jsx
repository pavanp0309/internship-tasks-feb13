import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';

const App = () => (
  <div>
    <Navbar />
    <main>
      <ProductGrid />
    </main>
    <Footer />
  </div>
);

export default App;
