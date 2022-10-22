import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditadminComponent } from './empeditadmin.component';

describe('EmpeditadminComponent', () => {
  let component: EmpeditadminComponent;
  let fixture: ComponentFixture<EmpeditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
