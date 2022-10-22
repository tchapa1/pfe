import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistprojetComponent } from './adminlistprojet.component';

describe('AdminlistprojetComponent', () => {
  let component: AdminlistprojetComponent;
  let fixture: ComponentFixture<AdminlistprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
