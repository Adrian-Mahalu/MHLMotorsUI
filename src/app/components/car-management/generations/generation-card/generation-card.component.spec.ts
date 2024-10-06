import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationCardComponent } from './generation-card.component';

describe('GenerationCardComponent', () => {
  let component: GenerationCardComponent;
  let fixture: ComponentFixture<GenerationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
