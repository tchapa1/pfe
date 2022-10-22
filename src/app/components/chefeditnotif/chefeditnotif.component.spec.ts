import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditnotifComponent } from './chefeditnotif.component';

describe('ChefeditnotifComponent', () => {
  let component: ChefeditnotifComponent;
  let fixture: ComponentFixture<ChefeditnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
