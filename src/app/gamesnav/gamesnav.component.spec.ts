import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesnavComponent } from './gamesnav.component';

describe('GamesnavComponent', () => {
  let component: GamesnavComponent;
  let fixture: ComponentFixture<GamesnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
