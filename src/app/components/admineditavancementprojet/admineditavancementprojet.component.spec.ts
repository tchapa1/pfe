import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditavancementprojetComponent } from './admineditavancementprojet.component';

describe('AdmineditavancementprojetComponent', () => {
  let component: AdmineditavancementprojetComponent;
  let fixture: ComponentFixture<AdmineditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
