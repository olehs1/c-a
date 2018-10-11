import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'currency-app';

  constructor(private appService: AppService) {
    this.initData();
  }

  private initData(): void {
    // getExchangeRates
    const temp = this.appService.getExchangeRates();
    console.log(temp);
  }
}
