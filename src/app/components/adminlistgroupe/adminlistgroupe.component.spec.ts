import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistgroupeComponent } from './adminlistgroupe.component';

describe('AdminlistgroupeComponent', () => {
  let component: AdminlistgroupeComponent;
  let fixture: ComponentFixture<AdminlistgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistgroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
