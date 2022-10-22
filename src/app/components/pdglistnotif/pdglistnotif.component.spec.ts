import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistnotifComponent } from './pdglistnotif.component';

describe('PdglistnotifComponent', () => {
  let component: PdglistnotifComponent;
  let fixture: ComponentFixture<PdglistnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
