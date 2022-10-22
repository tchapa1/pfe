import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistgroupeComponent } from './emplistgroupe.component';

describe('EmplistgroupeComponent', () => {
  let component: EmplistgroupeComponent;
  let fixture: ComponentFixture<EmplistgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistgroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
