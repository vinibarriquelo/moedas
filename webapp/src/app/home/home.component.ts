import { CoinModel } from './../../shared/interfaces/coin.model';
import { ApiServiceService } from './../../shared/services/api-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public destroy$: Subject<boolean> = new Subject<boolean>();

  public coins: CoinModel[] = [];

  public initialCoins: string[] = [
    'USD-BRL',
    'EUR-BRL',
    'BTC-BRL',
    'CNY-BRL',
  ];

  ngOnInit(): void {
    this.getCoins(this.initialCoins);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  constructor(
    private _apiService: ApiServiceService
  ) { }

  private getCoins(coins: string[]) {
    this._apiService.getCoins(coins).pipe(takeUntil(this.destroy$)).subscribe(
      res => {
        this.coins = Object.values(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
