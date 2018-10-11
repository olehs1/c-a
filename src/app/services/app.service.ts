import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppService {

  private exchangeRatesUrl = 'https://minfin.com.ua/currency/usd/';

  constructor(public httpClient: HttpClient) {}

  async getExchangeRates() {
    return await this.httpClient.get(this.exchangeRatesUrl).toPromise();
    // /*return null;
    // */console.log('No issues, I will wait until promise is resolved..');
  }
}
