import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreategroupeComponent } from './pdgcreategroupe.component';

describe('PdgcreategroupeComponent', () => {
  let component: PdgcreategroupeComponent;
  let fixture: ComponentFixture<PdgcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreategroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
