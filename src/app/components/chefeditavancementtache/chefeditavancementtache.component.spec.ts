import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditavancementtacheComponent } from './chefeditavancementtache.component';

describe('ChefeditavancementtacheComponent', () => {
  let component: ChefeditavancementtacheComponent;
  let fixture: ComponentFixture<ChefeditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
