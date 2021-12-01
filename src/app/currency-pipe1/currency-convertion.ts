import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'currencyconverter',
})
export class CurrencyConverter implements PipeTransform {
  transform(curValBef: number, curBefore: String, curAfter: String): number {
    var curValAfter = 0;
    curValAfter = this.convert1(curValBef, curBefore, 'XAF');
    curValAfter = this.convert1(curValAfter, 'XAF', curAfter);
    // curValAfter = this.convert2(curValBef, curBefore, curAfter);
    return curValAfter;
  }

  // convert all currencies to cfa francs before converting it to another currency
  convert1(curValBef: number, curBefore: String, curAfter: String): number {
    let curValAfter = 0;
    if ((curAfter = 'XAF')) {
      if ((curBefore = 'XAF')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef;
      }
      if ((curBefore = 'USD')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef * 580.889;
      }
      if ((curBefore = 'EURO')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef * 655.65;
      }
      if ((curBefore = 'NAIRA')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef * 1.41;
      }
      if ((curBefore = 'JPY')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef * 5.11;
      }
      if ((curBefore = 'CNY(Chinese Yuan)')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef * 90.94;
      }
    } else if ((curBefore = 'XAF')) {
      if ((curAfter = 'XAF')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef;
      }
      if ((curAfter = 'USD')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef / 580.889;
      }
      if ((curAfter = 'EURO')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef / 655.65;
      }
      if ((curAfter = 'NAIRA')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef / 1.41;
      }
      if ((curAfter = 'JPY')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef / 5.11;
      }
      if ((curAfter = 'Chinese Yuan (CNY)')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef / 90.94;
      }
    }
    return curValAfter;
  }
  convert2(curValBef: number, curBefore: String, curAfter: String): number {
    // less cumbersome conversion method
    // create a dictionary and add the currencies as the keys and their corresponding values in cfa as their values
    // to convert from one currency(cur1) to the other(cur2) we apply the formula: X cur1 = X * R12 where R12 = cur1 in XAF / cur2 in XAF
    
    let curValAfter = 0;

    

    return curValAfter;
  }
}
