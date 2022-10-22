import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreatemessageComponent } from './empcreatemessage.component';

describe('EmpcreatemessageComponent', () => {
  let component: EmpcreatemessageComponent;
  let fixture: ComponentFixture<EmpcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreatemessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
