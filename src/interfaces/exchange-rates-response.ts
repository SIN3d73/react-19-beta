export interface RatesResponse {
  currency: string;
  mid: string;
  code: string;
}

export interface ExchangeRatesResponse {
  effectiveDate: string;
  no: string;
  table: 'A' | 'B' | 'C';
  rates: RatesResponse[];
}
