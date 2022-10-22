import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditavancementtacheComponent } from './admineditavancementtache.component';

describe('AdmineditavancementtacheComponent', () => {
  let component: AdmineditavancementtacheComponent;
  let fixture: ComponentFixture<AdmineditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
