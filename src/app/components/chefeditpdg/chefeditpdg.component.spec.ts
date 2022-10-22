import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditpdgComponent } from './chefeditpdg.component';

describe('ChefeditpdgComponent', () => {
  let component: ChefeditpdgComponent;
  let fixture: ComponentFixture<ChefeditpdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditpdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditpdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
