import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistavancementtacheComponent } from './emplistavancementtache.component';

describe('EmplistavancementtacheComponent', () => {
  let component: EmplistavancementtacheComponent;
  let fixture: ComponentFixture<EmplistavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
