import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgheaderComponent } from './pdgheader.component';

describe('PdgheaderComponent', () => {
  let component: PdgheaderComponent;
  let fixture: ComponentFixture<PdgheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
