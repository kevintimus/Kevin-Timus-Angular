import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistadeCorreus } from './llistade-correus';

describe('LlistadeCorreus', () => {
  let component: LlistadeCorreus;
  let fixture: ComponentFixture<LlistadeCorreus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistadeCorreus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistadeCorreus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
