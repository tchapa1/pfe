import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreateabsenceComponent } from './pdgcreateabsence.component';

describe('PdgcreateabsenceComponent', () => {
  let component: PdgcreateabsenceComponent;
  let fixture: ComponentFixture<PdgcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreateabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
