import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistnotifComponent } from './emplistnotif.component';

describe('EmplistnotifComponent', () => {
  let component: EmplistnotifComponent;
  let fixture: ComponentFixture<EmplistnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
