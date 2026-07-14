import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowWayDataBindingComponent } from './tow-way-data-binding.component';

describe('TowWayDataBindingComponent', () => {
  let component: TowWayDataBindingComponent;
  let fixture: ComponentFixture<TowWayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowWayDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
