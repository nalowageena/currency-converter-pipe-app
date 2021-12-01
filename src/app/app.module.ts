import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverter } from './currency-pipe1/currency-convertion';
// import { TestComponent } from './test/test.component';
import { CurrencyPipe1Component } from './currency-pipe1/currency-pipe1.component' 

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverter,
    // TestComponent,
    CurrencyPipe1Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
