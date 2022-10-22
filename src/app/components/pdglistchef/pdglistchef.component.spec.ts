import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistchefComponent } from './pdglistchef.component';

describe('PdglistchefComponent', () => {
  let component: PdglistchefComponent;
  let fixture: ComponentFixture<PdglistchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
