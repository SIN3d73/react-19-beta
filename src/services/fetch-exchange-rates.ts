import axios from 'axios';
import { ExchangeRatesResponse } from '../interfaces/exchange-rates-response.ts';

export const fetchExchangeRates = async (last = 1) => {
  const {data} = await axios.get<ExchangeRatesResponse[]>(`https://api.nbp.pl/api/exchangerates/tables/A/last/${last}`)
  return data
}
