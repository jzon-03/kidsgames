import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomsubtractionComponent } from './randomsubtraction.component';

describe('RandomsubtractionComponent', () => {
  let component: RandomsubtractionComponent;
  let fixture: ComponentFixture<RandomsubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomsubtractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomsubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
