import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomadditionComponent } from './randomaddition.component';

describe('RandomadditionComponent', () => {
  let component: RandomadditionComponent;
  let fixture: ComponentFixture<RandomadditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomadditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomadditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
