import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditempComponent } from './chefeditemp.component';

describe('ChefeditempComponent', () => {
  let component: ChefeditempComponent;
  let fixture: ComponentFixture<ChefeditempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
