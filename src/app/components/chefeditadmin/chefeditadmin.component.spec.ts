import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditadminComponent } from './chefeditadmin.component';

describe('ChefeditadminComponent', () => {
  let component: ChefeditadminComponent;
  let fixture: ComponentFixture<ChefeditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
