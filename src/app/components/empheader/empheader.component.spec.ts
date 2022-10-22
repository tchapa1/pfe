import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpheaderComponent } from './empheader.component';

describe('EmpheaderComponent', () => {
  let component: EmpheaderComponent;
  let fixture: ComponentFixture<EmpheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
