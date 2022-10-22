import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreatepdgComponent } from './pdgcreatepdg.component';

describe('PdgcreatepdgComponent', () => {
  let component: PdgcreatepdgComponent;
  let fixture: ComponentFixture<PdgcreatepdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreatepdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreatepdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
