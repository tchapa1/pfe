import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditcongeComponent } from './pdgeditconge.component';

describe('PdgeditcongeComponent', () => {
  let component: PdgeditcongeComponent;
  let fixture: ComponentFixture<PdgeditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditcongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
