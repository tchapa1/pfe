import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditabsenceComponent } from './pdgeditabsence.component';

describe('PdgeditabsenceComponent', () => {
  let component: PdgeditabsenceComponent;
  let fixture: ComponentFixture<PdgeditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
