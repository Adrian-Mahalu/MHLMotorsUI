import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicShopComponent } from './mechanic-shop.component';

describe('MechanicShopComponent', () => {
  let component: MechanicShopComponent;
  let fixture: ComponentFixture<MechanicShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MechanicShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
