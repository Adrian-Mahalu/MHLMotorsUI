import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCarAdComponent } from './full-car-ad.component';

describe('FullCarAdComponent', () => {
  let component: FullCarAdComponent;
  let fixture: ComponentFixture<FullCarAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullCarAdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullCarAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
