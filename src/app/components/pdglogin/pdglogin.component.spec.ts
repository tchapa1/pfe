import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgloginComponent } from './pdglogin.component';

describe('PdgloginComponent', () => {
  let component: PdgloginComponent;
  let fixture: ComponentFixture<PdgloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
