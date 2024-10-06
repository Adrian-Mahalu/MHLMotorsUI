import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineLibraryComponent } from './engine-library.component';

describe('EngineLibraryComponent', () => {
  let component: EngineLibraryComponent;
  let fixture: ComponentFixture<EngineLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
