import { Component, OnInit } from '@angular/core'
import { StocksService } from '../services/stocks.service'
import { Stock } from '../stock'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stocks: Stock[]
  symbols: string[]

  constructor(private service: StocksService) {
    this.symbols = service.get()
  }

  ngOnInit() {
    this.service
      .load(this.symbols)
      .subscribe((stocks) => (this.stocks = stocks))
  }
}
