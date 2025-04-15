import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const products = [
  {
    image : '/src/assets/p1.jpeg',
    name: 'Wireless Headphones',
    price: '59.99',
    rating: 4,
    isPrime: true,
  },
  {
    image : '/src/assets/p2.jpeg',
    name: 'Smart Watch',
    price: '89.99',
    rating: 5,
    isPrime: false,
  },
  {
    image : '/src/assets/p3.jpeg',
    name: 'Laptop Stand',
    price: '29.99',
    rating: 3,
    isPrime: true,
  },

];

const ProductGrid = () => (
  <section className={styles.gridContainer}>
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </section>
);

export default ProductGrid;
