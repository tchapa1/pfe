import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatemessageComponent } from './admincreatemessage.component';

describe('AdmincreatemessageComponent', () => {
  let component: AdmincreatemessageComponent;
  let fixture: ComponentFixture<AdmincreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreatemessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
