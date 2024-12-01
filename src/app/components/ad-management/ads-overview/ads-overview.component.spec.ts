import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsOverviewComponent } from './ads-overview.component';

describe('AdsOverviewComponent', () => {
  let component: AdsOverviewComponent;
  let fixture: ComponentFixture<AdsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
