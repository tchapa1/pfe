import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditpdgComponent } from './admineditpdg.component';

describe('AdmineditpdgComponent', () => {
  let component: AdmineditpdgComponent;
  let fixture: ComponentFixture<AdmineditpdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditpdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditpdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
