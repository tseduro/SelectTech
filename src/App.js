import Navbar from './Navbar';
import React, { useState } from 'react';
import Home from './Home';
import Footer from './Footer';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
        name: 'Graphics Card',
        description: 'High-performance graphics card for gaming and design.',
        price: 499.99,
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Processor',
        description: 'Powerful CPU for smooth computing experience.',
        price: 299.99,
        image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Peripherals',
      description: 'Keyboards, mice, trackers etc',
      price: 19.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Networking Equipment',
      description: 'To be abe to connect to the internet',
      price: 49.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Accesories',
      description: 'Various Add-ons for PC',
      price: 29.99,
      image: 'https://via.placeholder.com/150'
    }
];

const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="App">
      <Navbar/>
      <main>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h2>Featured Products</h2>
        <div className="product-list">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
