import React from "react";
import ProductCard from "../../shared/cards/ProductCard/ProductCard";
import styles from "./Home.styles";
import cheburarashka from "../../../images/cheburashka.jpg"


const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>Product Card</h1>
      <ProductCard
        title="Чебурашка"
        origin="Россия"
        price={500000}
        currency="RUB"
        imageUrl={cheburarashka}
      />
    </div>
  );
};

export default Home;
