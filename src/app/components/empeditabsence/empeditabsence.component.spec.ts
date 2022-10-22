import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditabsenceComponent } from './empeditabsence.component';

describe('EmpeditabsenceComponent', () => {
  let component: EmpeditabsenceComponent;
  let fixture: ComponentFixture<EmpeditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
