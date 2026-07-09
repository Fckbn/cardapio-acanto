import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jarvis } from './jarvis';

describe('Jarvis', () => {
  let component: Jarvis;
  let fixture: ComponentFixture<Jarvis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jarvis],
    }).compileComponents();

    fixture = TestBed.createComponent(Jarvis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
