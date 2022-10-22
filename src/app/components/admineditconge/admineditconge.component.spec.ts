import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcongeComponent } from './admineditconge.component';

describe('AdmineditcongeComponent', () => {
  let component: AdmineditcongeComponent;
  let fixture: ComponentFixture<AdmineditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditcongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
