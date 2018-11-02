import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import {
  IExchangeRates,
  IExchangeRatesInput
} from '../../interfaces/app.interface';
import _ from 'lodash';

const ROUNDING_PRECISION = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'USD';
  exchangeRates: IExchangeRates = null;
  exchangeRatesModel: IExchangeRatesInput;

  constructor(private appService: AppService) {
    this.clearAll();
    this.initData();
  }

  private initData(): void {
    const getExchangeRates = this.appService.getExchangeRates();
    const onSuccess = (response: IExchangeRates) => {
      // this.exchangeRates = {
      //   usdBuy: 28,
      //   usdSell: 28.2
      // };
      this.exchangeRates = response;
    };
    getExchangeRates.subscribe(onSuccess);
  }

  getConvertedUsdToUah(): number {
    // if (!_.isEmpty(this.exchangeRatesModel.usdSell)) {
    const result = _.multiply(this.exchangeRatesModel.usdSell, this.exchangeRates.usdSell).toFixed(ROUNDING_PRECISION);
    return result;
    // }
  }

  getConvertedUahToUsd(): number {
    // if (!_.isEmpty(this.exchangeRatesModel.uahSell)) {
    const result = _.divide(this.exchangeRatesModel.uahSell, this.exchangeRates.usdSell).toFixed(ROUNDING_PRECISION);
    return result;
    // }
  }

  clearAll(): void {
    this.exchangeRatesModel = {
      usdSell: null,
      uahSell: null
    };
  }
}
