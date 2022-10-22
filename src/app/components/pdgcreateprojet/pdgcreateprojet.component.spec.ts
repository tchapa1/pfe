import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreateprojetComponent } from './pdgcreateprojet.component';

describe('PdgcreateprojetComponent', () => {
  let component: PdgcreateprojetComponent;
  let fixture: ComponentFixture<PdgcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreateprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
