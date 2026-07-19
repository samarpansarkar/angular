import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseControlFlow } from './if-else-control-flow';

describe('IfElseControlFlow', () => {
  let component: IfElseControlFlow;
  let fixture: ComponentFixture<IfElseControlFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseControlFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(IfElseControlFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
