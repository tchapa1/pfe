import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistmessageComponent } from './adminlistmessage.component';

describe('AdminlistmessageComponent', () => {
  let component: AdminlistmessageComponent;
  let fixture: ComponentFixture<AdminlistmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
