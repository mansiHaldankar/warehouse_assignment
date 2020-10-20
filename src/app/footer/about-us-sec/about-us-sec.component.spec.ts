import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSecComponent } from './about-us-sec.component';

describe('AboutUsSecComponent', () => {
  let component: AboutUsSecComponent;
  let fixture: ComponentFixture<AboutUsSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
