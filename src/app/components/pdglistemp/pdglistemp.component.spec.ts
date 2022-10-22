import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistempComponent } from './pdglistemp.component';

describe('PdglistempComponent', () => {
  let component: PdglistempComponent;
  let fixture: ComponentFixture<PdglistempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
