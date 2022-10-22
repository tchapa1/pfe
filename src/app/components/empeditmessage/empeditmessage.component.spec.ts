import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditmessageComponent } from './empeditmessage.component';

describe('EmpeditmessageComponent', () => {
  let component: EmpeditmessageComponent;
  let fixture: ComponentFixture<EmpeditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
