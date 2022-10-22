import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditchefComponent } from './pdgeditchef.component';

describe('PdgeditchefComponent', () => {
  let component: PdgeditchefComponent;
  let fixture: ComponentFixture<PdgeditchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
