import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplisttacheComponent } from './emplisttache.component';

describe('EmplisttacheComponent', () => {
  let component: EmplisttacheComponent;
  let fixture: ComponentFixture<EmplisttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplisttacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplisttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
