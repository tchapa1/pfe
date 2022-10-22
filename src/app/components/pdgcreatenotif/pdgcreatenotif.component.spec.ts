import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreatenotifComponent } from './pdgcreatenotif.component';

describe('PdgcreatenotifComponent', () => {
  let component: PdgcreatenotifComponent;
  let fixture: ComponentFixture<PdgcreatenotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreatenotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreatenotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
