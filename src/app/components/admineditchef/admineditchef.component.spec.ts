import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditchefComponent } from './admineditchef.component';

describe('AdmineditchefComponent', () => {
  let component: AdmineditchefComponent;
  let fixture: ComponentFixture<AdmineditchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
