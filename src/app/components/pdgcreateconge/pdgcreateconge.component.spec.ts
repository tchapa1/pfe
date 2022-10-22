import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreatecongeComponent } from './pdgcreateconge.component';

describe('PdgcreatecongeComponent', () => {
  let component: PdgcreatecongeComponent;
  let fixture: ComponentFixture<PdgcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreatecongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
