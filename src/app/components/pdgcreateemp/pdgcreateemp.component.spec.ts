import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreateempComponent } from './pdgcreateemp.component';

describe('PdgcreateempComponent', () => {
  let component: PdgcreateempComponent;
  let fixture: ComponentFixture<PdgcreateempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreateempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreateempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
