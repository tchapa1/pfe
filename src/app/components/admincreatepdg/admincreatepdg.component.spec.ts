import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatepdgComponent } from './admincreatepdg.component';

describe('AdmincreatepdgComponent', () => {
  let component: AdmincreatepdgComponent;
  let fixture: ComponentFixture<AdmincreatepdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreatepdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreatepdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
