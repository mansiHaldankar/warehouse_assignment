import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesSecComponent } from './policies-sec.component';

describe('PoliciesSecComponent', () => {
  let component: PoliciesSecComponent;
  let fixture: ComponentFixture<PoliciesSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
