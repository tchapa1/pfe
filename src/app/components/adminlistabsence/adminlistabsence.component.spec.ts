import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistabsenceComponent } from './adminlistabsence.component';

describe('AdminlistabsenceComponent', () => {
  let component: AdminlistabsenceComponent;
  let fixture: ComponentFixture<AdminlistabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
