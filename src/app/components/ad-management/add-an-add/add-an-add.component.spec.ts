import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnAddComponent } from './add-an-add.component';

describe('AddAnAddComponent', () => {
  let component: AddAnAddComponent;
  let fixture: ComponentFixture<AddAnAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
