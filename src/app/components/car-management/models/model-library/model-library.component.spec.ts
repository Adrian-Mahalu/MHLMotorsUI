import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelLibraryComponent } from './model-library.component';

describe('ModelLibraryComponent', () => {
  let component: ModelLibraryComponent;
  let fixture: ComponentFixture<ModelLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
