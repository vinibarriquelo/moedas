import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl: string = 'https://economia.awesomeapi.com.br';

  constructor(
    private http: HttpClient
  ) { }

  public getCoins(coins: string[]): Observable<any> {

    let coinsString = ``;

    if (coins && coins.length > 0) {
      coins.forEach((c: string, index: number) => {
        coinsString += (index === coins.length) ? `${c}` : `${c},`;
      })
    }

    // Padrão de pares de moedas aceito pela API.
    // USD-BRL,EUR-BRL,BTC-BRL
    return this.http.get<any>(`${this.apiUrl}/json/last/${coins}`);
  }

  public getPairs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/json/available`);
  }
}
