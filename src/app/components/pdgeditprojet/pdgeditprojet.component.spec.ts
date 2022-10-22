import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditprojetComponent } from './pdgeditprojet.component';

describe('PdgeditprojetComponent', () => {
  let component: PdgeditprojetComponent;
  let fixture: ComponentFixture<PdgeditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
