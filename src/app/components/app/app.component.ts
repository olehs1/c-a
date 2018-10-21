import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import {
  IExchangeRates,
  IExchangeRatesInput
} from '../../interfaces/app.interface';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'USD';
  exchangeRates: IExchangeRates = null;
  exchangeRatesModel: IExchangeRatesInput = {
    usdSell: null,
    uahSell: null
  };

  constructor(private appService: AppService) {
    this.initData();
  }

  private initData(): void {
    const getExchangeRates = this.appService.getExchangeRates();
    const onSuccess = (response: IExchangeRates) => {
      this.exchangeRates = {
        usdBuy: 28,
        usdSell: 28.2
      };
      // = response;
    };
    getExchangeRates.subscribe(onSuccess);
  }

  getConvertedUsdToUah(): number {
    return _.ceil(this.exchangeRatesModel.usdSell * this.exchangeRates.usdSell);
  }

  getConvertedUahToUsd(): number {
    return _.ceil(this.exchangeRatesModel.uahSell / this.exchangeRates.usdSell);
  }
}
