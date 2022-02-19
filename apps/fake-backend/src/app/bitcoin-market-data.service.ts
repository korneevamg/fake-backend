import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

/* To import JSON files like this you might need to add “resolveJsonModule” and ”esModuleInterop” in tsconfig.json file under compiler options as shown below:
{  "compilerOptions": {  "resolveJsonModule": true, "esModuleInterop": true } }
*/
import fakeBitcoinData from '../assets/fake-data/fake-bitcoin-data.json';

@Injectable({
  providedIn: 'root',
})
export class BitcoinMarketDataService {
  public constructor(private http: HttpClient) {}
  public fetchBitcoinData(): Observable<BitcoinMarketData[]> {
    return this.http.get<BitcoinMarketData[]>('/v1/markets.json');

    /**
     * @description FAKE BACKEND OPTION: Hardcoded values. Refer to the mocked values directly in the code
     * or store it in a separate file if you have more entries
     */
    //return of([{...}]);
    //return of(fakeBitcoinData);

    /**
     * @description FAKE BACKEND OPTION: Hardcoded values. Use HttpClient to "request" fake data from the file
     */
    /*     return this.http.get<BitcoinMarketData[]>(
      'assets/fake-data/fake-bitcoin-data.json'
    ); */
  }

  public fetchSuggestionForBitcoinBusiness() {
    return this.http.get<string>('/api/suggestion');
  }
}

// Documentation: https://bitcoincharts.com/about/markets-api/
export interface BitcoinMarketData {
  symbol: string; // short name for market
  currency: string; //base currency of the market (USD, EUR, RUB, JPY, ...)
  bid: number | null; //highest bid price
  ask: number | null; //lowest ask price
  latest_trade: number; //unixtime of latest trade. Following fields relate to the day of this field (UTC)!
  n_trades?: string; //number of trades
  high: number | null; //highest trade during day
  low: number | null; //lowest trade during day
  close: number; //latest trade
  previous_close?: string; //latest trade of previous day
  volume: number; //total trade volume of day in BTC
  currency_volume: number; //total trade volume of day in currency
}
