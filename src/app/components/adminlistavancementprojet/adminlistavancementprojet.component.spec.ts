import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistavancementprojetComponent } from './adminlistavancementprojet.component';

describe('AdminlistavancementprojetComponent', () => {
  let component: AdminlistavancementprojetComponent;
  let fixture: ComponentFixture<AdminlistavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
