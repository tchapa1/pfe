import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistpdgComponent } from './emplistpdg.component';

describe('EmplistpdgComponent', () => {
  let component: EmplistpdgComponent;
  let fixture: ComponentFixture<EmplistpdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistpdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistpdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
