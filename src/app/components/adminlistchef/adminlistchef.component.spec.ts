import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistchefComponent } from './adminlistchef.component';

describe('AdminlistchefComponent', () => {
  let component: AdminlistchefComponent;
  let fixture: ComponentFixture<AdminlistchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
