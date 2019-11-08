import { Component, Input } from '@angular/core';
import { Stock } from '../../stock';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input() stock: Stock;

  isNegative() {
    return this.stock && this.stock.change < 0;
  }

  isPositive() {
    return this.stock && this.stock.change > 0;
  }
}
