import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlisttacheComponent } from './adminlisttache.component';

describe('AdminlisttacheComponent', () => {
  let component: AdminlisttacheComponent;
  let fixture: ComponentFixture<AdminlisttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlisttacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlisttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
