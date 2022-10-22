import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditprojetComponent } from './admineditprojet.component';

describe('AdmineditprojetComponent', () => {
  let component: AdmineditprojetComponent;
  let fixture: ComponentFixture<AdmineditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
