import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistadminComponent } from './emplistadmin.component';

describe('EmplistadminComponent', () => {
  let component: EmplistadminComponent;
  let fixture: ComponentFixture<EmplistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
