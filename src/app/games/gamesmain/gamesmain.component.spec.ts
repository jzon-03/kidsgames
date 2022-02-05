import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesmainComponent } from './gamesmain.component';

describe('GamesmainComponent', () => {
  let component: GamesmainComponent;
  let fixture: ComponentFixture<GamesmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
