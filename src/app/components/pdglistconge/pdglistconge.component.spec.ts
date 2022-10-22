import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistcongeComponent } from './pdglistconge.component';

describe('PdglistcongeComponent', () => {
  let component: PdglistcongeComponent;
  let fixture: ComponentFixture<PdglistcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistcongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
