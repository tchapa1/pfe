import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateempComponent } from './admincreateemp.component';

describe('AdmincreateempComponent', () => {
  let component: AdmincreateempComponent;
  let fixture: ComponentFixture<AdmincreateempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
