import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditnotifComponent } from './empeditnotif.component';

describe('EmpeditnotifComponent', () => {
  let component: EmpeditnotifComponent;
  let fixture: ComponentFixture<EmpeditnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
