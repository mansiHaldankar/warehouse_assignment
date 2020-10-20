import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceSecComponent } from './customer-service-sec.component';

describe('CustomerServiceSecComponent', () => {
  let component: CustomerServiceSecComponent;
  let fixture: ComponentFixture<CustomerServiceSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServiceSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
