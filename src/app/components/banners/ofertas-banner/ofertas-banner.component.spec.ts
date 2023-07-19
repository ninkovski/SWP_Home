import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasBannerComponent } from './ofertas-banner.component';

describe('OfertasBannerComponent', () => {
  let component: OfertasBannerComponent;
  let fixture: ComponentFixture<OfertasBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
