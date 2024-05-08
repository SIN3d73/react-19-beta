import { FC, use } from 'react';
import { fetchGoldPrices } from '../../services/fetch-gold-prices.ts';

interface GoldPricesProps {

}

const GoldPrices: FC<GoldPricesProps> = ({}) => {
  const data = use(fetchGoldPrices())
  return (
    <div>
      {data.map((item) =>
        (<div key={item.data}>{item.data}: {item.cena}</div>))}
    </div>
  );
};

export default GoldPrices;
