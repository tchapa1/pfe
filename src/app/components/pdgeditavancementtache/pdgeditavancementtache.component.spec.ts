import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditavancementtacheComponent } from './pdgeditavancementtache.component';

describe('PdgeditavancementtacheComponent', () => {
  let component: PdgeditavancementtacheComponent;
  let fixture: ComponentFixture<PdgeditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
