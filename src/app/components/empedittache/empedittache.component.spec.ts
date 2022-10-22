import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpedittacheComponent } from './empedittache.component';

describe('EmpedittacheComponent', () => {
  let component: EmpedittacheComponent;
  let fixture: ComponentFixture<EmpedittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpedittacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpedittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
