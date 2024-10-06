import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationLibraryComponent } from './generation-library.component';

describe('GenerationLibraryComponent', () => {
  let component: GenerationLibraryComponent;
  let fixture: ComponentFixture<GenerationLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
