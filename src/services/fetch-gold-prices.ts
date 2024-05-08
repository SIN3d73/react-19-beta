import axios from 'axios';
import { GoldPriceResponse } from '../interfaces/gold-price-response.ts';

export const fetchGoldPrices = async () => {
  const {data} = await axios.get<GoldPriceResponse[]>('http://api.nbp.pl/api/cenyzlota')
  return data;
}
