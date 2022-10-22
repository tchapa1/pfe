import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditavancementprojetComponent } from './chefeditavancementprojet.component';

describe('ChefeditavancementprojetComponent', () => {
  let component: ChefeditavancementprojetComponent;
  let fixture: ComponentFixture<ChefeditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
