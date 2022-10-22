import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistmessageComponent } from './pdglistmessage.component';

describe('PdglistmessageComponent', () => {
  let component: PdglistmessageComponent;
  let fixture: ComponentFixture<PdglistmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
