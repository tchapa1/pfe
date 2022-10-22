import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistavancementtacheComponent } from './pdglistavancementtache.component';

describe('PdglistavancementtacheComponent', () => {
  let component: PdglistavancementtacheComponent;
  let fixture: ComponentFixture<PdglistavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
