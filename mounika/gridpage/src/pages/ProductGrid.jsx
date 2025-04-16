import React from "react";
import styles from "./ProductGrid.module.css";

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Boult Audio Z40 True Wireless in Earbuds",
      price: 15.99,
      image: "https://m.media-amazon.com/images/I/81r4-kfrAvL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.5,
      isPrime: true
    },
    {
      id: 2,
      name: "Boult Q Over Ear Bluetooth",
      price: 29.66,
      image: "https://m.media-amazon.com/images/I/71zfpkr4bYL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.0,
      isPrime: false
    },
    {
      id: 3,
      name: "Atom Weight Machine",
      price: 89.99,
      image: "https://m.media-amazon.com/images/I/61WLHUnn+pL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.7,
      isPrime: true
    },
    {
      id: 4,
      name: "RTS Universal Travel Adapter",
      price: 35.0,
      image: "https://m.media-amazon.com/images/I/611RCy1XjsL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    },
    {
      id: 5,
      name: "Mobile Holder Stand",
      price: 12.0,
      image: "https://m.media-amazon.com/images/I/51u2MqPaQwL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    },
    {
      id: 6,
      name: "Pigeon Electric Kettle",
      price: 38.0,
      image: "https://m.media-amazon.com/images/I/51DGcy8eBCL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    },
    {
      id: 7,
      name: "Fire-Boltt Phoenix Pro Smart Watch",
      price: 40.0,
      image: "https://m.media-amazon.com/images/I/61Y8u2y5XOL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    },
    {
      id: 8,
      name: "AGARO Mini Electric Chopper",
      price: 8.9,
      image: "https://m.media-amazon.com/images/I/71JxqRoEC9L._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    },
    {
      id: 9,
      name: "Hoteon Extension Board",
      price: 26.0,
      image: "https://m.media-amazon.com/images/I/61NdxpsTWqL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    },
    {
      id: 10,
      name: "Eagle Metal Luggage Weighing Machine",
      price: 17.0,
      image: "https://m.media-amazon.com/images/I/51FU5E+UhsL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    },
    {
      id: 11,
      name: "Apple 20W USB-C Power Adapter",
      price: 47.0,
      image: "https://m.media-amazon.com/images/I/21rFLTV3tML._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    },
    {
      id: 12,
      name: "AptechDeals Mini LCD thermometer",
      price: 14.0,
      image: "https://m.media-amazon.com/images/I/71doekn7wWL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.2,
      isPrime: true
    }
  ];

  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <div className={styles.card} key={product.id}>
          <img src={product.image} alt={product.name} className={styles.image} />
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.price}>₹{product.price}</p>
          <p className={styles.rating}>⭐ {product.rating}</p>
          {product.isPrime && <span className={styles.prime}>Prime</span>}
          <button className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
