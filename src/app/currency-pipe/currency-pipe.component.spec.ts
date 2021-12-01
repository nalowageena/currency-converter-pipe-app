import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPipeComponent } from './currency-pipe.component';

describe('CurrencyPipeComponent', () => {
  let component: CurrencyPipeComponent;
  let fixture: ComponentFixture<CurrencyPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
