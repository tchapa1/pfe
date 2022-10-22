import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreatechefComponent } from './empcreatechef.component';

describe('EmpcreatechefComponent', () => {
  let component: EmpcreatechefComponent;
  let fixture: ComponentFixture<EmpcreatechefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreatechefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreatechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
