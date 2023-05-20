import { useEffect, useState } from "react";
import { getCoin } from "../services/api";
import Coin from "./Coin";
import Loader from "./Loading";
import styles from './Landing.module.css'

const Landing = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoin(data);
    };
    fetchAPI();
  }, []);

  const searchHandler =(e)=>{
      setSearch(e.target.value)
  }

  const searchCoins = coin.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <section >
      <input type="text" placeholder="search..." value={search} onChange={searchHandler} />
      {coin.length ? (
        <div className={styles.main}>
          {searchCoins.map((item) => (
            <Coin
              key={item.id}
              name={item.name}
              image={item.image}
              symbol={item.symbol}
              price={item.current_price}
              marketCap={item.market_cap}
              priceChange={item.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Landing;
