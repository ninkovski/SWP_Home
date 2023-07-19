import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosBannerComponent } from './objetivos-banner.component';

describe('ObjetivosBannerComponent', () => {
  let component: ObjetivosBannerComponent;
  let fixture: ComponentFixture<ObjetivosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivosBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetivosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
