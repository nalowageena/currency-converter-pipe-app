import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe1',
  templateUrl: './currency-pipe1.component.html',
  styleUrls: ['./currency-pipe1.component.css'],
})
export class CurrencyPipe1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public curValBef;
  public curBefore = '';
  public curAfter = '';
  public curValueAfter;
  currencies = ['XAF', 'USD', 'EURO', 'NAIRA', 'JPY', 'CNY'];

  public getcurAfter(event) {
    this.curAfter = event.target.value;
  }
  public getcurBefore(event) {
    this.curBefore = event.target.value;
  }
  public getcurValBef(event){
    this.curValBef = event.target.value;
  }
}
