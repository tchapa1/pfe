import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreatechefComponent } from './pdgcreatechef.component';

describe('PdgcreatechefComponent', () => {
  let component: PdgcreatechefComponent;
  let fixture: ComponentFixture<PdgcreatechefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreatechefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreatechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
