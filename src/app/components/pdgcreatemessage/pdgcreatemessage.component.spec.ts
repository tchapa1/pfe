import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreatemessageComponent } from './pdgcreatemessage.component';

describe('PdgcreatemessageComponent', () => {
  let component: PdgcreatemessageComponent;
  let fixture: ComponentFixture<PdgcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreatemessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
