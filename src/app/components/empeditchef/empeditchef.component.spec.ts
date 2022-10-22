import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditchefComponent } from './empeditchef.component';

describe('EmpeditchefComponent', () => {
  let component: EmpeditchefComponent;
  let fixture: ComponentFixture<EmpeditchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
