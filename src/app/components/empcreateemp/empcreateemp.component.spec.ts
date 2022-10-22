import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreateempComponent } from './empcreateemp.component';

describe('EmpcreateempComponent', () => {
  let component: EmpcreateempComponent;
  let fixture: ComponentFixture<EmpcreateempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreateempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreateempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
