import { CoinModel } from './../../shared/interfaces/coin.model';
import { ApiServiceService } from './../../shared/services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public coins: CoinModel[] = [];

  ngOnInit(): void {
    this._apiService.getCoins().subscribe(
      res=>{
        this.coins = Object.values(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  constructor(
    private _apiService: ApiServiceService
  ) {

  }
}
