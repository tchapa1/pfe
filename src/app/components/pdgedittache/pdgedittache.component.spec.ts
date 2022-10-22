import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgedittacheComponent } from './pdgedittache.component';

describe('PdgedittacheComponent', () => {
  let component: PdgedittacheComponent;
  let fixture: ComponentFixture<PdgedittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgedittacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgedittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
