import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreatetacheComponent } from './empcreatetache.component';

describe('EmpcreatetacheComponent', () => {
  let component: EmpcreatetacheComponent;
  let fixture: ComponentFixture<EmpcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreatetacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
