import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditchefComponent } from './chefeditchef.component';

describe('ChefeditchefComponent', () => {
  let component: ChefeditchefComponent;
  let fixture: ComponentFixture<ChefeditchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
