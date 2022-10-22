import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditgroupeComponent } from './admineditgroupe.component';

describe('AdmineditgroupeComponent', () => {
  let component: AdmineditgroupeComponent;
  let fixture: ComponentFixture<AdmineditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditgroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
