import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditcongeComponent } from './empeditconge.component';

describe('EmpeditcongeComponent', () => {
  let component: EmpeditcongeComponent;
  let fixture: ComponentFixture<EmpeditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditcongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
