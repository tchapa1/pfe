import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistavancementprojetComponent } from './emplistavancementprojet.component';

describe('EmplistavancementprojetComponent', () => {
  let component: EmplistavancementprojetComponent;
  let fixture: ComponentFixture<EmplistavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
