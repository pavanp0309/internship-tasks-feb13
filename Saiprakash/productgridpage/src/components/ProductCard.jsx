import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, name, price, rating, isPrime }) => (
  <div className={styles.card}>
    <img src={image} alt={name} className={styles.image} />
    <h3 className={styles.name}>{name}</h3>
    <p className={styles.price}>${price}</p>
    <p className={styles.rating}>{'⭐'.repeat(rating)}</p>
    {isPrime && <span className={styles.prime}>Prime</span>}
    <button className={styles.button}>Add to Cart</button>
  </div>
);

export default ProductCard;
