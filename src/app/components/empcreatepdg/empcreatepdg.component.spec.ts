import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreatepdgComponent } from './empcreatepdg.component';

describe('EmpcreatepdgComponent', () => {
  let component: EmpcreatepdgComponent;
  let fixture: ComponentFixture<EmpcreatepdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreatepdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreatepdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
