import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineCardComponent } from './engine-card.component';

describe('EngineCardComponent', () => {
  let component: EngineCardComponent;
  let fixture: ComponentFixture<EngineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
