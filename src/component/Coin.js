import styles from "./Coin.module.css";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <section className={styles.main}>
      <span><img src={image} alt={name} /></span>
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.price}>$ {price.toLocaleString()}</span>
      <span
        className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>
        {priceChange.toFixed(2)}
      </span>
      <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
    </section>
  );
};

export default Coin;
