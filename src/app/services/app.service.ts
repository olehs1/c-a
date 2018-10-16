import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../config' ;

@Injectable()

export class AppService {
  constructor(public httpClient: HttpClient) {}

  getExchangeRates() {
    const exchangeRatesUrl = appConfig.serverUrl + 'currency-rates';
    return this.httpClient.get(exchangeRatesUrl);
    // /*return null;
    // */console.log('No issues, I will wait until promise is resolved..');
  }
}
