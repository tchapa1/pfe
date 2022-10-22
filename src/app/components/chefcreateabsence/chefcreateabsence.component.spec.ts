import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreateabsenceComponent } from './chefcreateabsence.component';

describe('ChefcreateabsenceComponent', () => {
  let component: ChefcreateabsenceComponent;
  let fixture: ComponentFixture<ChefcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreateabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
