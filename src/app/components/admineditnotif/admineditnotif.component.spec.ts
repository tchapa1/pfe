import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditnotifComponent } from './admineditnotif.component';

describe('AdmineditnotifComponent', () => {
  let component: AdmineditnotifComponent;
  let fixture: ComponentFixture<AdmineditnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
