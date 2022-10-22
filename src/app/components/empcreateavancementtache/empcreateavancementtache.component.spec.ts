import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreateavancementtacheComponent } from './empcreateavancementtache.component';

describe('EmpcreateavancementtacheComponent', () => {
  let component: EmpcreateavancementtacheComponent;
  let fixture: ComponentFixture<EmpcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreateavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
