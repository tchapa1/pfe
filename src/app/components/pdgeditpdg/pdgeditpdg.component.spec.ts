import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditpdgComponent } from './pdgeditpdg.component';

describe('PdgeditpdgComponent', () => {
  let component: PdgeditpdgComponent;
  let fixture: ComponentFixture<PdgeditpdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditpdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditpdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
