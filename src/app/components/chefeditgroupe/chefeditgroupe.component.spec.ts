import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditgroupeComponent } from './chefeditgroupe.component';

describe('ChefeditgroupeComponent', () => {
  let component: ChefeditgroupeComponent;
  let fixture: ComponentFixture<ChefeditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditgroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
