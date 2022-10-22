import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreateavancementtacheComponent } from './pdgcreateavancementtache.component';

describe('PdgcreateavancementtacheComponent', () => {
  let component: PdgcreateavancementtacheComponent;
  let fixture: ComponentFixture<PdgcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreateavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
