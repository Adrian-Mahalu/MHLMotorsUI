import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLibraryComponent } from './ad-library.component';

describe('AdLibraryComponent', () => {
  let component: AdLibraryComponent;
  let fixture: ComponentFixture<AdLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
