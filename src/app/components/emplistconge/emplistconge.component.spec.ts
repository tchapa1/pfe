import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistcongeComponent } from './emplistconge.component';

describe('EmplistcongeComponent', () => {
  let component: EmplistcongeComponent;
  let fixture: ComponentFixture<EmplistcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistcongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
