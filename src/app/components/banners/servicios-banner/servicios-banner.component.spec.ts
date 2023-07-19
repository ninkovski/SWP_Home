import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosBannerComponent } from './servicios-banner.component';

describe('ServiciosBannerComponent', () => {
  let component: ServiciosBannerComponent;
  let fixture: ComponentFixture<ServiciosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
