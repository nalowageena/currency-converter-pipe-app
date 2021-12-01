import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'currencyconvert',
})
export class CurrencyConverter implements PipeTransform {
  transform(curValBef: number, curBefore: String, curAfter: String): number {
     var curValAfter = 0;
     curValAfter = this.convert(curValBef, curBefore, 'XAF');
     curValAfter = this.convert(curValAfter, 'XAF', curAfter);
     return curValAfter;
  }
  convert(curValBef: number, curBefore: String, curAfter: String): number{
    var curValAfter = 0;
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
      if ((curBefore = 'Chinese Yuan (CNY)')) {
        // 1 USD = 580.889 XAF
        curValAfter = curValBef * 90.94;
      }
    }

    else if ((curBefore = 'XAF')) {
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
}
