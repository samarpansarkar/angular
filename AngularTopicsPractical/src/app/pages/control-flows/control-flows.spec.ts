import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlows } from './control-flows';

describe('ControlFlows', () => {
  let component: ControlFlows;
  let fixture: ComponentFixture<ControlFlows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlows],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlFlows);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
