import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageSliderComponent } from './car-image-slider.component';

describe('CarImageSliderComponent', () => {
  let component: CarImageSliderComponent;
  let fixture: ComponentFixture<CarImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarImageSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
