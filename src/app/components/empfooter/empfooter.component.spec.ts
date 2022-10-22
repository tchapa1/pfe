import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpfooterComponent } from './empfooter.component';

describe('EmpfooterComponent', () => {
  let component: EmpfooterComponent;
  let fixture: ComponentFixture<EmpfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
