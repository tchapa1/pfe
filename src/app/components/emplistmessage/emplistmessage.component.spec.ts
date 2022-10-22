import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistmessageComponent } from './emplistmessage.component';

describe('EmplistmessageComponent', () => {
  let component: EmplistmessageComponent;
  let fixture: ComponentFixture<EmplistmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
