import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../stock';
import { Observable } from 'rxjs';

let stocks: string[] = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(private http: HttpClient) {}

  get(): string[] {
    return stocks;
  }

  add(stock: string): string[] {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string): string[] {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: string[]): Observable<Stock[]> {
    if (symbols) {
      return this.http.get<Stock[]>(`${service}/stocks/snapshot?symbols=${symbols.join()}`);
    }
  }
}
