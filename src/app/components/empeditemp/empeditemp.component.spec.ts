import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditempComponent } from './empeditemp.component';

describe('EmpeditempComponent', () => {
  let component: EmpeditempComponent;
  let fixture: ComponentFixture<EmpeditempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
