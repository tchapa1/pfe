import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexapplicationComponent } from './indexapplication.component';

describe('IndexapplicationComponent', () => {
  let component: IndexapplicationComponent;
  let fixture: ComponentFixture<IndexapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
