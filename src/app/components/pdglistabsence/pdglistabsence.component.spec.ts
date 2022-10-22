import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistabsenceComponent } from './pdglistabsence.component';

describe('PdglistabsenceComponent', () => {
  let component: PdglistabsenceComponent;
  let fixture: ComponentFixture<PdglistabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
