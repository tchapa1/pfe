import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistpdgComponent } from './adminlistpdg.component';

describe('AdminlistpdgComponent', () => {
  let component: AdminlistpdgComponent;
  let fixture: ComponentFixture<AdminlistpdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistpdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistpdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
