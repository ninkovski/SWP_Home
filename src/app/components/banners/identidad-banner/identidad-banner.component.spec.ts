import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadBannerComponent } from './identidad-banner.component';

describe('IdentidadBannerComponent', () => {
  let component: IdentidadBannerComponent;
  let fixture: ComponentFixture<IdentidadBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentidadBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentidadBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
