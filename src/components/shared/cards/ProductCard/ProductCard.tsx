import React from "react";
import styles from "./ProductCard.styles";

type Currency = "RUB" | "USD" | "EUR";

interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>Сделано: {origin}</p>
      <p>{formattedPrice}</p>
    </div>
  );
};

export default ProductCard;
