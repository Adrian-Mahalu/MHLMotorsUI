import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailingServiceComponent } from './detailing-service.component';

describe('DetailingServiceComponent', () => {
  let component: DetailingServiceComponent;
  let fixture: ComponentFixture<DetailingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailingServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
