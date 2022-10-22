import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistnotifComponent } from './adminlistnotif.component';

describe('AdminlistnotifComponent', () => {
  let component: AdminlistnotifComponent;
  let fixture: ComponentFixture<AdminlistnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
