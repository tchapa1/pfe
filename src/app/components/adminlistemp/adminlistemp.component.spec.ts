import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistempComponent } from './adminlistemp.component';

describe('AdminlistempComponent', () => {
  let component: AdminlistempComponent;
  let fixture: ComponentFixture<AdminlistempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
