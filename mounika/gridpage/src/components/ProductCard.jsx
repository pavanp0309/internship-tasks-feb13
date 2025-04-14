// src/components/ProductCard.jsx
import React from "react";
import products from "../data/products";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.image} alt={product.name} className={styles.image} />
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <p className={styles.rating}>⭐ {product.rating}</p>
          {product.isPrime && <span className={styles.prime}>Prime</span>}
          <button className={styles.button}>Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
