import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistprojetComponent } from './emplistprojet.component';

describe('EmplistprojetComponent', () => {
  let component: EmplistprojetComponent;
  let fixture: ComponentFixture<EmplistprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
