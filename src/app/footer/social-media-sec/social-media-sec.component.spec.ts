import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSecComponent } from './social-media-sec.component';

describe('SocialMediaSecComponent', () => {
  let component: SocialMediaSecComponent;
  let fixture: ComponentFixture<SocialMediaSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
