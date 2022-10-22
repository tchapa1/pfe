import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatenotifComponent } from './admincreatenotif.component';

describe('AdmincreatenotifComponent', () => {
  let component: AdmincreatenotifComponent;
  let fixture: ComponentFixture<AdmincreatenotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreatenotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreatenotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
