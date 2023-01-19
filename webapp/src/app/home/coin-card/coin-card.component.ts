import { CoinModel } from './../../../shared/interfaces/coin.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss']
})
export class CoinCardComponent implements OnInit {

  @Input() coin: CoinModel | undefined;

  ngOnInit(): void {

  }

  constructor() {

  }
}
