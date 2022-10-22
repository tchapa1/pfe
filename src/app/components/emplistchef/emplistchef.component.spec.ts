import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistchefComponent } from './emplistchef.component';

describe('EmplistchefComponent', () => {
  let component: EmplistchefComponent;
  let fixture: ComponentFixture<EmplistchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
