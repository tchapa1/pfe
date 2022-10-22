import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffooterComponent } from './cheffooter.component';

describe('CheffooterComponent', () => {
  let component: CheffooterComponent;
  let fixture: ComponentFixture<CheffooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheffooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
