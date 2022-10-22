import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditadminComponent } from './pdgeditadmin.component';

describe('PdgeditadminComponent', () => {
  let component: PdgeditadminComponent;
  let fixture: ComponentFixture<PdgeditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
