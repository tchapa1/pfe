import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreategroupeComponent } from './empcreategroupe.component';

describe('EmpcreategroupeComponent', () => {
  let component: EmpcreategroupeComponent;
  let fixture: ComponentFixture<EmpcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreategroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
