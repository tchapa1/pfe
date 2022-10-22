import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistabsenceComponent } from './cheflistabsence.component';

describe('CheflistabsenceComponent', () => {
  let component: CheflistabsenceComponent;
  let fixture: ComponentFixture<CheflistabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
