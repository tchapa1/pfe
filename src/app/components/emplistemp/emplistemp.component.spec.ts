import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistempComponent } from './emplistemp.component';

describe('EmplistempComponent', () => {
  let component: EmplistempComponent;
  let fixture: ComponentFixture<EmplistempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
