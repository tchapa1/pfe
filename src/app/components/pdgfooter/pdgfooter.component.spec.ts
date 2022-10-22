import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgfooterComponent } from './pdgfooter.component';

describe('PdgfooterComponent', () => {
  let component: PdgfooterComponent;
  let fixture: ComponentFixture<PdgfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
