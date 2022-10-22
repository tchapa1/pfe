import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreatenotifComponent } from './empcreatenotif.component';

describe('EmpcreatenotifComponent', () => {
  let component: EmpcreatenotifComponent;
  let fixture: ComponentFixture<EmpcreatenotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreatenotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreatenotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
