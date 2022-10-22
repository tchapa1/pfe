import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistabsenceComponent } from './emplistabsence.component';

describe('EmplistabsenceComponent', () => {
  let component: EmplistabsenceComponent;
  let fixture: ComponentFixture<EmplistabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
