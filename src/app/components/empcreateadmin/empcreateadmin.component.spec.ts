import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreateadminComponent } from './empcreateadmin.component';

describe('EmpcreateadminComponent', () => {
  let component: EmpcreateadminComponent;
  let fixture: ComponentFixture<EmpcreateadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreateadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
