import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'currencyconverter',
})
export class CurrencyConverter implements PipeTransform {
  public curValAfter = 0;
  transform(curValBef: number, curBefore: String, curAfter: String): number {
    
    // curValAfter = this.convert1(curValBef, curBefore, 'XAF');
    // curValAfter = this.convert1(curValAfter, 'XAF', curAfter);
    this.curValAfter = this.convert2(curValBef, curBefore, curAfter);
    return this.curValAfter;
  }

  // convert all currencies to cfa francs before converting it to another currency
  convert1(curValBef: number, curBefore: String, curAfter: String): number {
    if ((curAfter = 'XAF')) {
      if ((curBefore = 'XAF')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef;
      }
      if ((curBefore = 'USD')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef * 580.889;
      }
      if ((curBefore = 'EURO')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef * 655.65;
      }
      if ((curBefore = 'NAIRA')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef * 1.41;
      }
      if ((curBefore = 'JPY')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef * 5.11;
      }
      if ((curBefore = 'CNY(Chinese Yuan)')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef * 90.94;
      }
    } else if ((curBefore = 'XAF')) {
      if ((curAfter = 'XAF')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef;
      }
      if ((curAfter = 'USD')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef / 580.889;
      }
      if ((curAfter = 'EURO')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef / 655.65;
      }
      if ((curAfter = 'NAIRA')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef / 1.41;
      }
      if ((curAfter = 'JPY')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef / 5.11;
      }
      if ((curAfter = 'Chinese Yuan (CNY)')) {
        // 1 USD = 580.889 XAF
        this.curValAfter = curValBef / 90.94;
      }
    }
    return this.curValAfter;
  }
  convert2(curValBef: number, curBefore: String, curAfter: String): number {
    // less cumbersome conversion method
    // create a dictionary and add the currencies as the keys and their corresponding values in cfa as their values
    // to convert from one currency(cur1) to the other(cur2) we apply the formula: X cur1 = X * R12 where R12 = cur1 in XAF / cur2 in XAF

    let currencies = new Map<string, number>();
    currencies.set('XAF', 1);
    currencies.set('USD', 575.5);
    currencies.set('EURO', 655.957);
    currencies.set('NAIRA', 156.25);
    currencies.set('JPY', 5.075);
    currencies.set('CNY', 90.0);

    for (const key of currencies.keys()) {
      if (curBefore == key) {
        if (currencies.has(String(curAfter))) {
          var ratio =
            Number(currencies.get(String(curBefore))) /
            Number(currencies.get(String(curAfter)));
            console.log(ratio);
          this.curValAfter =
            ratio * curValBef;
        }
      }
    }
    return this.curValAfter;
  }
}
