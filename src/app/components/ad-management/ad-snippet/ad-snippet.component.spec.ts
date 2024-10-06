import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSnippetComponent } from './ad-snippet.component';

describe('AdSnippetComponent', () => {
  let component: AdSnippetComponent;
  let fixture: ComponentFixture<AdSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
