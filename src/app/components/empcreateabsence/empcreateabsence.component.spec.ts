import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreateabsenceComponent } from './empcreateabsence.component';

describe('EmpcreateabsenceComponent', () => {
  let component: EmpcreateabsenceComponent;
  let fixture: ComponentFixture<EmpcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreateabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
