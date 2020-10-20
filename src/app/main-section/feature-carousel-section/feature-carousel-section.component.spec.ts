import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCarouselSectionComponent } from './feature-carousel-section.component';

describe('FeatureCarouselSectionComponent', () => {
  let component: FeatureCarouselSectionComponent;
  let fixture: ComponentFixture<FeatureCarouselSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureCarouselSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCarouselSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
