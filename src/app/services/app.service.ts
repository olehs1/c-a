import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../config' ;
import { IExchangeRates } from '../interfaces/app.interface';
import { Observable } from 'rxjs';

@Injectable()

export class AppService {
  constructor(public httpClient: HttpClient) {}

  getExchangeRates(): Observable<IExchangeRates> {
    const exchangeRatesUrl = appConfig.serverUrl + 'currency-rates';
    return this.httpClient.get<IExchangeRates>(exchangeRatesUrl);
  }
}
