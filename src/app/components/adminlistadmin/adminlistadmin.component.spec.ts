import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistadminComponent } from './adminlistadmin.component';

describe('AdminlistadminComponent', () => {
  let component: AdminlistadminComponent;
  let fixture: ComponentFixture<AdminlistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
