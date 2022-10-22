import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditprojetComponent } from './empeditprojet.component';

describe('EmpeditprojetComponent', () => {
  let component: EmpeditprojetComponent;
  let fixture: ComponentFixture<EmpeditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
