import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreatetacheComponent } from './pdgcreatetache.component';

describe('PdgcreatetacheComponent', () => {
  let component: PdgcreatetacheComponent;
  let fixture: ComponentFixture<PdgcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreatetacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
