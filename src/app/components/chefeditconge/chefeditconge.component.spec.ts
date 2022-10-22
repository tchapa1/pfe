import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditcongeComponent } from './chefeditconge.component';

describe('ChefeditcongeComponent', () => {
  let component: ChefeditcongeComponent;
  let fixture: ComponentFixture<ChefeditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditcongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
