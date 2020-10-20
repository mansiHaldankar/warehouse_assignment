import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerSpecialSaleComponent } from './summer-special-sale.component';

describe('SummerSpecialSaleComponent', () => {
  let component: SummerSpecialSaleComponent;
  let fixture: ComponentFixture<SummerSpecialSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerSpecialSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerSpecialSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
