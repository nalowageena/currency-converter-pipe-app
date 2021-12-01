import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPipe1Component } from './currency-pipe1.component';

describe('CurrencyPipe1Component', () => {
  let component: CurrencyPipe1Component;
  let fixture: ComponentFixture<CurrencyPipe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyPipe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPipe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
