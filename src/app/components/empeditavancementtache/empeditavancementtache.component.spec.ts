import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditavancementtacheComponent } from './empeditavancementtache.component';

describe('EmpeditavancementtacheComponent', () => {
  let component: EmpeditavancementtacheComponent;
  let fixture: ComponentFixture<EmpeditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
