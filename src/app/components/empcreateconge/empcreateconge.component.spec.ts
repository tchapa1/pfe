import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreatecongeComponent } from './empcreateconge.component';

describe('EmpcreatecongeComponent', () => {
  let component: EmpcreatecongeComponent;
  let fixture: ComponentFixture<EmpcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreatecongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
