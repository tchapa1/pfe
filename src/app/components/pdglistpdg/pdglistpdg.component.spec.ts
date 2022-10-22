import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistpdgComponent } from './pdglistpdg.component';

describe('PdglistpdgComponent', () => {
  let component: PdglistpdgComponent;
  let fixture: ComponentFixture<PdglistpdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistpdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistpdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
