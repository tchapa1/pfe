import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditpdgComponent } from './empeditpdg.component';

describe('EmpeditpdgComponent', () => {
  let component: EmpeditpdgComponent;
  let fixture: ComponentFixture<EmpeditpdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditpdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditpdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
