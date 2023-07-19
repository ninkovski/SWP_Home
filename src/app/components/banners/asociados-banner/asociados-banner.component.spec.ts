import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociadosBannerComponent } from './asociados-banner.component';

describe('AsociadosBannerComponent', () => {
  let component: AsociadosBannerComponent;
  let fixture: ComponentFixture<AsociadosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociadosBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociadosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
