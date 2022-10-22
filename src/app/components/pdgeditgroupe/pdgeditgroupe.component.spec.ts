import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditgroupeComponent } from './pdgeditgroupe.component';

describe('PdgeditgroupeComponent', () => {
  let component: PdgeditgroupeComponent;
  let fixture: ComponentFixture<PdgeditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditgroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
