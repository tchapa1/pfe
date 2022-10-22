import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditempComponent } from './pdgeditemp.component';

describe('PdgeditempComponent', () => {
  let component: PdgeditempComponent;
  let fixture: ComponentFixture<PdgeditempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
