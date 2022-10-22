import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistavancementtacheComponent } from './adminlistavancementtache.component';

describe('AdminlistavancementtacheComponent', () => {
  let component: AdminlistavancementtacheComponent;
  let fixture: ComponentFixture<AdminlistavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
