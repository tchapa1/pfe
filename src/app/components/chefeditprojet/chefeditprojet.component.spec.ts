import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditprojetComponent } from './chefeditprojet.component';

describe('ChefeditprojetComponent', () => {
  let component: ChefeditprojetComponent;
  let fixture: ComponentFixture<ChefeditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
