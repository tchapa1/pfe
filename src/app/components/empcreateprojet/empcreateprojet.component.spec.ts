import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreateprojetComponent } from './empcreateprojet.component';

describe('EmpcreateprojetComponent', () => {
  let component: EmpcreateprojetComponent;
  let fixture: ComponentFixture<EmpcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreateprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
