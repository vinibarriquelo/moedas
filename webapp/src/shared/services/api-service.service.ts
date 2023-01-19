import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl: string = 'https://economia.awesomeapi.com.br/';

  constructor(
    private http: HttpClient
  ) { }

  public getCoins(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/json/last/USD-BRL,EUR-BRL,BTC-BRL`);
  }
}
