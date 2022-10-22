import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditnotifComponent } from './pdgeditnotif.component';

describe('PdgeditnotifComponent', () => {
  let component: PdgeditnotifComponent;
  let fixture: ComponentFixture<PdgeditnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
