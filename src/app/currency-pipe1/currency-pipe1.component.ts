import { Component, OnInit } from '@angular/core';
import { CurrencyConverter } from './currency-convertion';

@Component({
  selector: 'app-currency-pipe1',
  templateUrl: './currency-pipe1.component.html',
  styleUrls: ['./currency-pipe1.component.css'],
})
export class CurrencyPipe1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public curValBef;
  public curBefore = 'XAF';
  public curAfter = 'XAF';
  public curValueAfter;
  currencies = ['XAF', 'USD', 'EURO', 'NAIRA', 'JPY', 'CNY'];

  getcurAfter(event) {
    this.curAfter = event.target.value;
    console.log(this.curAfter);
  }
  getcurBefore(event) {
    this.curBefore = event.target.value;
    console.log(this.curBefore);
  }
  getcurValBef(event){
    this.curValBef = event.target.value;
    console.log(this.curValBef);
  }
}
