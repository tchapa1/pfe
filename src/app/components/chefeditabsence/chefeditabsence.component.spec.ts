import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditabsenceComponent } from './chefeditabsence.component';

describe('ChefeditabsenceComponent', () => {
  let component: ChefeditabsenceComponent;
  let fixture: ComponentFixture<ChefeditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
